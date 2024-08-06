import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './components/auth/Login'
import SignInPage from './components/auth/Signin'
import Uuhome from './components/Navbar/uhome';
import Home from './Home'
import ForgotPassword from './Forgot-password';
import ResetPassword from './Reset-password';

import Header from '../src/components/authenticatedbar/header'
import Footer from '../src/components/authenticatedbar/footer'

function App() {
  const router = createBrowserRouter([
    { path: '/',
      element:  <Uuhome /> 
     },
    { path: '/signin',
       element: <SignInPage />
      },
  { path: '/login', 
    element: <LoginPage />
   },
   {
    path: '/home',
    element: <Home/>
   },
   {
    path: '/forgot-Password',
    element: <ForgotPassword />
   },
   {
    path: '/reset-Password',
    element: <ResetPassword />
   },
   {
    path: '/header',
    element: <Header />
   }, {
    path: '/footer',
    element: <Footer />
   },
 ])

  return (
    
 <RouterProvider router={router}  /> 
   
  )
}

export default App