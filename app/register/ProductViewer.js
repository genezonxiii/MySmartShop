import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import Button from './Button';
import { productViewers } from './theme';

export default class ProductViewer extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {
      }
    }
    this.getProduct = this.getProduct.bind(this)
    this.transit = this.transit.bind(this)
  }

  componentWillMount() {
    this.getProduct()
  }

  getProduct() {
    let url = 'http://192.168.28.20:8080/SmartShop/product/product?id=2'
    fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.productId != '') {
        this.setState({
          product: responseJson
        })
      }
    })    
  }

  transit() {
  }

  render() {
    const { product } = this.state
    let guide = []
    guide.push(product)
    productList = guide.map((product, i) => {
      return (
        <View 
          style={productViewers.pageStyle} 
          key={i}>
          <Text 
            style={productViewers.heading}>
            {product.name}
          </Text>
          <Image 
            source={{
              uri: 'https://drive.google.com/uc?id=' + product.photo,
              method: 'POST',
            }}
            style={productViewers.image} />
          <Text 
            style={productViewers.heading}>
            {product.description}
          </Text>
        </View>
      )
    })

    return (
      <ScrollView
        style={productViewers.viewPager}>
        {productList}
        <Button 
          btnText='確認'
          onPress={this.transit}
        />
      </ScrollView>
    )
  }
}
