import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'

import ProductScanner from './component/ProductScanner'
import ProductViewer from './component/ProductViewer'

import { products } from './component/theme'

class ProductScan extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		let { navigation, screenProps } = this.props
		return (
			<ProductScanner 
				navigation={navigation}
				topText='請掃描特色商品連結(URL)QR code'
				btnText='還要再掃'
				screenProps={{
		          loginToken: screenProps.loginToken,
		        }}
			/>
		)
	}
}

export default ProductScan
