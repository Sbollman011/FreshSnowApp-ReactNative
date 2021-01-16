
const request = require("request")
const axios = require("axios")
const cheerio = require("cheerio")
const fetch = require("node-fetch")
let url = 'https://pnwsnowapi.herokuapp.com/';



function c(){




const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('#snowbase-cm-imperial', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });
}
c();
/*
function h(req, res){
  // The scraping magic will happen here
  let url = "https://www.stevenspass.com/";



 request(url, function(error, response, html) {

      var $ = cheerio.load(html);
      var whiteSnow24API = $("");
      console.log($.text());
       

      

  });

};
h();
/*function fun(){
  return fetchHTML('https://skiwhitepass.com/snow-report')
.then(response => response.html())
.then(data => console.log(data));
} 
 fun();
 
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.snoqSnowDepth24);
});

fetchHTML = async(url)  => {
  const { data } = await axios.get(url)
  return cheerio.load(data);
};
/*

setMeasurements = async() => {
  const $ =  fetchHTML("https://summitatsnoqualmie.com/conditions")
  return $($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span'))
  .text().trim();
};

parseScrape = async() => {
  var text =  setMeasurements();
  var textList = text.split(" ");
  var textString = textList[0];
  return textString
};


  function printIt(){
      var final =  parseScrape();
      console.log(final);
    }
   
 printIt();

/* function tr() {
const axios = require("axios")
const cheerio = require("cheerio")

axios.get('https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/').then((response) => {
      // Load the web page source code into a cheerio instance
      const $ = cheerio.load(response.data)

    var text = $('#snowbase-cm-imperial')
    .text().trim();

 
    console.log(text);
    console.log("lol");

})}
tr();

*/
/*
const rp = require('request-promise');
const url = 'https://summitatsnoqualmie.com/conditions';

rp(url)
  .then(function(html){
    //success!
    console.log($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span', html).text());
    //console.log($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > span > span',html).text());
  })
  .catch(function(err){
    //handle error
    console.log("error");
  });
*/
  
