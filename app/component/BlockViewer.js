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
		const districtEqual = brand[0].districtEqual
		brandImage = brand.map((brand, index) => (
			<View key={'v-'+index} style={blockViewer.imageContainer}>
				<Text key={'t-'+index} style={blockViewer.brandBlock}>
					{brand.brand} {brand.district}
				</Text>
				<ImageX key={'i1-'+index} value={brand.blockEqual} />
			</View>
		))
		return (
			<ScrollView style={blockViewer.container}>
		        <Text style={blockViewer.instructions}>
		          若陳列櫃位較多時，請向下滑動
		        </Text>
				<ImageX key='i2-0' value={districtEqual} />
				{ brandImage }
			</ScrollView>
		)
	}
}

export default BlockViewer