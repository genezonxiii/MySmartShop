import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'

import ProductScanner from './register/ProductScanner'
import ProductViewer from './register/ProductViewer'

import { products } from './register/theme'

class ProductScan extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<ProductScanner 
				navigation={this.props.navigation}
				topText='請掃描特色商品QR code'
				btnText='還要再掃'
			/>
		)
	}
}

export default ProductScan
