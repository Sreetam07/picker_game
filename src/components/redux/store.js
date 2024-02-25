
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

