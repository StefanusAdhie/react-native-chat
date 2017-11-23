'use strict'

import socket from './socket'

exports.SocketEmit = (emitName, data) => {
	socket.emit(emitName, data)
}

exports.SocketOn = (emitName, data) => {
	socket.on(emitName, (res) => {
		return data(res) 
	})
}

exports.SocketEmitter = (emitName, data) => {
	
}