import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, KeyboardAvoidingView, Keyboard } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



export default class App extends React.Component {
    state={
        email:"",
      }

  render(){
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
   


    <View>
     <Text style ={styles.titleFText}>Enter your email below to recover your password.</Text>
     </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <TouchableOpacity style={styles.submitBtn} >
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        //backgroundColor:"white",
        borderRadius:25,
        height:30,
        marginBottom:20,
        justifyContent:"center",
        padding:15,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        top: -35
      }, 
      submitBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
      },
      inputText:{
        height:50,
        color:"#003f5c"
      },
      titleFText:{
        height:100,
        fontFamily: "monospace",
        color:"white",
        fontSize:20,
        flexWrap: 'wrap',
        top: -50,
        marginLeft: 25,
        marginRight: 25

      }
});