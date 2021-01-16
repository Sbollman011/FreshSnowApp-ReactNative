import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import useCachedResources from '../hooks/useCachedResources';
import LinkingConfiguration from '../navigation/LinkingConfiguration';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Button,Keyboard,KeyboardAvoidingView } from 'react-native';
import { Video } from 'expo-av';
import {Dimensions} from 'react-native';




export default class App extends React.Component {

  
  state={

    dataIsReturned: false,

    snoqSnow24: "0",
    snoqSnowSeason: "0",
    snoqWeatherTemp: "0",

    crystalSnow24: "0",
    crystalSnowSeason: "0",
    crystalWeatherTemp: "0",

    bakerSnow24: "0",
    bakerSnowSeason: "0",
    bakerWeatherTemp : "0",

    whiteSnow24: "0",
    whiteSnowSeason: "0",
    WhiteWeatherTemp: "0",

    stevenSnow24: "0",
    stevenSnowSeason: "0",
    stevenWeatherTemp: "0",

    loading: false,
    fromFetch: false
  }

  

   setMeasurementsSnoq() {
      this.setState({
        fromFetch: true,
        loading: true,

    })
    fetch("https://pnwsnowapi.herokuapp.com/snoqualmie",)
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    snoqSnow24: JSON.parse(responseJson.snoqSnow24API),
                    snoqSnowSeason: JSON.parse(responseJson.snoqSnowSeasonAPI),
                    snoqWeatherTemp: JSON.parse(responseJson.snoqWeatherTempAPI)
                })
            }, 2000)

        })
        .catch(error => console.log(error))
};


setMeasurementsBaker() {
  this.setState({
    fromFetch: true,
    loading: true,

})
fetch("https://pnwsnowapi.herokuapp.com/baker",)
    .then(response => response.json())
    .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
            this.setState({
                loading: false,
                bakerSnow24: JSON.parse(responseJson.bakerSnow24API),
                bakerSnowSeason: JSON.parse(responseJson.bakerSnowSeasonAPI),
                bakerWeatherTemp: JSON.parse(responseJson.bakerWeatherTempAPI)

            })
        }, 2000)

    })
    .catch(error => console.log(error))
};

setMeasurementsWhitePass() {
  this.setState({
    fromFetch: true,
    loading: true,

})
fetch("https://pnwsnowapi.herokuapp.com/whitepass",)
    .then(response => response.json())
    .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
            this.setState({
                loading: false,
                whiteSnow24: JSON.parse(responseJson.whiteSnow24API),
                whiteSnowSeason: JSON.parse(responseJson.whiteSnowSeasonAPI),
                whiteWeatherTemp: JSON.parse(responseJson.whiteWeatherTempAPI),
            })
        }, 2000)

    })
    .catch(error => console.log(error))
};

setMeasurementsStevens() {
  this.setState({
    fromFetch: true,
    loading: true,

})
fetch("https://pnwsnowapi.herokuapp.com/stevens",)
    .then(response => response.json())
    .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
            this.setState({
                loading: false,
                stevenSnow24: JSON.parse(responseJson.stevenSnow24API),
                stevenSnowSeason: JSON.parse(responseJson.stevenSnowSeasonAPI)
            })
        }, 10000)

    })
    .catch(error => console.log(error))
};

setMeasurementsCrystal() {
  this.setState({
    fromFetch: true,
    loading: true,

})
fetch("https://pnwsnowapi.herokuapp.com/crystal",)
    .then(response => response.json())
    .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
            this.setState({
                loading: false,
                crystalSnow24: JSON.parse(responseJson.crystalSnow24API),
                crystalSnowSeason: JSON.parse(responseJson.crystalSnowSeasonAPI)
            })
        }, 2000)

    })
    .catch(error => console.log(error))
};



  componentDidMount(){ 
  this.setMeasurementsSnoq();
  this.setMeasurementsBaker();
  this.setMeasurementsWhitePass();
  this.setMeasurementsStevens();
  this.setMeasurementsCrystal();
  
};

  


render(){

  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');

    return (
      
      

  <View style = {styles.container}>

<Video
          source={require('./production ID_4185213.mp4')}
          style={ styles.backgroundVideo}
          shouldPlay={true}
          isLooping = {true}
          resizeMode="cover"
          isMuted={false}
        />


    <ScrollView style = {styles.reportsView}>

    <Text style = {styles.logoTitle}> Snow Report </Text>

      <TouchableOpacity style = {styles.boxes} onPress={() =>
            this.props.navigation.navigate('Snoqualmie')}>
          <Text style = {styles.logo}>
            Summit at Snoqualmie
          </Text>
          <Text style = {styles.subLogo}>
            24hr: {this.state.snoqSnow24}" | Base: {this.state.snoqSnowSeason}" | Temp: {this.state.snoqWeatherTemp}°
          </Text>
       </TouchableOpacity>
     
       <TouchableOpacity style = {styles.boxes} onPress={() =>
            this.props.navigation.navigate("Crystal")}>
          <Text style = {styles.logo}>
            Crystal Mountain
          </Text>
          <Text style = {styles.subLogo}>
            24hr: {this.state.crystalSnow24}" | Base: {this.state.crystalSnowSeason}" | Temp: {this.state.snoqWeatherTemp}°
          </Text>
       </TouchableOpacity>

       <TouchableOpacity style = {styles.boxes} onPress={() =>
            this.props.navigation.navigate("Stevens")}>
          <Text style = {styles.logo}>
            Steven's Pass
          </Text>
          <Text style = {styles.subLogo}>
            24hr: {this.state.stevenSnow24}" | Base: {this.state.stevenSnowSeason}" | Temp: {this.state.snoqWeatherTemp}°
          </Text>
       </TouchableOpacity>

       <TouchableOpacity style = {styles.boxes} onPress={() =>
            this.props.navigation.navigate("Baker")}>
          <Text style = {styles.logo}>
            Mount Baker
          </Text>
          <Text style = {styles.subLogo}>
            24hr: {this.state.bakerSnow24}" | Base: {this.state.bakerSnowSeason}" | Temp: {this.state.bakerWeatherTemp}°
          </Text>
       </TouchableOpacity>

       <TouchableOpacity style = {styles.boxes} onPress={() =>
            this.props.navigation.navigate("WhitePass")}>
          <Text style = {styles.logo}>
            White Pass
          </Text>
          <Text style = {styles.subLogo}>
            24hr: {this.state.whiteSnow24}" | Base: {this.state.whiteSnowSeason}" | Temp: {this.state.whiteWeatherTemp}°
          </Text>
       </TouchableOpacity>


       </ScrollView>
       </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  boxes: {
    width:300,
    borderColor: 'black',
    position: 'relative',
    alignItems: 'center',
    height:58,
    marginBottom:16,
    padding: 15,
    justifyContent:"top",
    borderBottomColor: 'gray',
  },
  logoTitle:{
    marginTop: "8%",
    marginBottom: "1%",
    fontWeight:"bold",
    color: '#ffffffff',
    fontSize: 30,
    alignItems: 'center',
    alignContent: "center",
    marginLeft: '10%'


    },
  logo:{
    fontWeight:"bold",
    color: '#ffffffff',
    fontSize: 20,
    alignItems: 'left'

    },
    subLogo: {
      fontSize:16,
      color: 'white'
    },
    reportsView:{
      width: '100%',
      height: '100%',
      backgroundColor:  'rgba(52, 52, 52, 0.45)',
      alignItems: 'center'

    },
  mapButton:{
    position: "absolute",
    top: 0,
    left: 0
  },

  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

