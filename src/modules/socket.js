'use strict'

const io = require('socket.io-client')

const socket = io('http://10.0.2.2:3000', {transports: ['websocket'], forceNew: true})

module.exports = socket