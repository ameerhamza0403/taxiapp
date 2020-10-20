import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Support from '../containers/Support';
import SelectAddress from '../containers/SelectAddress';
import RideOptions from '../containers/RideOptions';

const Stack = createStackNavigator();

export const DashboardNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Select address" component={SelectAddress} />
      <Stack.Screen name="Ride options" component={RideOptions} />
    </Stack.Navigator>
  );
};
