import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import Button from './Button';
import { productViewers } from './theme';
import { HOST_SERVER, GOOGLE_DRIVE } from './constants';

export default class ProductViewer extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {
      },
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
      loginToken: this.props.screenProps.loginToken,
    }
    this.getProduct = this.getProduct.bind(this)
    this.transit = this.transit.bind(this)
  }

  componentWillMount() {
    let { navigation } = this.props
    const productId = navigation.getParam('productId', '')
    this.getProduct(productId)
  }

  getProduct(productId) {
    let url = HOST_SERVER + 'product/product?id=' + productId
    fetch(url, {  
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
        this.getVideo(responseJson.video)
      }
    })    
  }

  getVideo(videoId){
    global.fetch(`https://player.vimeo.com/video/${videoId}/config`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      });
  }

  transit() {
    let { navigate } = this.props.navigation
    navigate('ProductViewer')
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
          <Image 
            source={{
              uri: GOOGLE_DRIVE + product.photo,
            }}
            style={productViewers.image} />
          <View style={productViewers.directionInfo}>
            <Text 
              style={productViewers.directionInfoH3}>
              {product.name}
            </Text>
          </View>
          <View style={productViewers.video}>
            <VideoPlayer
              endWithThumbnail
              thumbnail={{ uri: this.state.thumbnailUrl }}
              video={{ uri: this.state.videoUrl }}
              videoWidth={this.state.video.width}
              videoHeight={this.state.video.height}
              ref={r => this.player = r}
            />
          </View> 
          <Text 
            style={productViewers.directionInfoP}>
            {product.description}
          </Text>
        </View>
      )
    })

    return (
      <ScrollView
        style={productViewers.viewPager}>
        {productList}
      </ScrollView>
    )
  }
}
