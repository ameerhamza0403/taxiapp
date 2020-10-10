import React from 'react';
import {View, StyleSheet} from 'react-native';
import {InputWithLabel} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

const SignIn = (props) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen>
      <View key="header">
        <AppText bold size={30} center>
          Sign in
        </AppText>
      </View>
      <View key="content">
        <View style={styles.content}>
          <InputWithLabel bold label="EMAIL" />
          <InputWithLabel bold label="PASSWORD" />
          <Button bold onPress={() => navigate('Drawer', {screen: 'Home'})}>
            Sign In
          </Button>
          <View>
            <AppText center bold>
              OR SIGN IN WITH
            </AppText>
          </View>
        </View>
      </View>
      <View key="footer">
        <AppText center>
          Don’t have an account?{' '}
          <AppText onPress={() => navigate('SignUp')} underline primary>
            Sign up
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
