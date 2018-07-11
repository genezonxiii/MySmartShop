import React, { Component } from 'react'
import { View, ScrollView, Image, AsyncStorage } from 'react-native'

import Menu from './component/Menu'

import { mains } from './component/theme'

class Main extends Component {
	constructor(props){
		super(props)
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
		return(
			<View style={mains.container}>
				<View style={{flex: 1}}>
		          <Image 
		            source={require('./image/about-expo-visual.jpg')}
		            style={mains.image} />
				</View>
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main