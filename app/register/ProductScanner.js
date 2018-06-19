import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

import Button from './Button'

import { productScanners } from './theme'

class ProductScanner extends Component {
	constructor(props) {
		super(props)
		this.onRead = this.onRead.bind(this)
		this.reset = this.reset.bind(this)
	}

	onRead(e) {
		let { navigate } = this.props.navigation
		let productId = this.getProductId(e.data)
		if (productId != '') {
			navigate('ProductViewer', {productId: productId})
		} else {
			Alert.alert('無法讀取此特色商品')
		}
	}

	getProductId (data) {
		let productId = ''
		if (data == 'http://www.transcend-info.com/products/Catlist.asp?LangNo=0&modno=399') {
			productId = 2
		} else if (data == 'http://en.m.wikipedia.org') {
			productId = 3
		}
		return productId
	}

	reset(){
		this.scanner.reactivate()
	}

	render () {
		const { topText, btnText } = this.props
		return (
			<QRCodeScanner
				onRead={this.onRead}
				ref={(node) => { this.scanner = node }}
				topContent={
					<View style={productScanners.top}>
						<Text style={productScanners.centerText}>
							{topText}
						</Text>
					</View>
				}
				bottomContent={
					<View style={productScanners.btnRow}>
						<Button
							btnText={btnText}
							linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
							onPress={this.reset} />
					</View>
				}
				cameraStyle={productScanners.cameraStyle}
			/>
		)
	}
}

export default ProductScanner
