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
import CollectionsPage from 'pages/Collections/CollectionsPage';
import InteriorDesignPage from 'pages/InteriorDesign/InteriorDesignPage';
import InspirationPage from 'pages/Inspiration/InspirationPage';
import ShopPage from 'pages/Shop/ShopPage';
import ProductPage from 'pages/Product/ProductPage';
import LivingRoomPage from 'pages/Rooms/LivingRoom/LivingRoomPage';
import DiningRoomPage from 'pages/Rooms/DiningRoom/DiningRoomPage';
import BedroomPage from 'pages/Rooms/BedRoom/BedRoomPage';
import ProductCategoryPage from 'pages/ProductCategory/ProductCategoryPage';
import PromotionPage from 'pages/Promotion/PromotionPage';
import ShowroomPage from 'pages/Showroom/ShowroomPage';
import AccountPage from 'pages/Account/AccountPage';
import WishlistPage from 'pages/Wishlist/WishlistPage';
import CartPage from 'pages/Cart/CartPage';

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
          <Route path={LOCATION.COLLECTIONS} element={<CollectionsPage />} />
          <Route path={LOCATION.CONTACT} element={<ContactPage />} />
          <Route path={LOCATION.INTERIOR_DESIGN} element={<InteriorDesignPage />} />
          <Route path={LOCATION.INSPIRATION} element={<InspirationPage />} />
          <Route path={LOCATION.SHOP} element={<ShopPage />} />
          <Route path={LOCATION.LIVING_ROOM} element={<LivingRoomPage />} />
          <Route path={LOCATION.DINING_ROOM} element={<DiningRoomPage />} />
          <Route path={LOCATION.BEDROOM} element={<BedroomPage />} />
          <Route path={LOCATION.PRODUCT_CATEGORY} element={<ProductCategoryPage />} />
          <Route path={`${LOCATION.PRODUCT_CATEGORY}/:id`} element={<ProductPage />} />
          <Route path={LOCATION.PROMOTION} element={<PromotionPage />} />
          <Route path={LOCATION.SHOWROOM} element={<ShowroomPage />} />
          <Route path={LOCATION.ACCOUNT} element={<AccountPage />} />
          <Route path={LOCATION.WISHLIST} element={<WishlistPage />} />
          <Route path={LOCATION.CART} element={<CartPage />} />
        </Route>

        <Route path={LOCATION.LOGIN} element={<LoginPage />} />

        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
