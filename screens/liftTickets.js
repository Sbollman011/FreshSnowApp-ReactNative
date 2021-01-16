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
import WebView from 'react-native-webview';
import SnoqualmieTicketSite from './SnoqualmieTicketSite';
import BakerTicketSite from './BakerTicketSite';
import CrystalTicketSite from './CrystalTicketSite';
import WhitePassTicketSite from './WhitePassTicketSite';
import StevensTicketSite from './StevensTicketSite';




export default class App extends React.Component {


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
      
          <Text style = {styles.logoTitle}> Lift Tickets </Text>
      
            <TouchableOpacity style = {styles.boxes} onPress={() =>
                  this.props.navigation.navigate('LiftTickets') }>
                <Text style = {styles.logo}>
                 Summit at Snoqualmie
                </Text>
             </TouchableOpacity>
           
             
      
      
             </ScrollView>
             </View>
          );
    }
}


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
  