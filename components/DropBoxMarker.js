import React, {Component} from 'react';
import {
    View, Platform, Text, StyleSheet
} from 'react-native';

export default class DropBoxMarker extends React.Component{

constructor(props){
    super(props);
    this.state = {
        backGroundColor: props.color,
        percentageFull: props.percentage
    }
}

render(){
    if(Platform.OS === 'ios'){
        return(
            <View style = {styles.IOSView}>
                <Text style = {styles.IOSText}>{this.state.percentageFull}%</Text>
            </View>
        )
    } else {
        return(
        <View style = {styles.AndroidView}>
            <Text style = {styles.AndroidText}>{this.state.percentageFull}%</Text>
        </View>
        )
    }
}
}

const styles = StyleSheet.create({
    IOSView: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        height: 20,
        width: 40,
        borderRadius: 2
    },
    AndroidView: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        height: 20,
        width: 40,
        borderRadius: 2,
        elevation: 24
    },
    IOSText: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        color: '#000' 
    },
    AndroidText:{
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#000'

    }
});