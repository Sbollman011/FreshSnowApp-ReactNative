import * as WebBrowser from 'expo-web-browser';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React from 'react';
import MapView, { Marker} from 'react-native-maps';
import { Image, Platform, StyleSheet, Text, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { render } from 'react-dom';
import DropBoxMarker from '../components/DropBoxMarker';

export default class MapScreen extends React.Component {

constructor(){
  super();
  this.state = {
    region: {
      latitude: 43.080330,
      longitude: -88.075455,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0412
    },
    userlatitude: 0,
    userlongitude: 0,
    markers: [
    {id: "1", LatLng: {latitude: 43.086364, longitude:-88.070863}},
    {id: "2", LatLng: {latitude: 43.085612, longitude:-88.066721}},
    {id: "3", LatLng: {latitude: 43.075660, longitude:-88.066142}},
    {id: "4", LatLng: {latitude: 43.075252, longitude:-88.068459}},
    {id: "5", LatLng: {latitude: 43.079756, longitude:-88.087813}}
  ]
  
  }
}


getLocation = async () =>{
  let {status} = await Permissions.askAsync(Permissions.LOCATION);
  if(status !== 'granted'){
    Console.log('Permission was not granted');
  }

  let location = await Location.getLastKnownPositionAsync({});
  this.setState({userlatitude: location.coords.latitude});
  this.setState({userlongitude: location.coords.longitude}); 
}


onComponentWillMount(){
  this.getLocation();
}

render(){
  return(
    <View style = {styles.container}>
      <MapView style = {styles.mapStyle}
      showsUserLocation
      region = {this.state.region}
      onRegionChangeComplete = {(region) =>this.setState({region})}
      >
      {this.state.markers.map((marker) => {
          return <Marker
            coordinate={marker.LatLng}
            title={marker.id}
          >
            <DropBoxMarker color = '#3f4' percentage = {23}/>

          </Marker>
      })}

      </MapView>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});