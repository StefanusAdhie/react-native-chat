'use strict'

import {Platform} from 'react-native'

const io = require('socket.io-client')

const socket = Platform.OS === 'ios' ? io('http://0.0.0.0:3030', {transports: ['websocket'], forceNew: true}) : io('http://10.0.2.2:3030', {transports: ['websocket'], forceNew: true}) // io('http://10.0.2.2:3030', {transports: ['websocket'], forceNew: true})

module.exports = socket
