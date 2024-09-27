import React from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Account from '../../screens/account';
import Favourite from '../../screens/favourate';
import Menu from '../../screens/menu';
import { Icons } from '../../assets'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator= () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={Icons.homeicon} style={{ width: 24, height: 24 }} />,
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={Icons.account} style={{ width: 24, height: 24 }} />,
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={Favourite}
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={Icons.star} style={{ width: 24, height: 24 }} />,
      }}
    />
    <Tab.Screen
      name="Menu"
      component={Menu}
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={Icons.menu} style={{ width: 24, height: 24 }} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
