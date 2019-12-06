import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './app/Login';
import Register from './app/Register';
import Guide from './app/Guide';
import GuideMinnan from './app/GuideMinnan';
import GuideJp from './app/GuideJp';
import Main from './app/Main';
import Product from './app/Product';
import Privacy from './app/Privacy';
import LocGuide from './app/LocGuide';
import BlockViewer from './app/component/BlockViewer';
import ProductViewer from './app/component/ProductViewer';
import About from './app/About';

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
    Privacy: {
      screen: Privacy
    },
    Guide: {
      screen: Guide
    },
    GuideMinnan: {
      screen: GuideMinnan
    },
    GuideJp: {
      screen: GuideJp
    },
    Product: {
      screen: Product
    },
    ProductViewer: {
      screen: ProductViewer
    },
    Location: {
      screen: LocGuide
    },
    BlockViewer: {
      screen: BlockViewer
    },
    About: {
      screen: About
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
