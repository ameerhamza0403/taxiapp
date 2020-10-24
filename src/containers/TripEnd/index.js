import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  Card,
  Header,
  PaymentCard,
  RoundIcon,
  RouteDetails,
} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function TripEnd(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen>
      <View key="header">
        <Header
          {...props}
          noTitle
          headerLeft={<Icon name="menu" type="material-icons" />}
        />
      </View>
      <View key="content">
        <Card style={styles.card}>
          <RoundIcon
            name="check"
            type="feather"
            size={25}
            color={colors.primary}
          />
          <AppText style={styles.tripEndText} bold>
            Your trip has ended
          </AppText>
          <RouteDetails />
          <PaymentCard />
        </Card>
      </View>
      <View key="footer">
        <Button>Ok</Button>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  card: {
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  tripEndText: {
    marginBottom: 30,
  },
});
