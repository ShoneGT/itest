import React, {Component} from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import HomeIcon from '../assets/icons/darhboard_alt.png';
import CalendarIcon from '../assets/icons/Date_range_light.png';
import ProfileIcon from '../assets/icons/User_cicrle.png';
import NotificationsIcon from '../assets/icons/Bell.png';
import Archive from '../assets/icons/Arhive_load.png';
import Home from '../screens/Home/Home';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const menuItems = [
  {
    title: 'Home',
    icon: HomeIcon,
    screen: 'Home',
  },
  {
    title: 'Profile',
    icon: CalendarIcon,
    screen: 'Explore',
  },
  {
    title: 'Notification',
    icon: NotificationsIcon,
    screen: 'Profile',
  },
  {
    title: 'Settings',
    icon: Archive,
    screen: 'Profile',
  },
    {
        title: 'Settings',
        icon: ProfileIcon,
        screen: 'Profile',
    },
];

const isActive = (item, route) => {
  return item.screen === route;
};

export default (props) => {
  console.log(props);
  return (
    <Footer style={{marginBottom: -20, backgroundColor: '#333333'}}>
      <FooterTab style={style.footer}>
        {menuItems.map((item) => {
          return (
            <View key={item.screen}>
              <Button
                onPress={() => {
                  // props.navigation.navigate(item.screen);
                }}>
                <Image source={item.icon} style={style.menuIcon} />
                {/*<Icon*/}
                {/*  type="MaterialIcons"*/}
                {/*  name={item.icon}*/}
                {/*  style={*/}
                {/*    isActive(item, props.route) ? style.activeIcon : style.icon*/}
                {/*  }*/}
                {/*/>*/}
                {/* <Text
                  style={isActive(item, props.route) ? style.text : style.text}>
                  {item.title}
                </Text> */}
              </Button>
            </View>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

const style = StyleSheet.create({
  footer: {
    backgroundColor: '#333333',
    height: 65,
    marginTop: -30,
    paddingLeft: width * 0.13,
    paddingRight: width * 0.13,
  },
  text: {
    fontSize: 11,
    letterSpacing: 0.2,
    color: Colors.SECONDARY,
    fontWeight: '500',
  },
  activeText: {
    fontSize: 14,
    color: Colors.PRIMARY,
    textTransform: 'capitalize',
    fontWeight: 'normal',
  },
  icon: {
    color: Colors.GREY,
  },
  activeIcon: {
    fontSize: 28,
    color: Colors.PRIMARY,
  },
  homeIcon: {
    color: Colors.WHITE,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 25,
  },
  homeText: {
    fontSize: 12,
    color: Colors.DARK_GREY,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  centerButton: {
    zIndex: 0,
    backgroundColor: '#3783F5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 58,
    height: 58,
    borderRadius: 50,
    marginRight: 11,
    marginTop: -20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});
