import React from 'react'
import {
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


class IndexScreen extends React.Component {
	state = {
		userid: null
	}

	_next() {
		SocketEmitter('check_users', this.state.userid, (res) => {
			if(res.headers.status === 200) {
				this.props.navigation.navigate('Login', {userid: this.state.userid})
			} else {
				this.props.navigation.navigate('Register', {userid: this.state.userid})
			}
		})
	}

	render() {
		return (
			<View style = {{ flex: 1, padding: 5, backgroundColor: firstColor }}>
				<View style = {{ flex: 1, justifyContent: 'center' }}>
					<TextInput
						onChangeText = { (text) => this.setState({userid: text }) }
						onSubmitEditing = { this._next.bind(this) }
						placeholder = 'email or phone'
						placeholderTextColor = 'darkgrey'
						style = {[ textDefault, { height: 40, marginTop: 10, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'white' }]}
						underlineColorAndroid = 'transparent'
						value = {this.state.userid}/>

					<View style = {{ marginTop: 10 }}>
						<Button
							onPress = { this._next.bind(this) }
							name = 'Next' />
					</View>
				</View>
			</View>
		)
	}

	componentWillMount() {
		AsyncStorage.getItem('@Token', (err, res) => {
			if(err) {
				return err
			}

			if(res) {
				this.props.navigation.dispatch({
					type: 'Navigation/RESET',
					index: 0,
					key: null,
					actions: [{ type: 'Navigation/NAVIGATE', routeName: 'Home' }]
				})
			}
		})
	}
}

module.exports = IndexScreen
