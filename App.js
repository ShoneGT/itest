import React, {useState} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {AppNavigator} from './navigation/navigator';
import {Root} from 'native-base';
import {useSelector, Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import {Typography, Colors, Spacings} from 'react-native-ui-lib';
import colors from './constants/Colors'

const rootReducer = combineReducers({
    auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

console.disableYellowBox = true;


Colors.loadColors({
    primary: colors.PRIMARY,
    primaryLight: colors.PRIMARY_LIGHT,
    secondary: colors.SECONDARY,
    white: colors.WHITE,
    yellow: colors.YELLOW,
});

Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
    h2: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 28
    },
    h3: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 28
    },
    p: {fontSize: 14, fontWeight: '400'},
    pStrong: {fontSize: 14, fontWeight: '700'},
    small: {
        fontSize: 12,
        fontWeight: '400',
    },
});



export default (props) => {
    const [fontsLoaded, setFontsLoaded] = useState(true);

    if (!fontsLoaded) {
        return <ActivityIndicator />;
    } else {
        return (
            <Provider store={store}>
                <StatusBar
                    animated={true}
                    backgroundColor="red"
                    barStyle={'dark-content'}
                    showHideTransition={'fade'}
                    hidden={false} />
                <AppNavigator />
            </Provider>
        );
    }
};
