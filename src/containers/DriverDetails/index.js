import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Card,
  Header,
  HorizontalRow,
  PaymentCard,
  RoundIcon,
  RouteDetails,
} from '../../components';
import {AppText, Button, Screen} from '../../components/common';
import {Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

const IconComp = ({name = 'sc-facebook', type = 'evilicon', onPress}) => (
  <RoundIcon
    name={name}
    type={type}
    color="#fff"
    small
    size={30}
    onPress={onPress}
  />
);

const DriverDetails = (props) => {
  const {colors} = useTheme();
  return (
    <Screen>
      <View key="header">
        <Header {...props} />
      </View>
      <View key="content">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              height: 140,
              width: 140,
              borderRadius: 150 / 2,
              justifyContent: 'center',
            }}>
            <Image
              style={{height: '60%', aspectRatio: 1}}
              resizeMode="contain"
              source={require('../../assets/images/photo_driver.png')}
            />
          </View>
          <View style={{flex: 3}}>
            <AppText bold>Patrick</AppText>
            <AppText>Volkswagen Jetta</AppText>
          </View>
        </View>
        <View style={styles.optionCardsContainer}>
          <View style={styles.optionCard}>
            <IconComp />
            <AppText>4.8</AppText>
          </View>
          <View style={styles.optionCard}>
            <IconComp />
            <AppText>126</AppText>
          </View>
          <View style={styles.optionCard}>
            <IconComp />
            <AppText>2 years</AppText>
          </View>
        </View>
        <View style={styles.bottomCard}>
          <AppText gray2>Member since</AppText>
          <AppText>16.06.2017</AppText>
          <HorizontalRow />
          <AppText gray2>Car type</AppText>
          <AppText>Van</AppText>
          <HorizontalRow />
          <AppText gray2>Plate number</AppText>
          <AppText>HS785K</AppText>
          <HorizontalRow />
          <AppText gray2>Plate number</AppText>
          <AppText>HS785K</AppText>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 0,
    width: '100%',
    borderWidth: 0.5,
    marginVertical: 15,
  },
  optionCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionCard: {
    width: '31%',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  bottomCard: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
});
export default DriverDetails;
