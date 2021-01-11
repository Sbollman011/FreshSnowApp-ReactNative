
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationEvents } from '@react-navigation/native';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, TouchableOpacity,Text, Image } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import SnoqualmieSite from './screens/SnoqualmieSite'
import WhitePassSite from './screens/WhitePassSite'
import StevensSite from './screens/StevensSite'
import BakerSite from './screens/BakerSite'
import CrystalSite from './screens/CrystalSite'
import infoScreen from './screens/infoScreen'
import WebView from 'react-native-webview'
import { HeaderBackButton } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawers({navigation}) {
  return (
      <Drawer.Navigator drawerPosition = "right">
        <Drawer.Screen name ="Home" component={homescreen} />
        <Drawer.Screen name="Snoqualmie Pass Website" component={snoqualmie} />
        <Drawer.Screen name ="Mt. Baker Website" component={baker} />
        <Drawer.Screen name ="Crystal Mountain Website" component={crystal} />
        <Drawer.Screen name ="White Pass Website" component={whitePass} />
        <Drawer.Screen name ="Stevens Pass Website" component={stevens} />
        <Drawer.Screen name ="Information" component={info} />

      </Drawer.Navigator>         
  )  
}

function homescreen({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="PNW Ski Report" component={HomeScreen} options = {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <TouchableOpacity onPress={() =>
                 navigation.navigate('Info')} >
                <Image source={require('./screens/img/information-icon-6086.png')}  style={styles.img}/>
              </TouchableOpacity>
              )}}/>
  </Stack.Navigator>
  );
}


function snoqualmie({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="PNW Ski Report" component={SnoqualmieSite} options= {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
  </Stack.Navigator>
  );
}

function baker({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="PNW Ski Report" component={BakerSite} options = {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
  </Stack.Navigator>
  );

}

function crystal({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={CrystalSite} options = {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
          </Stack.Navigator>
  );
}

function whitePass({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={WhitePassSite} options ={{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
          </Stack.Navigator>
  );
}

function stevens({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={StevensSite} options = {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
          </Stack.Navigator>
  );
}

function info({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={infoScreen} options = {{headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>), headerLeft: () => (
               <HeaderBackButton onPress={() =>
                  navigation.navigate('Home')
                  } title = "Home"
                  />
              )}}/>
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
            <Stack.Screen name="HomeScreen" component={drawers} options= {{ title: 'PNW Snow Report', headerShown: false , headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "Snoqualmie" component={SnoqualmieSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "Baker" component={BakerSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "Crystal" component={CrystalSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "Stevens" component={StevensSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "WhitePass" component={WhitePassSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "Info" component={infoScreen} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

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
