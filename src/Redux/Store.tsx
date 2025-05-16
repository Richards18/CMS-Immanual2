import {configureStore} from '@reduxjs/toolkit';
import authReducers from './auth.reducers';

const store = configureStore({
  reducer: {
    auth: authReducers,
    // Add other reducers if any
  },
});

export default store;
