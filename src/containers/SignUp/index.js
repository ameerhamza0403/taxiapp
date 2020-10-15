import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {InputWithLabel} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

const SignIn = (props) => {
  const [option, setOption] = useState('Phone');
  const {
    navigation: {navigate},
    route: {
      params: {type},
    },
  } = props;
  return (
    <Screen>
      <View key="header">
        <AppText bold size={30} center>
          Sign up
        </AppText>
      </View>
      <View key="content">
        <View style={styles.content}>
          <InputWithLabel bold label="FIRST NAME" />
          <InputWithLabel bold label="LAST NAME" />
          <InputWithLabel bold label="EMAIL" />
          <InputWithLabel bold label="PASSWORD" />
          {type === 'social' && <InputWithLabel bold label="Phone" />}
          <Button bold onPress={() => navigate('VerifyCode')}>
            Sign Up
          </Button>

          {/* <AppText center bold style={{marginVertical: 10}}>
            OR
          </AppText>
          <Button
            background="black"
            bold
            onPress={() => setOption(option === 'Phone' ? 'Email' : 'Phone')}>
            {`Sign Up With ${option}`}
          </Button> */}
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
