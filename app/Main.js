import React, { Component } from 'react'
import { View, ScrollView, Image, AsyncStorage } from 'react-native'

import Menu from './component/Menu'

import { mains } from './component/theme'
import { GOOGLE_DRIVE, HOST_SERVER } from './component/constants';

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			uri: GOOGLE_DRIVE + '1YmiMsYPbNgVHnhcW1N0Kt4l6k4_12HDv',
		}
	}

	async componentDidMount() {
		try {
			let loginToken = await AsyncStorage.getItem('loginToken')
			this.props.screenProps.loginToken = loginToken
		} catch (e) {
			console.log('e: ', e)
		}
	}

	render () {
		const { uri } = this.state
		return(
			<View style={mains.container}>
				<View style={mains.topContainer}>
		          <Image 
		            source={require('./image/190514_0002.jpg')}
		            style={mains.image} />
				</View>
				<View style={mains.bottomContainer}>
				</View>
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main