import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {Header, PaymentCard, RouteDetails} from '../../components';
import {Button, Screen} from '../../components/common';

export default function DriverSearch(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View key="content" style={styles.headerContainer}>
        <Header
          {...props}
          noTitle
          headerLeft={<Icon name="close" type="material-icons" />}
        />
      </View>
      <View key="footer" style={styles.bottomContainer}>
        <RouteDetails />
        <PaymentCard />
        <Button>Cancel Booking</Button>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
});
