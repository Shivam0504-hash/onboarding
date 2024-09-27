import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashscreen';
import Tutorialscreen from '../screens/tutorialscreen';
import { ScreenNames } from './screenNames';
import SignIn from '../screens/signin';
import ForgotPassword from '../screens/forgotpassword';
import ResetPassword from '../screens/resetpassword';
import AddphoneNumber from '../screens/addphone';
import AccountVerify from '../screens/varify';
import Home from '../screens/Home';
import BottomTabNavigator from './bottomtab';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.SplashScreen}>

        <Stack.Screen
          name={ScreenNames.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={ScreenNames.TutorialScreen}
          component={Tutorialscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.ForgotPassword}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={ScreenNames.ResetPassword}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.AddphoneNumber}
          component={AddphoneNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.AccountVerify}
          component={AccountVerify}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          component={BottomTabNavigator}
          name='Home'
          options={{headerShown: false}}
        />
        


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
  },
  heading: {
    width: 207,
    height: 17,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.07,
    marginTop: 32,
    marginLeft: 24,
  },
});

export default RootNavigator;
