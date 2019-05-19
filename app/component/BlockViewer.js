import React, { Component } from 'react'
import { View, ScrollView, Text, Alert, Linking } from 'react-native'

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
				<Text key={'t-1-'+index} style={blockViewer.brandBlock}>
					樓層: {brand.floor} 區位: {brand.district} 櫃位： {brand.block} 
				</Text>
				<Text key={'t-2-'+index} style={blockViewer.brandBlock}>
					品牌：{brand.brand}
				</Text>
				<Text key={'t-3-'+index} style={blockViewer.brandBlock}>
					商品名稱：{brand.productName}
				</Text>
				<Text key={'t-4-'+index} style={blockViewer.shopUrl}
					onPress={() => Linking.openURL(brand.shopUrl)}>
					線上商城
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