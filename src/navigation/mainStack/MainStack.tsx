import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../Routes';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenName} from '../ScreenName';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import React from 'react';

const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={ScreenName.SPLASHSCREEN}>
        <RootStack.Screen
          name={ScreenName.SPLASHSCREEN}
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
