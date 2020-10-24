import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Header, RoundIcon} from '../../components';
import {AppText} from '../../components/common';
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

const Support = (props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, {backgroundColor: colors.primary}]}>
        <Header {...props} color={colors.white} />
      </View>
      <View style={styles.contentContainer}>
        <Card style={styles.card}>
          <View style={styles.cardRow}>
            <AppText gray>Frequently asked questions</AppText>
            <Icon
              name="keyboard-arrow-right"
              type="material-icons"
              size={30}
              color={colors.gray}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.cardRow}>
            <AppText gray>Your support tickets</AppText>
            <Icon
              name="keyboard-arrow-right"
              type="material-icons"
              size={30}
              color={colors.gray}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.cardRow}>
            <AppText gray>Contact us</AppText>
            <Icon
              name="keyboard-arrow-right"
              type="material-icons"
              size={30}
              color={colors.gray}
            />
          </View>
        </Card>
        <View style={styles.optionCardsContainer}>
          <Card style={styles.optionCard}>
            <IconComp />
            <AppText>Option 1</AppText>
          </Card>
          <Card style={styles.optionCard}>
            <IconComp />
            <AppText>Option 2</AppText>
          </Card>
          <Card style={styles.optionCard}>
            <IconComp />
            <AppText>Option 3</AppText>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: '35%',
    paddingHorizontal: '2%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
    top: -30,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
  },
  optionCard: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'space-around',
    padding: 15,
  },
});
export default Support;
