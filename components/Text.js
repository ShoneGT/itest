import React from 'react';
import GlobalStyles from '../constants/GlobalStyles';
import {Text} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

export default props => {
  console.log('style iz prop', props.style);
  return (
    <Text
      {...props}
      style={[
        props.customStyle,
        style.text,
        {
          color: props.color,
          fontSize: props.size
        }
      ]}>
      {props.text}
    </Text>
  );
};

const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  text: {
    marginRight: 10,
    textAlign: 'right',
    color: Colors.PRIMARY,
    fontSize: 16,
    lineHeight: 28
  },
});
