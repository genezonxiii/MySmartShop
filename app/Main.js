import React, { Component } from 'react'
import { View, ScrollView, Image, AsyncStorage } from 'react-native'

import Menu from './component/Menu'

import { mains } from './component/theme'
import { GOOGLE_DRIVE } from './component/constants';

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			uri: GOOGLE_DRIVE + '1dMnMRt2qub_xtYiRyIXDYF_Wu8rY6wbo',
		}
		this.randomImage = this.randomImage.bind(this)
	}
	async componentDidMount() {
		try {
			let loginToken = await AsyncStorage.getItem('loginToken')
			this.props.screenProps.loginToken = loginToken
			this.timer = setInterval(()=>{this.randomImage()}, 3000)
		} catch (e) {
			console.log('e: ', e)
		}
	}
	async componentDidUnmount() {
	 	this.timer && clearInterval(this.timer);
	}
	randomImage(){
		let image = ['1dMnMRt2qub_xtYiRyIXDYF_Wu8rY6wbo','1SoRHUcaCe-p_8Q-1LBWNktg03YgataE_',
		'1Kkro4BUaytbStE1dS-OCRAbSeqL5Si6L','1KWeYxDJTEKtJA1ErLIPh_7cLbmG3ZNWR',
		'1EV6a96wHFPgpj9r-uGVS57j2uAUL3Utb','1adyVHx2tXKThvPURIqlKp_3JSdJYp6xe',
		'1cD4mbzDZFC-rKz1n_5mwxV37HCy-hLjB','1_10iam0tDC73qPSyLtdsMLurmhdq8vlZ',
		'1igbav5WDitPyjKOjUTdYmBMmipQ2Pm_f','1UjY6JoNcCoefxzITpnxyFNP4wGVTkhRO',
		'14FYz8PjCkVPGwnn8Zb4Bg0fxYUIFgaeZ']
		let index = Math.floor(Math.random()*image.length)
		console.log(index);
		this.setState({
			uri: GOOGLE_DRIVE+image[index]
		})
	}
	render () {
		const { uri } = this.state
		return(
			<View style={mains.container}>
				<View style={mains.topContainer}>
		          <Image 
		            source={require('./image/about-expo-visual.jpg')}
		            style={mains.image} />
				</View>
				<View style={mains.bottomContainer}>
		          <Image 
		            source={{uri: uri}}
		            style={mains.image} />
				</View>
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main