import React, {useState} from 'react';
import {Container, Form, Content} from 'native-base';
import {View, Text, Button} from 'react-native-ui-lib';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    ScrollView, StatusBar
} from 'react-native';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import {navigate} from '../../utils/utils';
import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';
import Header from '../../assets/header.png';
import EmailIcon from '../../assets/icons/email.png';
import LockIcon from '../../assets/icons/lock.png';
import Unlock from '../../assets/icons/unlock.png';
import Plus from '../../assets/icons/plus.png';
import Logo from '../../assets/logo.png';
import Help from '../../assets/icons/question.png';
import SignIn from '../../assets/icons/Sign_in_circle.png';
import SignInWhite from '../../assets/icons/sign_in_circle_white.png';
import PrimaryButton from '../../components/PrimaryButton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default props => {
  const [email, setEmail] = useState('john@doe.com');
  const [password, setPassword] = useState('signup123');

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    console.log('email iz signin', email);
    try {
      await dispatch(authActions.login(email, password));
    } catch (err) {
      console.log('ERROR', err);
    }
  };


  return (
    <ScrollView style={{flex: 1}}>
        <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor='magenta'
        />
        <ImageBackground
            resizeMode="cover"
            source={Header}
            style={style.imageContainer}>
            {/*<View style={[GlobalStyles.row, GlobalStyles.header, {marginTop: 40, justifyContent: 'space-between'}]}>*/}
            {/*    <Image source={Help} style={GlobalStyles.headerIcon} />*/}
            {/*    <Image source={SignIn} style={GlobalStyles.headerIcon} />*/}
            {/*</View>*/}
        </ImageBackground>
        <View style={style.content}>
          <View style={style.container}>
            <Image resizeMode="contain" source={Logo} style={style.logo} />

            <Text style={style.logoText}>Welding</Text>

              <View style={GlobalStyles.row} marginT-30 marginB-20>
                  <Image source={Unlock} style={GlobalStyles.headerIcon} />
                  <Text style={style.signIn}>Sing In</Text>
              </View>
          </View>


          <View>
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Your Email"
              onChangeText={value => setEmail(value)}
              placeholderTextColor={Colors.DARK}
              style={style.input}
            />
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={value => setEmail(value)}
              placeholderTextColor={Colors.DARK}
              style={[style.input, {marginTop: 20}]}
            />

          </View>
            {/* Sign in button */}
            <View marginT-20 style={[GlobalStyles.row, {justifyContent: 'space-between'}]}>
                <Button
                    backgroundColor={Colors.PRIMARY}
                    label="SIGN UP"
                    labelStyle={{fontWeight: '600', fontSize: 14}}
                    style={{marginBottom: 10}}
                    iconSource={Plus}
                    iconStyle={{tintColor: Colors.white, width: 19, height: 19}}
                />
                <Button
                    backgroundColor={Colors.DARK}
                    label="SIGN IN"
                    labelStyle={{fontWeight: '600', fontSize: 14}}
                    style={{marginBottom: 10, height: 51}}
                    iconSource={SignInWhite}
                    iconStyle={{width: 19, height: 19}}
                    iconOnRight
                    onPress={() => handleSignIn()}
                />
            </View>
        </View>

        {/*Forgot Password*/}
        <View style={style.forgotPasswordContainer}>
            <TouchableOpacity onPress={() => navigate(props, 'Forgot Password')}>
                <Text style={style.forgotPassword}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  content: {
    flex: 1,
    margin: 60,
    marginTop:  - height * 0.09,
  },
  imageContainer: {
      width: '100%',
      height: height * 0.65,
      marginTop: - height * 0.047,
      flex: 1,
  },
  logo: {
    width: 115,
    height: 115,
    alignItems: 'center',
  },
  logoText: {
    color: Colors.PRIMARY,
    fontSize: 13,
      fontWeight: '700',
      letterSpacing: 2.5,
      textTransform: 'uppercase'
  },
    signIn: {

        color: Colors.GREY,
        fontSize: 27,
        fontWeight: '700',
        textTransform: 'uppercase'
    },

  social: {
    width: 60,
    height: 60,
  },
  button: {
    width: 200,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center'
  },
  bottomText: {
    color: Colors.WHITE,
    fontSize: 16,
    letterSpacing: 0.32,
    textAlign: 'center'
  },
  textLink: {
    fontSize: 16,
    letterSpacing: 0.32,
    color: Colors.PRIMARY
  },
  forgetPassword: {
    marginRight: 10,
    textAlign: 'right',
    color: Colors.PRIMARY,
    fontSize: 16,
    lineHeight: 28
  },
    inputContainer: {
      height: 60,
      backgroundColor: Colors.SECONDARY,
      borderRadius: 25,
    },
    input: {
      // borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: Colors.SECONDARY,
        borderRadius: 25,
      textAlign: 'center',
        padding: 20
    },
    forgotPasswordContainer: {
      borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      marginLeft: '15%',
        marginRight: '15%',
      backgroundColor: '#EDEDED',
      padding: 20
    },
    forgotPassword: {
      marginBottom: 10,
      textAlign: 'center',
      color: 'black',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.3,
        textDecorationLine: 'underline'
    }
});
