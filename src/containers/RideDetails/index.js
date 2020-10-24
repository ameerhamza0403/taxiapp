import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Card,
  Header,
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

const RideDetails = (props) => {
  const {colors} = useTheme();
  return (
    <Screen noPadding>
      <View key="header">
        <Header {...props} />
        <View
          style={[styles.topContainer, {backgroundColor: colors.primary}]}
        />
      </View>
      <View key="content" style={styles.contentContainer}>
        <View style={styles.card}>
          <RouteDetails />
        </View>
        <AppText bold>Driver</AppText>
        <Card style={styles.driverCard}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              resizeMode="contain"
              source={require('../../assets/images/photo_driver.png')}
            />
          </View>
          <View style={{flex: 4}}>
            <AppText bold>Patrick</AppText>
            <AppText>Volkswagen Jetta</AppText>
            <AppText>4.8</AppText>
          </View>
          <View style={{flex: 1}}>
            <Icon name="keyboard-arrow-right" type="material-icons" size={35} />
          </View>
        </Card>
        <AppText bold>Payment</AppText>
        <PaymentCard />
        <Button>Raise issue</Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 150,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    top: -40,
  },
  driverCard: {
    minHeight: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 2,
    height: 140,
    width: 140,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: '60%',
    aspectRatio: 1,
  },
});
export default RideDetails;
