import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {Header, RoundIcon} from '../../components';
import {AppText, Screen} from '../../components/common';

export default function Arriving(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View key="content" style={styles.header}>
        <Header
          {...props}
          headerLeft={<Icon name="menu" type="material-icons" size={20} />}
        />
      </View>
      <View key="footer" style={styles.bottomContainer}>
        <View style={styles.driverImageContainer}>
          <Image
            style={styles.driverImage}
            resizeMode="contain"
            source={require('../../assets/images/photo_driver.png')}
          />
        </View>
        <View style={styles.carDetailsContainer}>
          <AppText
            style={[styles.carNumber, {backgroundColor: colors.background}]}
            bold>
            HS785K
          </AppText>
          <AppText>Volkswagen Jetta</AppText>
        </View>

        <View style={styles.buttonsContainer}>
          <RoundIcon
            name="phone-call"
            type="feather"
            raised
            size={25}
            background="white"
          />
          <RoundIcon
            name="chatbubble-ellipses-outline"
            type="ionicon"
            raised
            size={25}
            background="white"
          />
          <RoundIcon
            name="close"
            type="evilicon"
            raised
            size={30}
            background="white"
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
  },
  bottomContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  driverImageContainer: {
    top: -60,
    position: 'absolute',
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  driverImage: {
    height: '60%',
    aspectRatio: 1,
  },
  carDetailsContainer: {
    alignItems: 'flex-end',
    marginVertical: 30,
  },
  carNumber: {
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
