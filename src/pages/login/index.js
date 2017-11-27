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
import {
	SocketEmitter
} from '../../modules'


class IndexScreen extends React.Component {
	_next() {
		SocketEmitter('login', this.state.userid, (res) => {
			console.log(res)
			this.props.navigation.navigate('Login')
		})
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

					<View style = {{ marginTop: 10 }}>
						<Button
							onPress = { this._next.bind(this) }
							name = 'Next' />
					</View>
				</View>
			</View>
		)
	}
}

module.exports = IndexScreen