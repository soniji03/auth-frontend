import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'

console.log(authReducer,'fgrt')

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;