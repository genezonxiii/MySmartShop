import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './app/Login';
import Register from './app/Register';
import Guide from './app/Guide';
import Main from './app/Main';
import Product from './app/Product';

import Menu from './app/register/Menu';
import ProductViewer from './app/register/ProductViewer';

const MainStack = StackNavigator(
  {
    Home: {
      screen: Main,
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    Guide: {
      screen: Guide
    },
    Product: {
      screen: Product
    },
    ProductViewer: {
      screen: ProductViewer
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#967C4C',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginToken: {},
    }
  }
  render() {
    return (
      <MainStack 
        screenProps={{ 
          loginToken: this.state.loginToken
        }} />
    )
  }
}

export default App
