import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button,KeyboardAvoidingView, Keyboard } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



export default class App extends React.Component {
    state={
        lastName:"",
        firstName:"",
        email:"",
        password:"",
        vendor:"",
        confirmedPassword:"",
      }

  render(){
    return (

        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >

     <View>
     <Text style = {styles.titleText}>Create Account</Text>
     </View>

     <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="First Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({firstName:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Last Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({lastName:text})}/>
        </View>

     <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Confirm Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({confirmedPassword:text})}/>
        </View>
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Vendor" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({vendor:text})}/>
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
    inputText:{
        height:50,
        color:"white"
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
      submitBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
      },
      formText:{
        height:50,
        color:"white",
        bottom:15
      },
      titleText:{
        height:100,
        fontFamily: "Helvetica-BoldOblique",
        color:"white",
        top:25,
        fontSize:35,

      }
});