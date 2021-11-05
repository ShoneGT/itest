import React from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import { navigate } from '../utils/utils'
import {Text, View} from 'react-native-ui-lib';

import {Image, TouchableOpacity} from 'react-native'
import Colors from '../constants/Colors'
import colors from "../constants/Colors";
import CircleLeft from "../assets/icons/circle_chevron_left.png";
import Menu from "../assets/icons/text_align_right.png";

export default (props) => {
    return (
        <View row style={{backgroundColor: colors.PRIMARY}}>
            {/* User Info */}
            <View flex>
                <View padding-12 br10>
                    <Image source={CircleLeft} style={{width: 29, height: 29}} />
                </View>
            </View>
            <View>
                <Text marginT-18 white style={{fontSize: 15, textTransform: 'uppercase', fontWeight: 'bold'}}>My Templates</Text>
            </View>
            {/* Search */}
            <View flex right>
                <View padding-12 br10>
                    <Image source={Menu} style={{width: 29, height: 29}} />
                </View>
            </View>
        </View>
    )
};
