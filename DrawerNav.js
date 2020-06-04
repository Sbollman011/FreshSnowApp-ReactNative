import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, StackActions, NavigationActions } from 'react-navigation';



/*** Unauthorized Screens ***/
import HomeScreen from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SignupScreen from  './screens/SignupScreen';

/*** Authorized Screens ***/
import MapScreen from './screens/MapScreen';


const OnboardingStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Signup: { screen: SignupScreen },
    Forgot: { screen: ForgotPasswordScreen },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);


/**
 * Item Stack
 * Follows the Items Flow chart*/
 
const ItemStack = createStackNavigator(
  {
    Map: { screen: MapScreen },

  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);


/*
 * Send Stack
 * Follows the Send Flow chart
 
const SendStack = createStackNavigator(
  {
    Send: { screen: SendScreen },
    ScanQR: { screen: ScanQRScreen },
    SendConfirmation: { screen: SendConfirmationScreen },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);
*/

/**
 * Authorized Drawer
 * Used to set the labels in the drawer and enable drawer
 */
const AuthorizedDrawer = createDrawerNavigator(
  {
    ItemStack: { 
      screen: ItemStack,
      navigationOptions: {
        drawerLabel: 'Items'
      }
    },
  },
  {
    initialRouteName: 'ItemStack',
    contentComponent: (props) => <DrawerItems {...{...props, onItemPress: (routes) => {
      console.log('routes', routes);
      const isButtonInCurrentStack = routes.focused;
      const routeName = routes.route.routes ? routes.route.routes[0].routeName : routes.route.routeName;
      if (isButtonInCurrentStack) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName })],
        });
        props.navigation.dispatch(resetAction);
      } else {
        props.navigation.navigate(routeName);
      }
    }}}/>
  },
);


/**
 * Authorized Drawer Stack
 * Put the drawer inside a stack so the header can be added and styled
 */
const AuthorizedDrawerStack = createStackNavigator(
  {
    AuthorizedDrawer: { screen: AuthorizedDrawer },
  }, 
  /*{
    headerMode: 'float',
    navigationOptions: ({navigation, screenProps, navigationOptions}) => {
      return {
        headerLeft: (
          <View 
            style={{
              paddingLeft: 10,
            }}
          >

          </View>
        ),
        headerTitle: 'Menu'
      };
    }
  }*/
)


/**
 * Root Stack
 * Contains all the stacks so you can link from links within one stack to links in the other stack
 */
const RootStack = createStackNavigator(
  {
    //OnboardingStack: { screen: OnboardingStack },
    AuthorizedStack: { screen: AuthorizedDrawerStack },
  },
  {
    headerMode: 'none'
  }
);

export default RootStack;