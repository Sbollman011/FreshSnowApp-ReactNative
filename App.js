
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
import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SignupScreen from  './screens/SignupScreen';
import MapScreen from './screens/MapScreen';
import Settings from './screens/Settings';
import Signout from './screens/Signout';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawers({navigation}) {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Auto-Drop Map" component={stacks} />
        <Drawer.Screen name ="Auto-Drop List" component={signout} />
        <Drawer.Screen name ="Settings" component={settings} />
        <Drawer.Screen name ="Sign Out" component={signout} />
      </Drawer.Navigator>           
  );
}

function settings({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="encora" component={Settings} options = {{headerLeft: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>
  </Stack.Navigator>
  );
}

function signout({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="encora" component={Signout} options = {{headerLeft: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>
  </Stack.Navigator>
  );

}

function stacks({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="encora" component={MapScreen} options = {{headerLeft: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>
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
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options= {{ title: 'encora' }} />
            <Stack.Screen name="Map" component={drawers} options = {{title:'encora', headerShown: false}} />
            <Stack.Screen name="Signup" component={SignupScreen} options= {{ title: 'encora' , headerBackTitle:'Back'}} />
            <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options= {{ title: 'encora' , headerBackTitle:'Back'}} />
          </Stack.Navigator>
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
    height: 30,
    width: 35,
    padding: 5,
    marginLeft: 5,

  },
});
