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

import {Card, Header, HorizontalRow, RoundIcon} from '../../components';
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            borderRadius: 10,
            paddingVertical: 30,
            padding: 10,
          }}>
          <View
            style={{
              width: '25%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <AppText gray2>11:24</AppText>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <Image source={require('../../assets/images/ic_route_lg.png')} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <AppText>1, Thrale Street, London, SE19HW, UK</AppText>
            <AppText>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </AppText>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.gray3,
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
