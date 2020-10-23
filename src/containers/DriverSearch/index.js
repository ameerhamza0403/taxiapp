import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  Card,
  Header,
  HorizontalRow,
  RoundIcon,
  RouteDetails,
} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function DriverSearch(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View
        key="content"
        style={{
          paddingHorizontal: 20,
        }}>
        <Header
          {...props}
          noTitle
          headerLeft={<Icon name="close" type="material-icons" />}
        />
      </View>
      <View
        key="footer"
        style={{
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
          paddingVertical: 30,
          backgroundColor: 'white',
        }}>
        <RouteDetails />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.background,
            marginVertical: 20,
            borderRadius: 10,
            padding: 15,
          }}>
          <View>
            <Image source={require('../../assets/images/ic_mastercard.png')} />
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10}}>
            <AppText>**** </AppText>
            <AppText>8295</AppText>
          </View>
        </View>
        <Button>Cancel Booking</Button>
      </View>
    </Screen>
  );
}
