import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';
import Profile from '../containers/Profile';

const Stack = createStackNavigator();

export const DashboardNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
