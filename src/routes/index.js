import React from 'react'
import {
	Alert,
	AppState,
	AsyncStorage
} from 'react-native'

import {
	StackNavigator,
	TabNavigator
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

/*
 *
 react-native-background-task
 *
 */
import BackgroundTask from 'react-native-background-task'

BackgroundTask.define(async () => {
	console.log('===== +++++ ===== Hello from a background task ===== +++++ =====')
	/*navigator.geolocation.getCurrentPosition(
		(success) => {
			console.log(success)
		}, (err) => console.log('===== error =====', err),
		{enableHighAccuracy: true})*/
	BackgroundTask.finish()
})
/**/


const StackNavigatorConfig = {
	headerMode: 'none'
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
	state = {
		appState: AppState.currentState
	}

	async checkStatus() {
    const status = await BackgroundTask.statusAsync()
    console.log('=====', status, BackgroundTask)
    
    if (status.available) {
      // Everything's fine
      return
    }
    
    const reason = status.unavailableReason
    if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
      Alert.alert('Denied', 'Please enable background "Background App Refresh" for this app')
    } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
      Alert.alert('Restricted', 'Background tasks are restricted on your device')
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('===== ===== App has come to the foreground! ===== =====', this.state)
    }

    console.log(nextAppState)
    this.setState({appState: nextAppState});
  }

	render() {
		return (
			<AppNavigator />
		)
	}

	componentWillMount() {
		// socket.open()
	}

	componentDidMount() {
		SocketOn('connect', () => {
			console.log('socket connect')

			SocketEmitter('clientid', null, (res) => {
				console.log('clientid', res)
			})
		})

		SocketOn('error', () => {
			console.log('socket error')
		})

		/*
		 *
		 react-native-background-task
		 *
		 */
		BackgroundTask.cancel()
		// BackgroundTask.schedule()
		// this.checkStatus()
		/**/

		AppState.addEventListener('change', this._handleAppStateChange)
	}

	componentWillUnmount() {
		// socket.close()

		AppState.removeEventListener('change', this._handleAppStateChange)
	}
}

module.exports = App
