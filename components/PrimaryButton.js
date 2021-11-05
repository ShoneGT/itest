import React from 'react';
import GlobalStyles from '../constants/GlobalStyles';
import {navigate} from '../utils/utils';
import Text from '../components/Text'
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import PrimaryButton from '../assets/elements/primary-button.png';

export default props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={() => {
        if (props.method) {
          props.method();
        } else {
          navigate(props, props.screen, props.payload);
        }
      }}>

      <ImageBackground
        source={PrimaryButton}
        resizeMode={'stretch'}
        style={[style.button, props.style]}
        >
        <Text
          text={props.title}
          color={props.textColor}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  background: {
    backgroundColor: Colors.SECONDARY
  },
  row: {
    flexDirection: 'row'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(27, 27, 78, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    lineHeight: 24,
    letterSpacing: 2,
    fontSize: 16,
  },
  onboardTitle: {
    marginTop: height * 0.05,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 42.19,
    color: Colors.WHITE
  },
  onboardDescription: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.WHITE
  },
  footerProgress: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 20,
  },
  circleProgress: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: Colors.WHITE,
    opacity: 0.4
  },
  circleProgressActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: Colors.WHITE
  },
  fixedBottom: {
    bottom: height * 0.03
  },
  itemsCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // TEXT
  textCenter: {
    textAlign: 'center'
  },
  h1: {
    color: '#23232B',
    fontWeight: 'bold',
    fontSize: 34,
    // lineHeight: 24
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.2
  },
  subTitle: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
    letterSpacing: 0.2
  },
  card: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10
  },
  backButton: {
    color: Colors.GREY,
    fontSize: 24
  }
});
