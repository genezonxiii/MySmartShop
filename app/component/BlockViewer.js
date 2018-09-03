import React, { Component } from 'react'
import { View, ScrollView, Text, Alert } from 'react-native'

import ImageX from './ImageX'
import Button from './Button'

import { blockViewer } from './theme'

class BlockViewer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginToken: this.props.screenProps.loginToken,
		}
	}

	render () {
		let { navigation } = this.props
		const brand = navigation.getParam('brand', '')
		brandImage = brand.map((brand, index) => ( 
			<View style={blockViewer.imageContainer}>
				<Text style={blockViewer.brandBlock}> 
					{brand.brand} {brand.district}
				</Text>
				<ImageX key={index} value={brand.blockEqual} />
			</View>
		))
		return (
			<ScrollView style={blockViewer.container}>
		        <Text style={blockViewer.instructions}>
		          若陳列櫃位較多時，請向下滑動
		        </Text>
				<ImageX value='p' />
				{ brandImage }
			</ScrollView>
		)
	}
}

export default BlockViewer