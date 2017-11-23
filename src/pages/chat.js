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


class ChatScreen extends React.Component {
	_onContentSizeChange(evt) {
		console.log(evt.nativeEvent.contentSize.height)
	}

	_onScroll(evt) {
		console.log(evt.nativeEvent.contentOffset.y)
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

				<View style = {{ flex: 1, backgroundColor: firstColor }}>
					<View style = {{ margin: 5, padding: 5, borderRadius: 10, borderWidth: 0.5, borderColor: '#ccc', alignSelf: 'flex-start', backgroundColor: secondColor }}>
						<Text style = { textColor }> asdfasdf </Text>
					</View>

					<View style = {{ margin: 5, padding: 5, borderRadius: 10, borderWidth: 0.5, borderColor: '#ccc', alignSelf: 'flex-end', backgroundColor: secondColor }}>
						<Text style = { textColor }> asdfasdf </Text>
					</View>
				</View>

				<View style = {{ position: 'absolute', left: 0, right: 0, bottom: 5, flexDirection: 'row' }}>
					<TextInput
						maxHeight = {80}
						multiline = {true}
						onContentSizeChange = { this._onContentSizeChange.bind(this) }
						onScroll = { this._onScroll.bind(this) }
						placeholder = 'message'
						placeholderTextColor = {firstColor}
						style = {[ textColor, { flex: 1, margin: 5, borderRadius: 10, borderWidth: 0.5, borderColor: '#ccc', backgroundColor: secondColor }]}
						underlineColorAndroid = 'transparent'/>

					<View style = {{ width: 50, height: 50, margin: 5, borderRadius: 25, borderWidth: 0.5, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center', backgroundColor: secondColor }}>
						<Text style = { textColor }> X </Text>
					</View>
				</View>
			</View>
		)
	}
}

module.exports = ChatScreen