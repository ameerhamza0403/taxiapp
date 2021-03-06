import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

const RoundIcon = (props) => {
  const {background, large, small, size} = props;
  const {colors} = useTheme();
  return (
    <Icon
      containerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        width: large ? 90 : small ? 45 : 60,
        aspectRatio: 1,
        borderRadius: large ? 45 : 30,
        backgroundColor: background || '#D5DDE0',
      }}
      size={size || 50}
      {...props}
      // color
      // disabled
      // disabledStyle
      // iconStyle
      // iconProps
      // name
      // onPress
      // onLongPress
      // raised
      // reverse
      // reverseColor
      // size
      // solid
      // type
      // underlayColor
    />
  );
};
const styles = StyleSheet.create({
  button: {},
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
});
export {RoundIcon};
