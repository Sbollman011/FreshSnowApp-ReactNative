
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, TouchableOpacity,Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SignupScreen from  './screens/SignupScreen';
import MapScreen from './screens/MapScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawers({navigation}) {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Map" component={MapScreen} />
      </Drawer.Navigator>           
  );
}

function stacks({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options= {{ title: 'Encora' }} />
            <Stack.Screen name="Map" component={drawers} options = {{headerLeft: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>
            <Stack.Screen name="Signup" component={SignupScreen} options= {{ title: 'Encora' , headerBackTitle:'Back'}} />
            <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options= {{ title: 'Encora' , headerBackTitle:'Back'}} />
          </Stack.Navigator>
  );
}

export default function App(props) {
  const isLoadingComplete = useCachedResources();
 
  if (!isLoadingComplete) {
    return null;
  } else {
    return (

     <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
         <Drawer.Navigator>
         <Drawer.Screen name="Auto Drop Locator" component={stacks} />
         </Drawer.Navigator>
        </NavigationContainer>
      </View>
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
    height: 25,
    width: 25,
    padding: 5,
    marginLeft: 20,

  },
});
