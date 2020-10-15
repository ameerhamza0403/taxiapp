import React from 'react';
import {View, StyleSheet} from 'react-native';
import {InputWithLabel, RoundIcon} from '../../components';
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
          <View>
            <AppText bold style={{marginBottom: 10}}>
              Continue with a phone number{' '}
            </AppText>
            <InputWithLabel
              onSubmitEditing={() => navigate('SignUp', {type: 'phone'})}
            />
            <AppText style={{marginVertical: 30}} center>
              OR SIGN IN WITH
            </AppText>
            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <RoundIcon name="sc-facebook" type="evilicon" color="#fff" />
              <RoundIcon name="sc-twitter" type="evilicon" color="#fff" />
              <RoundIcon
                name="google"
                type="font-awesome"
                color="#fff"
                size={40}
              />
            </View> */}
          </View>
          <InputWithLabel bold label="EMAIL" />
          <InputWithLabel bold label="PASSWORD" />
          <Button bold onPress={() => navigate('Drawer', {screen: 'Home'})}>
            Sign In
          </Button>
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
    marginBottom: 40,
    paddingHorizontal: 10,
  },
});
export default SignIn;
