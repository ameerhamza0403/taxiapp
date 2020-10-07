import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {AppText, Screen, Button, Picker} from '../../components/common';
import {Keyboard} from '../../components/Keyboard';
import {useTheme} from '@react-navigation/native';

const VerifyCode = (props) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <View>
        <Header {...props} />
      </View>
      <View style={{flex: 1}}>
        <AppText style={{paddingHorizontal: '20%'}} center>
          A code has been sent to +33 234 556 7888 via SMS
        </AppText>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}>
          <AppText white bold center>
            Press here to get a call
          </AppText>
        </TouchableOpacity>
        <Keyboard onPress={(key) => console.log(key)} />
      </View>
    </View>
  );
};
export default VerifyCode;
