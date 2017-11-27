'use strict'

import socket from './socket'
import {
	Alert,
	AsyncStorage
} from 'react-native'

exports.SocketEmit = (emitName, data) => {
	socket.emit(emitName, data)
}

exports.SocketOn = (emitName, data) => {
	socket.on(emitName, (res) => {
		return data(res) 
	})
}

exports.SocketEmitter = (emitName, data, success, timeout) => {
	const token = await AsyncStorage.getItem('@token')
	
	socket.emit(emitName, data)

	const time_out = setTimeout(() => {
		socket.removeListener(socketName)
		Alert.alert(null, 'Session Timeout')
		return timeout(true)
	}, 5000)

	socket.on(emitName, (res) => {
		clearTimeout(time_out)
		return success(res)
	})
}