
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Foundation } from '@expo/vector-icons'; 

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
import MapScreen from './screens/MapScreen'
import liftTickets from './screens/liftTickets'
import SnoqualmieTicketSite from './screens/SnoqualmieTicketSite';
import BakerTicketSite from './screens/BakerTicketSite';
import CrystalTicketSite from './screens/CrystalTicketSite';
import WhitePassTicketSite from './screens/WhitePassTicketSite';
import StevensTicketSite from './screens/StevensTicketSite';
import WebView from 'react-native-webview'
import { HeaderBackButton } from '@react-navigation/stack';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function drawers({navigation}) {
  return (
      <Drawer.Navigator drawerPosition = "right">
        <Drawer.Screen name ="Snow Report" component={homeTab} />
        <Drawer.Screen name="Snoqualmie Pass Website" component={snoqTab} />
        <Drawer.Screen name ="Mt. Baker Website" component={bakerTab} />
        <Drawer.Screen name ="Crystal Mountain Website" component={crystalTab} />
        <Drawer.Screen name ="White Pass Website" component={whiteTab} />
        <Drawer.Screen name ="Stevens Pass Website" component={stevenTab} />

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

function tickets({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={liftTickets} options = {{headerRight: () => (
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

function maps({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={MapScreen} options = {{headerRight: () => (
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

function snoqualmietickets({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="PNW Ski Report" component={SnoqualmieTicketSite} options= {{headerRight: () => (
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

function bakertickets({navigation}){
  return(
  <Stack.Navigator>
    <Stack.Screen name="PNW Ski Report" component={BakerTicketSite} options = {{headerRight: () => (
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

function crystaltickets({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={CrystalTicketSite} options = {{headerRight: () => (
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

function whitePasstickets({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={WhitePassTicketSite} options ={{headerRight: () => (
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

function stevenstickets({navigation}){
  return (
        <Stack.Navigator>
            <Stack.Screen name="PNW Ski Report" component={StevensTicketSite} options = {{headerRight: () => (
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


function homeTab({navigation}){
    return (
      <Tab.Navigator initialRouteName = "Home">
     <Tab.Screen name="Home" component={homescreen}
    options={{
      title: 'Home',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />),

      }} />

    <Tab.Screen
      name="LiftTickets"
      component={tickets}
      options={{
        title: 'Tickets',
        tabBarIcon: ({ color, size }) => (
          <Foundation name="social-skillshare" size={size} color={color} />),
      }}
    />
    
    <Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />
    <Tab.Screen
      name="Map"
      component={maps}
      options={{
      title: 'Map',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

      }}
    />

  </Tab.Navigator>
    );

}

function ticketsTab({navigation}){
  return (
    <Tab.Navigator initialRouteName = 'LiftTickets'>
   <Tab.Screen name="Home" component={homescreen}
    options={{
      title: 'Home',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />),

      }} />

    <Tab.Screen
      name="LiftTickets"
      component={tickets}
      options={{
        title: 'Tickets',
        tabBarIcon: ({ color, size }) => (
          <Foundation name="social-skillshare" size={size} color={color} />),
      }}
    />
    
    <Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />
    <Tab.Screen
      name="Map"
      component={maps}
      options={{
      title: 'Map',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

      }}
    />

  </Tab.Navigator>
  );

}

function mapsTab(){
  return (

    
    <Tab.Navigator initialRouteName = "Map">

        
<Tab.Screen name="Home" component={homescreen}
    options={{
      title: 'Home',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />),

      }} />

    <Tab.Screen
      name="LiftTickets"
      component={tickets}
      options={{
        title: 'Tickets',
        tabBarIcon: ({ color, size }) => (
          <Foundation name="social-skillshare" size={size} color={color} />),
      }}
    />
    
    <Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

    <Tab.Screen
      name="Map"
      component={maps}
      options={{
      title: 'Map',
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

      }}
    />

  </Tab.Navigator>
  );

}



function snoqTab(){
  return (
  <Tab.Navigator initialRouteName = "snoqtabscreen" screenOptions={({ route }) => ({
    tabBarButton: [
      "snoqtabscreen",
    ].includes(route.name)
      ? () => {
          return null;
        }
      : undefined,
  })} >

  <Tab.Screen
    name="snoqtabscreen"
    component={snoqualmie}
    tabBarOptions= {{
      labeled: false,
    }}
  />

<Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );
}

function stevenTab(){
  return (

  <Tab.Navigator initialRouteName = "steventabscreen" screenOptions={({ route }) => ({
    tabBarButton: [
      "steventabscreen",
    ].includes(route.name)
      ? () => {
          return null;
        }
      : undefined,
  })} >

  <Tab.Screen
    name="steventabscreen"
    component={StevensSite}
    tabBarOptions= {{
      labeled: false,
    }}
  />
 <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function crystalTab(){
   return (
  <Tab.Navigator initialRouteName = "crystaltabscreen" screenOptions={({ route }) => ({
    tabBarButton: [
      "crystaltabscreen",
    ].includes(route.name)
      ? () => {
          return null;
        }
      : undefined,
  })} >

  <Tab.Screen
    name="crystaltabscreen"
    component={crystal}
    tabBarOptions= {{
      labeled: false,
    }}
  />
 <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function bakerTab(){
    return (
      <Tab.Navigator initialRouteName = "bakertabscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "bakertabscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="bakertabscreen"
        component={baker}
        tabBarOptions= {{
          labeled: false,
        }}
      />
     <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function whiteTab(){
    return (
      <Tab.Navigator initialRouteName = "whitetabsscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "whitetabsscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="whitetabsscreen"
        component={whitePass}
        tabBarOptions= {{
          labeled: false,
        }}
      />
<Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function infoTab(){
    return (
      <Tab.Navigator initialRouteName = "infotabscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "infotabscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="infotabscreen"
        component={info}
        tabBarOptions= {{
          labeled: false,
        }}
      />
    <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function snoqTicketsTab(){
    return (
      <Tab.Navigator initialRouteName = "snoqticketstabscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "snoqticketstabscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="snoqticketstabscreen"
        component={snoqualmietickets}
        tabBarOptions= {{
          labeled: false,
        }}
      />
    <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function stevenTicketsTab(){
    return (
      <Tab.Navigator initialRouteName = "stevensticketstabscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "stevensticketstabscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="stevensticketstabscreen"
        component={stevenstickets}
        tabBarOptions= {{
          labeled: false,
        }}
      />
      <Tab.Screen name="Home" component={homescreen}
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />),

    }} />

  <Tab.Screen
    name="LiftTickets"
    component={tickets}
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color, size }) => (
        <Foundation name="social-skillshare" size={size} color={color} />),
    }}
  />
  
<Tab.Screen name="Forecast" component={homescreen}
    options={{
      title: 'Forecast',
      tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="weather-snowy" size={size} color={color} />),
      }} />

  <Tab.Screen
    name="Map"
    component={maps}
    options={{
    title: 'Map',
    tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map-outline" color={color} size={size} />),

    }}
  />

</Tab.Navigator>
  );

}

function crystalTicketsTab(){
    return (
      <Tab.Navigator initialRouteName = "crystalticketstabscreen" screenOptions={({ route }) => ({
        tabBarButton: [
          "crystalticketstabscreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="crystalticketstabsscreen"
        component={crystaltickets}
        tabBarOptions= {{
          labeled: false,
        }}
      />
      <Tab.Screen
        name="LiftTickets"
        component={liftTickets}
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-skillshare" size={size} color={color} />),
        }}
      />
      
      <Tab.Screen name="Home" component={homescreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),
    
        }} />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
        title: 'Map',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={color} size={size} />),
    
        }}
      />
    
    </Tab.Navigator>
  );

}

function bakerTicketsTab(){
    return (
      <Tab.Navigator initialRouteName = "bakertickettab" screenOptions={({ route }) => ({
        tabBarButton: [
          "bakertickettab",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="bakertickettab"
        component={bakertickets}
        tabBarOptions= {{
          labeled: false,
        }}
      />
      <Tab.Screen
        name="LiftTickets"
        component={liftTickets}
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-skillshare" size={size} color={color} />),
        }}
      />
      
      <Tab.Screen name="Home" component={homescreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),
    
        }} />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
        title: 'Map',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={color} size={size} />),
    
        }}
      />
    
    </Tab.Navigator>
  );

}

function whiteTicketsTab(){
    return (
      <Tab.Navigator initialRouteName = "whitetickettab" screenOptions={({ route }) => ({
        tabBarButton: [
          "whitetickettab",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })} >
    
      <Tab.Screen
        name="whitetickettab"
        component={whitePasstickets}
        tabBarOptions= {{
          labeled: false,
        }}
      />
      <Tab.Screen
        name="LiftTickets"
        component={liftTickets}
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-skillshare" size={size} color={color} />),
        }}
      />
      
      <Tab.Screen name="Home" component={homescreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),
    
        }} />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
        title: 'Map',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={color} size={size} />),
    
        }}
      />
    
    </Tab.Navigator>
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
        <Stack.Navigator initialRouteName = "HomeStack">
            <Stack.Screen name="HomeStack" component={drawers} options= {{ title: 'PNW Snow Report', headerShown: false , headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name="Home" component={HomeScreen} options= {{ title: 'PNW Snow Report', headerShown: false , headerRight: () => (
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

              <Stack.Screen name= "Tickets" component={liftTickets} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

              <Stack.Screen name= "Maps" component={MapScreen} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>




              <Stack.Screen name= "SnoqualmieTickets" component={snoqTab} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "BakerTickets" component={BakerTicketSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "CrystalTickets" component={CrystalTicketSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "StevensTickets" component={StevensTicketSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
              <TouchableOpacity onPress={() =>
                 navigation.toggleDrawer()} >
                <Image source={require('./screens/img/menuIcon.png')}  style={styles.img}/>
              </TouchableOpacity>)}}/>

            <Stack.Screen name= "WhitePassTickets" component={WhitePassTicketSite} options= {{ title: 'PNW Snow Report' , headerBackTitle:'Back', headerRight: () => (
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
