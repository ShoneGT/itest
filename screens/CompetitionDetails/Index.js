import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
    TextInput
} from 'react-native';
import {View, TextField, Text, Colors, Card, Button} from 'react-native-ui-lib';
import Background from '../../components/Background';
import Search from '../../assets/icons/search.png'
import SearchIcon from '../../assets/icons/search-icon.png'
import ListItem from '../../assets/icons/list-item.png'
import CircleRight from '../../assets/icons/circle_chevron_right.png'
import CircleLeft from '../../assets/icons/circle_chevron_left.png'

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {navigate} from '../../utils/utils';
import colors  from '../../constants/Colors'

import {
  fetchVideos,
} from '../../services/index';

import ClockIcon from '../../assets/icons/clock.png';
import PrimaryButton from '../../components/PrimaryButton';
import Question from "../../assets/icons/question-icon.png";
import Menu from "../../assets/icons/text_align_right.png";


export default (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState('single')
  const [activeList, setActiveList] = useState('public')

  console.log('state user', user);

  useEffect(() => {
    // fetchData();
  }, []);


  const fetchData = async () => {
    const videos = await fetchVideos();
    setVideos(videos);
    console.log('videos', videos);
  };

  const Item = () => (
      <TouchableOpacity>
          <View row marginT-30>
              <Image source={ListItem} style={{width: 82, height: 83}} />
              <View marginL-15>
                  {/* Title */}
                  <View row marginB-8>
                      <Text style={style.listTitle}>Title:</Text>
                      <Text style={style.listText}> WPS Lorem Ipsum Template 1</Text>
                  </View>
                  {/* Uploaded */}
                  <View row marginB-8>
                      <Text style={style.listTitle}>Uploaded:</Text>
                      <Text style={style.listText}>17/05/2021</Text>
                  </View>
                  {/* Section */}
                  <View row marginB-8>
                      <Text style={style.listTitle}>Section:</Text>
                      <Text style={style.listText}> Duis aute irure dolor</Text>
                  </View>
                  {/* Status */}
                  <View row>
                      <Text style={style.listTitle}>Status:</Text>
                      <Text primary style={{fontSize: 12, fontWeight: 'bold'}}> Assigned</Text>
                  </View>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={CircleRight} style={{width: 24, height: 24}} />
              </View>
          </View>
          <View marginT-20 style={{borderBottomWidth: 1, borderBottomColor: '#CCCCCC'}} />
      </TouchableOpacity>
  );
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
  const renderItem = ({item}) => (
    <Item title={item.title} date={item.date} active={item.active} />
  );

  return (
      <View flex useSafeArea  bg-white>
          <View margin-20>

              <FlatList
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={
                      <ImageBackground resizeMode={'contain'} source={Search} style={{height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <TextInput style={{height: 60, padding: 20}} placeholder="Search by template name" />
                          <Image source={SearchIcon} style={{width: 20, height: 20, marginRight: 15}} />
                      </ImageBackground>
                  }
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
          </View>
      </View>
  );
};

const width = Dimensions.get('window').width;

const style = StyleSheet.create({
  tabWrapper: {
    width: width * 0.4,
    height: 65,
    padding: 14,
    justifyContent: 'center',
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
    listTitle: {
        color: '#A6A6A6',
        fontSize: 12
    },
    listText: {
        color: '#7C7C7C',
        fontSize: 12,
        fontWeight: 'bold'
    }
});
