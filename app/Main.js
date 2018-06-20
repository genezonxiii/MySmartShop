import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import Menu from './register/Menu'

import { mains } from './register/theme'

class Main extends Component {
	constructor(props){
		super(props)
	}
	render () {
		return(
			<View style={mains.container}>
				<View style={{flex: 1}} />
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main