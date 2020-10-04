import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';

const Stack = createStackNavigator();

export const DashboardNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
