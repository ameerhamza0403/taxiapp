import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Header} from '../../components';
import {AppText} from '../../components/common';
import {Keyboard} from '../../components/Keyboard';

const OTPdigit = (number) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.digitContainer, {borderColor: colors.primary}]}>
      <AppText style={{paddingHorizontal: 10}} size={35} bold primary>
        {number}
      </AppText>
    </View>
  );
};
const VerifyCode = (props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: '2%'}}>
        <Header {...props} />
      </View>
      <View style={styles.centerContainer}>
        <AppText style={{paddingHorizontal: '20%'}} center>
          A code has been sent to +33 234 556 7888 via SMS
        </AppText>
        <View>
          <View style={styles.otpContainer}>
            {OTPdigit(1)}
            {OTPdigit(2)}
            {OTPdigit(3)}
            {OTPdigit(4)}
          </View>
          <AppText underline center>
            Resend code
          </AppText>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.callBtn, {backgroundColor: colors.primary}]}>
          <AppText size={20} white bold center>
            Press here to get a call
          </AppText>
        </TouchableOpacity>
        <Keyboard onPress={(key) => console.log(key)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  digitContainer: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginHorizontal: 2,
  },
  callBtn: {
    height: 60,
    justifyContent: 'center',
  },
});
export default VerifyCode;
