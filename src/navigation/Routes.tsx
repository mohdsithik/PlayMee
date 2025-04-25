import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  SplashScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
