import React from 'react'
import {
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


class LoginScreen extends React.Component {
	_login() {
		this.props.navigation.navigate('Home')
	}

	render() {
		return (
			<View style = {{ flex: 1, padding: 5, backgroundColor: firstColor }}>
				<View style = {{ flex: 1, justifyContent: 'center' }}>
					<TextInput
						placeholder = 'email or phone'
						placeholderTextColor = 'white'
						style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'white' }]}
						underlineColorAndroid = 'transparent'/>

					<TextInput
						placeholder = 'password'
						placeholderTextColor = 'white'
						style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'white' }]}
						underlineColorAndroid = 'transparent'/>

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