/*
  const searchUrl = `https://summitatsnoqualmie.com/conditions`;
  const response = await fetch(searchUrl);   // fetch page

  const htmlString = await response.text();  // get response text
  const $ = cheerio.load(htmlString);           // parse HTML string

  return $("#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(1) > div:nth-child(2) > ul > li:nth-child(4) > div > span > span").text();
  */


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
       <Tab.Navigator >
         <Tab.Screen name ="Snow Report" component={homescreen} />
         <Tab.Screen name="Snoqualmie Pass Website" component={snoqualmie} />
         <Tab.Screen name ="Mt. Baker Website" component={baker} />
         <Tab.Screen name ="Crystal Mountain Website" component={crystal} />
         <Tab.Screen name ="White Pass Website" component={whitePass} />
         <Tab.Screen name ="Stevens Pass Website" component={stevens} />
         <Tab.Screen name ="Information" component={info} />
         <Tab.Screen name ="Lift Tickets" component={tickets} />
         <Tab.Screen name ="Map" component={maps} />
         <Tab.Screen name="Snoqualmie Tickets" component={snoqualmietickets} />
         <Tab.Screen name ="Mt. Baker Tickets" component={bakertickets} />
         <Tab.Screen name ="Crystal Mountain Tickets" component={crystaltickets} />
         <Tab.Screen name ="White Pass Tickets" component={whitePasstickets} />
         <Tab.Screen name ="Stevens Pass Tickets" component={stevenstickets} />
 
       </Tab.Navigator>         
   )  
 }
 
 /*
 initialRouteName = "Home" screenOptions={({ route }) => ({
         tabBarButton: [
           "snoqtab",
         ].includes(route.name)
           ? () => {
               return null;
             }
           : undefined,
       })}
       
               <Tab.Screen name="Home" component={homescreen} options={{
           title: 'Home', tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={size} />),
       }} />
 
     <Tab.Screen
       name="LiftTickets" component={liftTickets} options={{ title: 'Tickets', tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
       }} />
     
     <Tab.Screen name="Forecast" component={homescreen} options={{ title: 'Forecast',
       tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
       }} />
 
     <Tab.Screen name="Map" component={MapScreen} options={{ title: 'Map', tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="map-outline" color={color} size={size} />),
       }} />
       */
 
 function Tabs({navigation}) {
   return ( 
       <Tab.Navigator>
         <Tab.Screen name ="Snow Report" component={homescreen} />
         <Tab.Screen name="snoqtab" component={snoqualmie} />
         <Tab.Screen name ="bakertab" component={baker} />
         <Tab.Screen name ="crystaltab" component={crystal} />
         <Tab.Screen name ="whitetab" component={whitePass} />
         <Tab.Screen name ="stevenstab" component={stevens} />
         <Tab.Screen name ="infotab" component={info} />
         <Tab.Screen name ="ticketstab" component={tickets} />
         <Tab.Screen name ="maptab" component={maps} />
         <Tab.Screen name="snoqticketstab" component={snoqualmietickets} />
         <Tab.Screen name ="bakerticketstab" component={bakertickets} />
         <Tab.Screen name ="crystalticketstab" component={crystaltickets} />
         <Tab.Screen name ="whiteticketstab" component={whitePasstickets} />
         <Tab.Screen name ="stevensticketstab" component={stevenstickets} />
 
       </Tab.Navigator>         
   )  
 }
 
 
 function homescreen({navigation}){
   return(
   <Stack.Navigator>
     <Stack.Screen name="PNW Ski Report" component={homeTab} options = {{headerRight: () => (
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
     <Stack.Screen name="PNW Ski Report" component={snoqTab} options= {{headerRight: () => (
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
     <Stack.Screen name="PNW Ski Report" component={bakerTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={crystalTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={whiteTab} options ={{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={stevenTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={infoTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={ticketsTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={mapsTab} options = {{headerRight: () => (
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
     <Stack.Screen name="PNW Ski Report" component={snoqTicketsTab} options= {{headerRight: () => (
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
     <Stack.Screen name="PNW Ski Report" component={bakerTicketsTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={crystalTicketsTab} options = {{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={whiteTicketsTab} options ={{headerRight: () => (
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
             <Stack.Screen name="PNW Ski Report" component={stevenTicketsTab} options = {{headerRight: () => (
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
 
 
 /*function homeTab(){
     return (
       <Tab.Navigator initialRouteName = "Home">
      <Tab.Screen name="Home" component={HomeScreen}
     options={{
       title: 'Home',
       tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={size} />),
 
       }} />
 
     <Tab.Screen
       name="LiftTickets"
       component={liftTickets}
       options={{
         title: 'Tickets',
         tabBarIcon: ({ color, size }) => (
           <Foundation name="social-skillshare" size={size} color={color} />),
       }}
     />
     
     <Tab.Screen name="Forecast" component={HomeScreen}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
 
 function ticketsTab(){
   return (
     <Tab.Navigator initialRouteName = 'LiftTickets'>
    <Tab.Screen name="Home" component={"HomeStack"}
     options={{
       title: 'Home',
       tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={size} />),
 
       }} />
 
     <Tab.Screen
       name="LiftTickets"
       component={liftTickets}
       options={{
         title: 'Tickets',
         tabBarIcon: ({ color, size }) => (
           <Foundation name="social-skillshare" size={size} color={color} />),
       }}
     />
     
     <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
 
 function mapsTab(){
   return (
 
     
     <Tab.Navigator initialRouteName = "Map">
 
         
 <Tab.Screen name="Home" component={"HomeStack"}
     options={{
       title: 'Home',
       tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={size} />),
 
       }} />
 
     <Tab.Screen
       name="LiftTickets"
       component={liftTickets}
       options={{
         title: 'Tickets',
         tabBarIcon: ({ color, size }) => (
           <Foundation name="social-skillshare" size={size} color={color} />),
       }}
     />
     
     <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
     component={SnoqualmieSite}
     tabBarOptions= {{
       labeled: false,
     }}
   />
 
 <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
  <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
     component={CrystalSite}
     tabBarOptions= {{
       labeled: false,
     }}
   />
  <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         name="bakertabsscreen"
         component={BakerSite}
         tabBarOptions= {{
           labeled: false,
         }}
       />
      <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         component={WhitePassSite}
         tabBarOptions= {{
           labeled: false,
         }}
       />
 <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         component={infoScreen}
         tabBarOptions= {{
           labeled: false,
         }}
       />
     <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         component={SnoqualmieTicketSite}
         tabBarOptions= {{
           labeled: false,
         }}
       />
     <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         component={StevensTicketSite}
         tabBarOptions= {{
           labeled: false,
         }}
       />
       <Tab.Screen name="Home" component={"HomeStack"}
   options={{
     title: 'Home',
     tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="home" color={color} size={size} />),
 
     }} />
 
   <Tab.Screen
     name="LiftTickets"
     component={liftTickets}
     options={{
       title: 'Tickets',
       tabBarIcon: ({ color, size }) => (
         <Foundation name="social-skillshare" size={size} color={color} />),
     }}
   />
   
 <Tab.Screen name="Forecast" component={"HomeStack"}
     options={{
       title: 'Forecast',
       tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="weather-snowy" size={24} color="black" />),
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
         component={CrystalTicketSite}
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
       
       <Tab.Screen name="Home" component={"HomeStack"}
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
         component={SnoqualmieTicketSite}
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
       
       <Tab.Screen name="Home" component={"HomeStack"}
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
         component={SnoqualmieTicketSite}
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
       
       <Tab.Screen name="Home" component={"HomeStack"}
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
 */