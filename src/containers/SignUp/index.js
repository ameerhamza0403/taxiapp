import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {InputWithLabel} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

const SignIn = (props) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen backgroundColor="white">
      <View key="header">
        <AppText bold size={30} center>
          Sign up
        </AppText>
      </View>
      <View key="content">
        <View style={styles.content}>
          <InputWithLabel label="NAME" />
          <InputWithLabel label="EMAIL" />
          <InputWithLabel label="PASSWORD" />
          <Button bold>Sign Up</Button>
        </View>
      </View>
      <View key="footer">
        <AppText center>
          Already have an account?{' '}
          <AppText onPress={() => navigate('SignIn')} underline primary>
            Sign in
          </AppText>
        </AppText>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  content: {
    height: '100%',
    justifyContent: 'center',
  },
});
export default SignIn;
