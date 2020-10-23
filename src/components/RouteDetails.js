import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AppText} from './common';

const RouteDetails = (props) => {
  const {children, style} = props;
  return (
    <View
      style={{
        width: '100%',
        minHeight: 150,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <AppText style={{width: '25%'}} gray2>
          11:24
        </AppText>
        <AppText style={{flex: 1}}>
          1, Thrale Street, London, SE19HW, UK
        </AppText>
      </View>
      <View style={{position: 'absolute', left: '20%'}}>
        <Image source={require('../assets/images/ic_route_lg.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <AppText style={{width: '25%'}} gray2>
          11:24
        </AppText>
        <AppText style={{flex: 1}}>
          Ealing Broadway Shopping Centre, London, W55JY, UK
        </AppText>
      </View>
    </View>
  );
};

export {RouteDetails};
