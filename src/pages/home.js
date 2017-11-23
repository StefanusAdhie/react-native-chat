import React from 'react'
import {
	ListView,
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

var arr = []

for(var i = 0; i < 1000; i++) {
	arr.push({id: i})
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})


class HomeScreen extends React.Component {
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
					<ListView
						dataSource = {ds.cloneWithRows(arr)}
						enableEmptySections = {true}
						renderRow = {(content, section, row) => {
							return (
								<View style = {{ height: 60, margin: 5, padding: 5, flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#ccc' }}>
									<View style = {{ width: 50, height: 50, borderRadius: 25, borderWidth: 0.5, borderColor: '#ccc' }} />

									<View style = {{ marginLeft: 5 }}>
										<Text style = { textDefault }> {content.id} </Text>
									</View>
								</View>
							)
						}
					}/>
				</View>
			</View>
		)
	}
}

module.exports = HomeScreen