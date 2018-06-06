import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import Login from './Login'
import Menu from './register/Menu'

import { mains } from './register/theme'

class Main extends Component {
	render () {
		return(
			<View style={mains.container}>
				<Login />
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main