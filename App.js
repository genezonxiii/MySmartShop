/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Demo from './app/Demo'

type Props = {};
export default class App extends Component<Props> {
  state = {
    entrypointid: 1
  }
  render() {
    return (
      <Demo />
    );
  }
}
