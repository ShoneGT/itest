import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import CompetitionDetails from '../screens/CompetitionDetails/Index'
import Header from '../components/Header'
import Menu from "../assets/icons/text_align_right.png";
import {Image, TouchableOpacity} from "react-native";
import CircleLeft from "../assets/icons/circle_chevron_left.png";
import Question from "../assets/icons/question-icon.png";
import Colors from '../constants/Colors'

const { Navigator, Screen } = createStackNavigator()

const options = {
  headerShown: false,
    headerStyle: {
        backgroundColor: 'red'
    },
}


export default (props) => (
  <Navigator>
    <Screen name="HomeScreen" component={Home} options={{
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        headerStyle: {
            backgroundColor: Colors.PRIMARY
        },
        headerTitle: 'My Templates',
        headerLeft: () => (
            <TouchableOpacity>
                <Image source={Question} style={{width: 29, height: 29, marginLeft: 11}} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <Image source={Menu} style={{width: 29, height: 29, marginRight: 15}} />
        ),
    }} />
    <Screen name="My Templates" component={CompetitionDetails} showBackButton={false}
            options={{
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                },
                headerStyle: {
                    backgroundColor: Colors.PRIMARY
                },
                headerTitle: 'My Templates',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        console.log(props)
                        props.navigation.goBack()
                    }}>
                        <Image source={CircleLeft} style={{width: 29, height: 29, marginLeft: 11}} />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <Image source={Menu} style={{width: 29, height: 29, marginRight: 15}} />
                ),
            }}
    />
  </Navigator>
)
