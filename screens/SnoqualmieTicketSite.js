import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://br-summitatsnoqualmie.secure-cdn.na2.accessoticketing.com/package-planner/LiftTickets' }} style={{ marginTop: 20 }} />
  }
}