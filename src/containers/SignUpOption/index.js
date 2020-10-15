import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {InputWithLabel, RoundIcon} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

const SignUpOption = (props) => {
  const [option, setOption] = useState('Phone');
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen>
      <View key="header"></View>
      <View key="content">
        <View style={styles.content}>
          <AppText style={{marginVertical: 20}}>
            Continue with a phone number{' '}
          </AppText>
          <InputWithLabel
            onSubmitEditing={() => navigate('SignUp', {type: 'phone'})}
          />

          <AppText center style={{marginVertical: 20}}>
            Or signup with
          </AppText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '80%',
              alignSelf: 'center',
            }}>
            <RoundIcon
              name="sc-facebook"
              type="evilicon"
              color="#fff"
              onPress={() => navigate('SignUp', {type: 'social'})}
            />
            <RoundIcon
              name="sc-twitter"
              type="evilicon"
              color="#fff"
              onPress={() => navigate('SignUp', {type: 'social'})}
            />
            <RoundIcon
              name="google"
              type="font-awesome"
              color="#fff"
              size={40}
              onPress={() => navigate('SignUp', {type: 'social'})}
            />
          </View>
        </View>
      </View>
      <View key="footer">
        {/* <View style={{alignItems: 'center', marginBottom: 40}}>
          <Button
            width="50%"
            bold
            onPress={() => navigate('SignUp', {type: 'phone'})}>
            Next
          </Button>
        </View> */}
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
export default SignUpOption;
