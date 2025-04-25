import {RootStackScreenProps} from '@navigation/Routes';
import React from 'react';
import {Text, View} from 'react-native';

const SplashScreen = ({}: RootStackScreenProps<'SplashScreen'>) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>SplashScreen</Text>
    </View>
  );
};
export default SplashScreen;
