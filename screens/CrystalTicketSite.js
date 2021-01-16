import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://book.crystalmountainresort.com/ecomm/shop/calendar/3880709/en-US/?productcategoryid=117&startmonth=1&startYear=2021' }} style={{ marginTop: 20 }} />
  }
}