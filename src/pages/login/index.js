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
	SocketEmit,
	SocketOn
} from '../../modules'


class IndexScreen extends React.Component {
	_next() {
		SocketEmit('login', {userid: 'admin', password: 'admin'})
		this.props.navigation.navigate('Login')
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

	componentDidMount() {
		SocketOn('login', (res) => {
			console.log(res)
		})
	}
}

module.exports = IndexScreen