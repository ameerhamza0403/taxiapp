import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../components/common';
import {AppText, Screen} from '../../components/common';

const Onboarding = (props) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen>
      <View key="header">
        <AppText style={styles.heading} size={50} bold center>
          Taxi Kit
        </AppText>
      </View>
      <View key="content" style={styles.content}>
        <Button bold onPress={() => navigate('SignIn')}>
          Sign In
        </Button>
        <Button bold onPress={() => navigate('SignUpOption')}>
          Sign Up
        </Button>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  heading: {marginTop: '30%'},
  content: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default Onboarding;
