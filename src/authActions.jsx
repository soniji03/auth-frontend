// authActions.js
import React from 'react';
import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  console.log(credentials)

dispatch(loginStart());

};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logout());
};