import React from 'react'
import {Text} from 'react-native-ui-lib';
import { ImageBackground } from 'react-native';
import Background from '../assets/elements/background.png';

import { TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

export default (props) => {
  return (
    <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
          {props.children}
    </ImageBackground>
  )
};
