import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

import Button from './Button'

import { productScanners } from './theme'

class ProductScanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginToken: this.props.screenProps.loginToken,
		}
		this.onRead = this.onRead.bind(this)
		this.reset = this.reset.bind(this)
	}

	onRead(e) {
		let { navigate } = this.props.navigation
		let productId = this.getProductId(e.data)
		if (productId != '') {
			navigate('ProductViewer', {productId: productId})
		} else {
			Alert.alert('提示', '無法讀取此特色商品')
		}
	}

	getProductId (data) {
		let productId = ''
		if (data == 'http://www.transcend-info.com/products/Catlist.asp?LangNo=0&modno=399') {
			productId = 2
		} else if (data == 'http://en.m.wikipedia.org') {
			productId = 3
		} else if (data == 'BC46012C-D2EA-3015-9577-E25D0CCAB172') {
			productId = 4
		} else if (data == '0F55E80D-543B-3EB2-AF2F-1964BE7DC2AF') {
			productId = 5
		} else if (data == 'CA3D6A58-2E20-345E-A465-4574E75A231F') {
			productId = 6
		} else if (data == '477F29A3-C663-3E05-9C8F-AA233223E211') {
			productId = 7
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
							underlayColor={'#8B7F73'}
							onPress={this.reset} />
					</View>
				}
				cameraStyle={productScanners.cameraStyle}
			/>
		)
	}
}

export default ProductScanner
