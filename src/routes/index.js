import React from 'react'
import {
	AsyncStorage
} from 'react-native'

import {
	StackNavigator
} from 'react-navigation'

import {
	socket,
	SocketEmit,
	SocketOn,
	SocketEmitter
} from '../modules'
import IndexScreen from '../pages/login'
import LoginScreen from '../pages/login/login'
import RegisterScreen from '../pages/login/register'
import HomeScreen from '../pages/home'
import ChatScreen from '../pages/chat'

console.disableYellowBox = true

const checkToken = () => {
	AsyncStorage.getItem('@Token', (err, res) => {
		if(err) {
			return err
		}

		return res
	})
}

const StackNavigatorConfig = {
	headerMode: 'none',
	// initialRouteName: checkToken() === null ? 'Index' : 'Chat'
}

const AppNavigator = StackNavigator({
	Index: {
		screen: IndexScreen
	},
	Login: {
		screen: LoginScreen
	},
	Register: {
		screen: RegisterScreen
	},
	Home: {
		screen: HomeScreen
	},
	Chat: {
		screen: ChatScreen
	}
}, StackNavigatorConfig)


class App extends React.Component {
	render() {
		return (
			<AppNavigator />
		)
	}

	componentWillMount() {
		socket.open()
	}

	componentDidMount() {
		SocketOn('connect', () => {
			console.log('socket connect')

			SocketEmitter('clientid', null, (res) => {
				
			})
		})

		SocketOn('error', () => {
			console.log('socket error')
		})
	}

	componentWillUnmount() {
		socket.close()
	}
}

module.exports = App