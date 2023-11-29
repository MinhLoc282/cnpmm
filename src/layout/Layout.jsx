import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Wishlist from 'components/Wishlist/Wishlist';
import Navbar from 'components/Navbar/Navbar';
import LoginForm from 'components/LoginForm/LoginForm';

function Layout() {
  return (
    <div id="wrapper">
      <Header />

      <Outlet />

      <Footer />

      <Wishlist />
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default Layout;
