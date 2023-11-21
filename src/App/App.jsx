import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LOCATION } from 'constants/index';

import Home from 'pages/Home/HomePage';
import Layout from 'layout/Layout';
import AboutPage from 'pages/About/AboutPage';
import ContactPage from 'pages/Contact/ContactPage';

import LoginPage from 'components/Login/LoginPage';
import RegisterPage from 'components/Register/RegisterPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOCATION.HOME} element={<Layout />}>
          <Route index element={<Home />} />

          <Route exact path={LOCATION.ABOUT} element={<AboutPage />} />

          <Route exact path={LOCATION.CONTACT} element={<ContactPage />} />
        </Route>

        <Route path={LOCATION.LOGIN} element={<LoginPage />} />

        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
