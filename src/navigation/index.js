/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Splash from '../containers/Splash';
import DrawerMenu from '../containers/DrawerMenu';

import {DashboardNav} from './DashboardNav';
import {AuthNav} from './AuthNav';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerMenu {...props} />}
      drawerBackgroundColor="transparent">
      <Drawer.Screen name="Main" component={DashboardNav} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  const [appIntro, setAppIntro] = useState(true);
  const [token] = useState(true);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      appColor: '#014488',
      primary: '#1152FD',
      secondary: '#000',
      white: 'white',
      gray: '#4B545A',
      gray2: '#97ADB6',
      gray3: '#F7F8F9',
      background: '#e8e8e8',
      black: '#3E4958',
    },
  };

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000),
    ).then(() => setAppIntro(false));
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      {appIntro ? (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Splash" component={Splash} />
        </RootStack.Navigator>
      ) : token ? (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {/* <RootStack.Screen name="Auth" component={AuthNav} /> */}
          <RootStack.Screen name="Drawer" component={DrawerNav} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Auth" component={AuthNav} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
