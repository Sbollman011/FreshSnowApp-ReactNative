import * as React from 'react';
import {ImageBackground} from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button,Keyboard,KeyboardAvoidingView } from 'react-native';



export default class App extends React.Component {

    render(){
        return (
          
          <ImageBackground
          source={require('./img/blueMtn.jpg')}
          style={styles.container}>
          
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >
        <Text style = {styles.p}> Info here
        </Text>
  
          
    
          </KeyboardAvoidingView>
          </ImageBackground>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'top',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '041646'
        },

        p: {
            color: '#ffffffff',
            fontSize: 25,
            alignItems: 'left',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 20,

            
        }
    });
