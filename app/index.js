import React from 'react'

import Login from './Login'
import Register from './Register'
import Guide from './Guide'
import Demo from './Demo'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

const Nav = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register }
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1976D2'
      },
      headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
  Demo: { screen: Demo },
  Main: { screen: Nav },
  Register: { screen: Register },
  Login: { screen: Login },
  Guide: { screen: Guide },
}, {
  BottomTabNavigatorConfig: {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 40,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  }
})

export default Tabs