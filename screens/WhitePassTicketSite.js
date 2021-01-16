import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://shop.skiwhitepass.com/online-lift-tickets' }} style={{ marginTop: 20 }} />
  }
}