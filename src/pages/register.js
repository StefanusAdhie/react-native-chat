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
	textColor
} from '../components'


class RegisterScreen extends React.Component {
	render() {
		return (
			<View style = {{ flex: 1 }}>
				<View style = {{ flexDirection: 'row', height: 50, borderBottomWidth: 0.5, borderColor: '#ccc', backgroundColor: secondColor }}>
					<View style = {{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
						<Text style = { textColor }> X </Text>
					</View>

					<View style = {{ flex: 2, padding: 10, justifyContent: 'center' }}>
						<Text style = { textColor }> Title </Text>
					</View>

					<View style = {{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
						<Text style = { textColor }> X </Text>
					</View>
				</View>

				<View style = {{ flex: 1, padding: 5, backgroundColor: firstColor }}>
					<View style = {{ flex: 1 }}>
						<TextInput
							placeholder = 'email'
							placeholderTextColor = 'white'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'/>

						<TextInput
							placeholder = 'phone'
							placeholderTextColor = 'white'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'/>

						<TextInput
							placeholder = 'password'
							placeholderTextColor = 'white'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'/>

						<TextInput
							placeholder = 'confirm password'
							placeholderTextColor = 'white'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'/>

						<View style = {{ height: 40, marginTop: 10, marginBottom: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#ccc', backgroundColor: secondColor }}>
							<Text style = { textColor }> create account </Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

module.exports = RegisterScreen