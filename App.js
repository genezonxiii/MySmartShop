import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './app/Login';
import Register from './app/Register';
import Guide from './app/Guide';
import Main from './app/Main';

import Menu from './app/register/Menu';

const App = StackNavigator(
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
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default App
