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
			carousel: [],
			photo_idx: 0,
		}
		this.randomImage = this.randomImage.bind(this)
		this.writeDB = this.writeDB.bind(this);

		this.writeDB();
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

    writeDB() {
      let url = HOST_SERVER + 'carousel/list';
      fetch(url, {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
        	uri: GOOGLE_DRIVE + responseJson[0].googleDrive,
        	carousel: responseJson
        })
      })
    }

	randomImage(){
		let { carousel, photo_idx } = this.state;
		photo_idx = ++photo_idx >= carousel.length?0:photo_idx;
		this.setState({
			uri: GOOGLE_DRIVE+carousel[photo_idx].googleDrive,
			photo_idx: photo_idx
		})
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