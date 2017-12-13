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
} from '../../components'


class RegisterScreen extends React.Component {
	state = {
		email: null,
		phone: null,
		password: null,
		confirmPassword: null
	}

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
							onChangeText = { (text) => this.setState({email: text }) }
							placeholder = 'email'
							placeholderTextColor = 'darkgrey'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'
							value = {this.state.email}/>

						<TextInput
							onChangeText = { (text) => this.setState({phone: text }) }
							placeholder = 'phone'
							placeholderTextColor = 'darkgrey'
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'
							value = {this.state.phone}/>

						<TextInput
							onChangeText = { (text) => this.setState({password: text }) }
							placeholder = 'password'
							placeholderTextColor = 'darkgrey'
							secureTextEntry = {true}
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'
							value = {this.state.password}/>

						<TextInput
							onChangeText = { (text) => this.setState({confirmPassword: text }) }
							placeholder = 'confirm password'
							placeholderTextColor = 'darkgrey'
							secureTextEntry = {true}
							style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderColor: 'white' }]}
							underlineColorAndroid = 'transparent'
							value = {this.state.confirmPassword}/>

						<View style = {{ height: 40, marginTop: 10, marginBottom: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#ccc', backgroundColor: secondColor }}>
							<Text style = { textColor }> create account </Text>
						</View>
					</View>
				</View>
			</View>
		)
	}

	componentWillMount() {
		var a = /[^0-9]/
		if(!a.test(this.props.navigation.state.params.userid)) {
			/* phone number */
			this.setState({phone: this.props.navigation.state.params.userid})
		} else {
			/* email */
			this.setState({email: this.props.navigation.state.params.userid})
		}
	}
}

module.exports = RegisterScreen