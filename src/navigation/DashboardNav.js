import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Support from '../containers/Support';
import SelectAddress from '../containers/SelectAddress';
import RideOptions from '../containers/RideOptions';
import DriverSearch from '../containers/DriverSearch';
import Arriving from '../containers/Arriving';
import TripEnd from '../containers/TripEnd';
import RideDetails from '../containers/RideDetails';
import DriverDetails from '../containers/DriverDetails';

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
      <Stack.Screen name="DriverSearch" component={DriverSearch} />
      <Stack.Screen name="Arriving" component={Arriving} />
      <Stack.Screen name="TripEnd" component={TripEnd} />
      <Stack.Screen name="Ride details" component={RideDetails} />
      <Stack.Screen name="Driver details" component={DriverDetails} />
    </Stack.Navigator>
  );
};
