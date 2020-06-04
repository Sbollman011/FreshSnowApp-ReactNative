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
            <Text >Sign Out</Text>
            </View>
            </KeyboardAvoidingView>
    );
  }
}