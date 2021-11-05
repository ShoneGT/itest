import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView, StatusBar
} from 'react-native';
import {View, TextField, Text, Colors, Card, Button} from 'react-native-ui-lib';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {navigate} from '../../utils/utils';
import colors  from '../../constants/Colors'

import {
  fetchVideos,
} from '../../services/index';

import ClockIcon from '../../assets/icons/clock.png';
import Header from "../../assets/dashboard-header.png";
import UserProfile from "../../assets/user-profile.png";
import Logo from "../../assets/logo.png";
import Container from "../../assets/dashboard-container.png";

import Checklist from '../../assets/icons/checklist.png';
import Qualifications from '../../assets/icons/qualifications.png';
import HelpInfo from '../../assets/icons/help-info.png';
import Support from '../../assets/icons/support.png';
import Alert from '../../assets/icons/alert.png';
import Profile from '../../assets/icons/profile.png';
import Menu from '../../assets/icons/text_align_right.png';
import Question from '../../assets/icons/question-icon.png';
import * as authActions from "../../store/actions/auth";



export default (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState('single')
  const [activeList, setActiveList] = useState('public')

  console.log('state user', user);

  useEffect(() => {
    // fetchData();
  }, []);


  const renderItem = (item) => (
     <TouchableOpacity onPress={() => navigate(props, 'My Templates')}>
         <ImageBackground source={Container} resizeMode={'contain'} style={style.dashboardContainer}>
             <Image source={item.icon} style={style.item} />
             <Text style={style.itemTitle}>{item.title}</Text>
         </ImageBackground>
     </TouchableOpacity>
  );

  return (
      <View flex useSafeArea style={{backgroundColor: 'white'}}>
          <StatusBar
              translucent
              barStyle="dark-content"
              backgroundColor='magenta'
              />
          <ScrollView>
              <ImageBackground
                  resizeMode="cover"
                  source={Header}
                  style={style.imageContainer}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image source={UserProfile} style={{width: 120, height: 120}} />
                      <Text style={{
                          color: 'white',
                          fontWeight: '700',
                          fontSize: 14,
                          marginTop: 10
                      }}>Hi, Walter Gordon</Text>
                  </View>
              </ImageBackground>

              <View style={style.container}>
                  <Image resizeMode="contain" source={Logo} style={style.logo} />
                  <Text style={style.logoText}>Welding</Text>
              </View>

              <View row paddingL-12 paddingR-12 style={{justifyContent: 'space-between', margin: 20, marginBottom: -25}}>
                  {renderItem({
                      title: 'My Templates',
                      icon: Checklist
                  })}
                  {renderItem({
                      title: 'Qualifications',
                      icon: Qualifications
                  })}
              </View>

              <View row paddingL-12 paddingR-12 style={{justifyContent: 'space-between', margin: 20, marginBottom: -25}}>
                  {renderItem({
                      title: 'Help Info',
                      icon: HelpInfo
                  })}
                  {renderItem({
                      title: 'Support',
                      icon: Support
                  })}
              </View>

              <View row paddingL-12 paddingR-12 style={{justifyContent: 'space-between', margin: 20, marginBottom: -25}}>
                  {renderItem({
                      title: 'Notifications',
                      icon: Alert
                  })}
                  {renderItem({
                      title: 'Your Profile',
                      icon: Profile
                  })}
              </View>


              <View margin-50>
                  <TouchableOpacity
                      onPress={() => {
                          dispatch(authActions.logout())
                      }}
                      style={{backgroundColor: Colors.primary, padding: 20, borderRadius: 10}}>
                      <Text style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>Log Out</Text>
                  </TouchableOpacity>

              </View>
          </ScrollView>

        {/* User info and search */}



      </View>
  );
};

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        marginTop: - height * 0.099,
        justifyContent: 'center',
        alignItems: 'center'
    },
  tabWrapper: {
    width: width * 0.4,
    height: 65,
    padding: 14,
    justifyContent: 'center',
  },
    imageContainer: {
        width: '100%',
        height: height * 0.45,
        marginTop: - height * 0.037,
        // flex: 1,
        justifyContent: 'center', alignItems: 'center'
    },
  hr: {
    borderBottomWidth: 1, borderBottomColor: colors.GREY,
    marginTop: 15
  },
  borderActive: {
    borderBottomColor: colors.YELLOW, borderBottomWidth: 3, width: 45, marginTop: -1.9
  },
  borderActiveRight: {
    borderBottomColor:
    colors.YELLOW,
    borderBottomWidth: 3,
    width: 65,
    marginLeft: 53,
    marginTop: -1.9
  },
  opacity: {
    opacity: 0.6
  },
  competitionTitle: {
    fontSize: 18
  },
  competitionDate: {
    fontSize: 14,
    paddingTop: 10,
  },
    logo: {
        width: 115,
        height: 115,
        alignItems: 'center',
    },
    logoText: {
        color: colors.PRIMARY,
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 2.5,
        textTransform: 'uppercase'
    },
    dashboardContainer: {
        width: 150,
        height: 120,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: 46,
        height: 47,
        marginBottom: 10
    },
    itemTitle: {
        color: '#333333',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});
