import React from 'react'

import Login from './Login'
import Register from './Register'

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
  Main: { screen: Nav },
  Reister: { screen: Register },
  Login: { screen: Login }
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