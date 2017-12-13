'use strict'

import socket from './socket'
import {
	Alert,
	AsyncStorage
} from 'react-native'

const requestData = (data, cb) => {
	AsyncStorage.getItem('@Token', (err, res) => {
		if(err) {
			return err
		}

		const newData = {
			headers: {
				token: res === null ? false : res
			},
			data: data
		}
		return cb(newData)
	})
}

exports.SocketEmit = (emitName, data) => {
	requestData(data, (res) => {
		console.log(emitName, res)
		socket.emit(emitName, res)
	})
}

exports.SocketOn = (emitName, data) => {
	socket.on(emitName, (res) => {
		console.log(res)
		return data(res) 
	})
}

exports.SocketEmitter = (emitName, data, success, timeout) => {
	if(emitName === 'clientid') {
		data = socket.id
	}
	
	requestData(data, (res) => {
		console.log(emitName, res)
		socket.emit(emitName, res)
	})

	const time_out = setTimeout(() => {
		socket.removeListener(emitName)
		Alert.alert(null, 'Session Timeout')
		if(timeout) {
			return timeout(true)
		} else {
			return true
		}
	}, 5000)

	socket.on(emitName, (res) => {
		socket.removeListener(emitName)
		clearTimeout(time_out)
		return success(res)
	})
}