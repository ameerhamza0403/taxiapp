import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {Card, Header, HorizontalRow, RoundIcon} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function Arriving(props) {
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
          headerLeft={<Icon name="menu" type="material-icons" size={20} />}
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
            top: -60,
            position: 'absolute',
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            style={{height: '60%', aspectRatio: 1}}
            resizeMode="contain"
            source={require('../../assets/images/photo_driver.png')}
          />
        </View>
        <View style={{alignItems: 'flex-end', marginVertical: 30}}>
          <AppText
            style={{
              backgroundColor: colors.background,
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
            bold>
            HS785K
          </AppText>
          <AppText>Volkswagen Jetta</AppText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <RoundIcon
            name="phone-call"
            type="feather"
            raised
            size={25}
            background="white"
          />
          <RoundIcon
            name="chatbubble-ellipses-outline"
            type="ionicon"
            raised
            size={25}
            background="white"
          />
          <RoundIcon
            name="close"
            type="evilicon"
            raised
            size={30}
            background="white"
          />
        </View>
      </View>
    </Screen>
  );
}
