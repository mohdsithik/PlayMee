import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer types (optional but useful)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
