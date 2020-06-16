import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button,KeyboardAvoidingView, Keyboard } from 'react-native';



export default class Signout extends React.Component {

  render(){
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
    
            <View>
            <Text style ={styles.txt}>Sign Out</Text>
            </View>
            </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    img: {
      resizeMode: 'contain',
      height: 30,
      width: 40,
      padding: 5,
      marginLeft: 5,
  
    },
    txt: {
        alignContent:"center",
        top: 50,
        textAlign: "center",
    }
  });
  