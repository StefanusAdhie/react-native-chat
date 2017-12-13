import React from 'react'
import {
	Text,
	View
} from 'react-native'


class Header extends React.Component {
	render() {
		return (
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
		)
	}
}

module.exports = Header