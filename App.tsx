import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainStack from './src/navigation/mainStack/MainStack';

const App = () => (
  <Provider store={store}>
    <MainStack />;
  </Provider>
);

export default App;
