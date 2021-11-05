import React, {useState} from 'react';
import {Image, StyleSheet, View, ImageBackground} from 'react-native';
import {Icon, Input, Item} from 'native-base';
import Colors from '../constants/Colors';
import InputFrame from '../assets/elements/input.png';
import InputSelected from '../assets/elements/input-selected.png';

export default props => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <View
      style={style.itemContainer}>
      <View style={props.inputContainer}>
        {/*<Image resizeMode="contain" source={props.icon} style={style.icon} />*/}
        {/*<Icon type={props.icon.type} name={props.icon.name} style={style.icon} />*/}
        <Input
          {...props}
          placeholderTextColor={Colors.WHITE}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder={props.placeholder}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 20,
    marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  icon: {
    marginTop: 17,
    marginRight: 10,
    width: 20,
    height: 18,
  },
  input: {
    color: Colors.WHITE,
    fontSize: 16,
  }
});
