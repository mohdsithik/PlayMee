import {RootStackScreenProps} from '@navigation/Routes';
import {decrement, increment} from '@redux/features/counter/counterSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import React from 'react';
import {Text, View, Button} from 'react-native';

const Counter = () => {
  // ✅ Typed selector
  const count = useAppSelector(state => state.counter.value);

  // ✅ Typed dispatch
  const dispatch = useAppDispatch();

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 18}}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const SplashScreen = ({}: RootStackScreenProps<'SplashScreen'>) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>SplashScreen</Text>
      <Counter />
    </View>
  );
};
export default SplashScreen;
