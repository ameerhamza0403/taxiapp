import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AppText} from './common';

const PaymentCard = (props) => {
  const {colors} = useTheme();
  const {children, style, amount} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
      }}>
      <View>
        <Image source={require('../assets/images/ic_mastercard.png')} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AppText>{`**** 8295`} </AppText>
        {amount && <AppText>$7</AppText>}
      </View>
    </View>
  );
};

export {PaymentCard};
