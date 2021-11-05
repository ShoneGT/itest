import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import SignUpStepTwo from '../screens/Auth/SignUpStepTwo'
import SignUpPassword from '../screens/Auth/SignUpPassword'
import ForgotPassword from '../screens/Auth/ForgotPassword'
import Colors from "../constants/Colors";
import {Image, TouchableOpacity} from "react-native";
import CircleLeft from "../assets/icons/circle_chevron_left.png";
import Menu from "../assets/icons/text_align_right.png";
import SignInIcon from "../assets/icons/Sign_in_circle.png";
import Question from "../assets/icons/question.png";

const { Navigator, Screen } = createStackNavigator()

const options = {
  headerShown: false
}

const options1 = {
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    headerStyle: {
        backgroundColor: Colors.DARK
    },
    headerTitle: '',
    headerLeft: () => (
        <TouchableOpacity onPress={() => {
            console.log(props)
            props.navigation.goBack()
        }}>
            <Image source={Question} style={{width: 29, height: 29, marginLeft: 11}} />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <Image source={SignInIcon} style={{width: 25, height: 25, marginRight: 15}} />
    ),
}

export default () => (
  <Navigator>
    <Screen name="Sign In" component={SignIn} options={options} />
    <Screen name="Sign Up" component={SignUp} options={options} />
    <Screen name="Sign Up Step Two" component={SignUpStepTwo} options={options} />
    <Screen
      name="Sign Up Password"
      component={SignUpPassword}
      options={options}
    />
    <Screen
      name="Forgot Password"
      component={ForgotPassword}
      options={options}
    />
  </Navigator>
)
