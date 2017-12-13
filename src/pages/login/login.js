import React from 'react'
import {
	Alert,
	AsyncStorage,
	Text,
	TextInput,
	View
} from 'react-native'

import {
	firstColor,
	secondColor,
	textDefault,
	textColor,
	Button
} from '../../components'
import {
	SocketEmitter
} from '../../modules'


class LoginScreen extends React.Component {
	state = {
		userid: this.props.navigation.state.params.userid,
		password: null
	}

	_login() {
		const data = {
			userid: this.state.userid,
			password: this.state.password
		}
		SocketEmitter('login', data, (res) => {
			if(res.headers.status === 200) {
				/* save token */
				AsyncStorage.setItem('@Token', res.data.token, (err) => {
					if(err) {
						return err
					}

					this.props.navigation.dispatch({
						type: 'Navigation/RESET',
						index: 0,
						key: null,
						actions: [{ type: 'Navigation/NAVIGATE', routeName: 'Home' }]
					})
				})
			} else {
				Alert.alert(null, res.headers.message)
			}
		})
	}

	render() {
		return (
			<View style = {{ flex: 1, padding: 5, backgroundColor: firstColor }}>
				<View style = {{ flex: 1, justifyContent: 'center' }}>
					<TextInput
						onChangeText = { (text) => this.setState({userid: text }) }
						placeholder = 'email or phone'
						placeholderTextColor = 'darkgrey'
						style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'white' }]}
						underlineColorAndroid = 'transparent'
						value = {this.state.userid}/>

					<TextInput
						onChangeText = { (text) => this.setState({password: text }) }
						// onSubmitEditing = { this._next.bind(this) }
						placeholder = 'password'
						placeholderTextColor = 'darkgrey'
						secureTextEntry = {true}
						style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'white' }]}
						underlineColorAndroid = 'transparent'
						value = {this.state.password}/>

					<View style = {{ marginTop: 10 }}>
						<Button
							onPress = { this._login.bind(this) }
							name = 'Login' />
					</View>
				</View>
			</View>
		)
	}
}

module.exports = LoginScreen