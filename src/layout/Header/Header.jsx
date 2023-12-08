/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { actionGetCart, actionGetUserWishlist, actionLogout } from 'store/actions';

import { LOCATION } from 'constants/index';

import VIFlag from 'assets/images/flags/vi.png';
import ICShopping from 'assets/icons/ic-shopping.png';
import MenuBar from 'assets/icons/menu-bar.png';
import Logo from 'assets/images/logo-nha-xinh-moi-200422.png';
import NhaXinhPhongKhachHienDai from 'assets/images/nha-xinh-phong-khach-1.jpg';
import NhaXinhPhongKhachHienDai1200x800 from 'assets/images/nha-xinh-phong-khach-hien-dai-poppy-1-1200x800.jpg';
import NhaXinhPhongKhachHienDai600x400 from 'assets/images/nha-xinh-phong-khach-hien-dai-poppy-1-600x400.jpg';
import NhaXinhPhongKhachHienDai311021 from 'assets/images/nha-xinh-phong-khach-hien-dai-poppy-311021.jpg';

import Wishlist from 'components/Wishlist/Wishlist';
import Navbar from 'components/Navbar/Navbar';
import LoginForm from 'components/LoginForm/LoginForm';
import Cart from 'components/Cart/Cart';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css';

function Header() {
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.Wishlist?.wishlist?.length);
  const cartCount = useSelector((state) => state.Cart?.cart?.length);

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(actionLogout());
    setIsLoggedIn(false);
  };

  const updateLoginStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  };

  const validation = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log('Search value submitted:', values.search);

      resetForm();
    },
  });

  useEffect(() => {
    updateLoginStatus();
    dispatch(actionGetUserWishlist());
    dispatch(actionGetCart());
  }, []);

  return (
    <header id="header" className="header has-sticky sticky-jump">
      <div className="header-wrapper">
        <div id="top-bar" className="header-top hide-for-sticky">
          <div className="flex-row container">
            <div className="flex-col hide-for-medium flex-left">
              <ul className="nav nav-left medium-nav-center nav-small  nav-">
                <div className="lang">
                  <i className="image-icon">
                    <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="Tiếng Việt" data-lazy-src={VIFlag} />
                    <noscript><img width="18" height="12" src="wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png" alt="Tiếng Việt" /></noscript>
                  </i>
                  {' '}
                  <a href="index.html" hrefLang="vi" className="curent_lang"> vn</a>
                  <a href="index9ed2.html?lang=en" hrefLang="en"> en</a>
                </div>
                <li className="html custom html_topbar_left">
                  <p className="hotline">
                    <a href="tel:1800 7200">
                      <i className="fas fa-phone-volume" />
                      {' '}
                      1800 7200
                    </a>
                  </p>
                </li>
                <li id="menu-item-594" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-594 menu-item-design-default"><a href="/gioi-thieu" className="nav-top-link">Giới thiệu</a></li>
                <li id="menu-item-573" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-573 menu-item-design-default"><a href="/khuyen-mai" className="nav-top-link">Khuyến mãi</a></li>
                <li id="menu-item-27798" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27798 menu-item-design-default"><a href="/danh-muc/giam-gia-dac-biet" className="nav-top-link">Giảm giá đặc biệt</a></li>
              </ul>
            </div>

            <div className="flex-col hide-for-medium flex-center">
              <ul className="nav nav-center nav-small  nav-" />
            </div>

            <div className="flex-col hide-for-medium flex-right">
              <ul className="nav top-bar-nav nav-right nav-small  nav-">
                <li className="header-wishlist-icon">
                  <a
                    href="/"
                    data-open="#overlay-right-sidebar"
                    data-pos="right"
                    data-bg="main-menu-overlay"
                    data-color=""
                    className="is-small wishlist-link"
                    aria-label="Wishlist"
                    aria-controls="overlay-right-sidebar"
                    aria-expanded="false"
                  >
                    <i
                      className="wishlist-icon icon-heart-o"
                      data-icon-label={wishlistCount > 0 ? wishlistCount : null}
                    />
                  </a>
                </li>
                <li className="cart-item has-icon">
                  <a href="/gio-hang" className="header-cart-link off-canvas-toggle nav-top-link is-small" data-open="#cart-popup" data-class="off-canvas-cart" title="Cart" data-pos="right">
                    <span
                      className="image-icon header-cart-icon"
                      data-icon-label={cartCount > 0 ? cartCount : null}
                    >
                      <img width="20" height="20" className="cart-img-icon" alt="Cart" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src={ICShopping} />
                      <noscript><img width="20" height="20" className="cart-img-icon" alt="Cart" src={ICShopping} /></noscript>
                    </span>
                  </a>

                  <Cart />
                </li>

                {isLoggedIn ? (
                  <li>
                    <a
                      title="Tài khoản của tôi"
                      onClick={toggleDropdown}
                    >
                      <span className="header-account-title">
                        Tài khoản của tôi
                      </span>

                      <i className="icon-user" />
                    </a>

                    {isOpen && (
                    <ul className="di">
                      <li>
                        <a href="https://nhaxinh.com/tai-khoan/edit-account/">Thông tin của tôi</a>
                      </li>
                      <li>
                        <a href="https://nhaxinh.com/tai-khoan/orders/">Đơn hàng</a>
                      </li>
                      <li>
                        <a href="https://nhaxinh.com/tai-khoan/recently-viewed-products/">Sản phẩm vừa xem</a>
                      </li>
                      <li>
                        <a href="https://nhaxinh.com/tai-khoan/wishlist/?wishlist-action">Wishlist</a>
                      </li>
                      <li>
                        <a onClick={handleLogout}>Đăng xuất</a>
                      </li>
                    </ul>
                    )}
                  </li>
                ) : (
                  <li className="account-item has-icon">
                    <a
                      href="/tai-khoan"
                      className="nav-top-link nav-top-not-logged-in is-small"
                    >
                      <span>
                        Đăng nhập
                        {' '}
                        <i className="icon-user" />
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex-col show-for-medium flex-grow">
              <ul className="nav nav-center nav-small mobile-nav  nav-">
                <li className="html custom html_topbar_left">
                  <p className="hotline">
                    <a href="tel:1800 7200">
                      <i className="fas fa-phone-volume" />
                      {' '}
                      1800 7200
                    </a>
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div id="masthead" className="header-main ">
          <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
            <div id="menu-icon" className="flex-col menu-icon">
              <div className="nav-icon has-icon menu_bar desktop">
                <a href="/" data-open="#product-categories-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" className="is-small" aria-label="Menu" aria-controls="product-categories-menu" aria-expanded="false">
                  <img width="30" height="22" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2022'%3E%3C/svg%3E" alt="Menu bar" data-lazy-src={MenuBar} />
                  <noscript><img width="30" height="22" src="wp-content/themes/flatsome-child/assets/images/menu-bar.png" alt="Menu bar" /></noscript>
                </a>
              </div>

              <div className="nav-icon has-icon menu_bar mobile">
                <a href="/" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" className="is-small" aria-label="Menu" aria-controls="main-menu" aria-expanded="false">
                  <img width="30" height="22" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2022'%3E%3C/svg%3E" alt="Menu bar" data-lazy-src={MenuBar} />
                  <noscript><img width="30" height="22" src="wp-content/themes/flatsome-child/assets/images/menu-bar.png" alt="Menu bar" /></noscript>
                </a>
              </div>
            </div>
            <div id="logo" className="flex-col logo">
              <a href="/" title="Nội thất Nhà Xinh - Đồ gỗ nội thất">
                <img width="169" height="90" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20169%2090'%3E%3C/svg%3E" className="header_logo header-logo" alt="Nội thất Nhà Xinh" data-lazy-src={Logo} />
                <noscript><img width="169" height="90" src="wp-content/uploads/2022/04/logo-nha-xinh-moi-200422.png" className="header_logo header-logo" alt="Nội thất Nhà Xinh" /></noscript>
                <img width="169" height="90" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20169%2090'%3E%3C/svg%3E" className="header-logo-dark" alt="Nội thất Nhà Xinh" data-lazy-src={Logo} />
                <noscript><img width="169" height="90" src="wp-content/uploads/2022/04/logo-nha-xinh-moi-200422.png" className="header-logo-dark" alt="Nội thất Nhà Xinh" /></noscript>
              </a>
            </div>

            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left ">
                <div className="nav-icon has-icon menu_bar desktop">
                  <a href="/" data-open="#product-categories-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" className="is-small" aria-label="Menu" aria-controls="product-categories-menu" aria-expanded="false">
                    <img width="30" height="22" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2022'%3E%3C/svg%3E" alt="Menu bar" data-lazy-src={MenuBar} />
                    <noscript><img width="30" height="22" src="wp-content/themes/flatsome-child/assets/images/menu-bar.png" alt="Menu bar" /></noscript>
                  </a>
                </div>

                <div className="nav-icon has-icon menu_bar mobile">
                  <a href="/" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" className="is-small" aria-label="Menu" aria-controls="main-menu" aria-expanded="false">
                    <img width="30" height="22" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2022'%3E%3C/svg%3E" alt="Menu bar" data-lazy-src={MenuBar} />
                    <noscript><img width="30" height="22" src="wp-content/themes/flatsome-child/assets/images/menu-bar.png" alt="Menu bar" /></noscript>
                  </a>
                </div>
              </ul>
            </div>

            <div className="flex-col hide-for-medium flex-left
            flex-grow"
            >
              <ul className="header-nav header-nav-main nav nav-left  nav-size-medium nav-uppercase">
                <li id="menu-item-287" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-287 menu-item-design-container-width menu-item-has-block has-dropdown">
                  <a href="/cua-hang" className="nav-top-link">
                    Sản phẩm
                    <i className="icon-angle-down" />
                  </a>
                  <div className="sub-menu nav-dropdown">
                    <section className="section" id="section_917526953">
                      <div className="bg section-bg fill bg-fill  bg-loaded" />

                      <div className="section-content relative">
                        <div className="row" id="row-1427509508">
                          <div id="col-613881319" className="col medium-9 small-12 large-9">
                            <div className="col-inner">
                              <div className="row" id="row-1171157161">
                                <div id="col-267792164" className="col medium-2 small-6 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/sofa">
                                          <span className="ux-menu-link__text">
                                            Sofa
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/sofa-goc">
                                          <span className="ux-menu-link__text">
                                            Sofa góc
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ghe-thu-gian">
                                          <span className="ux-menu-link__text">
                                            Ghế thư giãn
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/armchair">
                                          <span className="ux-menu-link__text">
                                            Armchair
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ghe-dai-don">
                                          <span className="ux-menu-link__text">
                                            Ghế dài &amp; đôn
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ban-ben">
                                          <span className="ux-menu-link__text">
                                            Bàn bên
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ban-nuoc">
                                          <span className="ux-menu-link__text">
                                            Bàn nước
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ban-console">
                                          <span className="ux-menu-link__text">
                                            Bàn Console
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/tu-tivi">
                                          <span className="ux-menu-link__text">
                                            Tủ tivi
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/ke-phong-khach">
                                          <span className="ux-menu-link__text">
                                            Kệ trưng bày
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-khach/tu-giay">
                                          <span className="ux-menu-link__text">
                                            Tủ giày
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div id="col-617467414" className="col medium-2 small-6 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-an/ban-an">
                                          <span className="ux-menu-link__text">
                                            Bàn ăn
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-an/ghe-an">
                                          <span className="ux-menu-link__text">
                                            Ghế ăn
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-an/ghe-bar">
                                          <span className="ux-menu-link__text">
                                            Ghế Bar
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-an/tu-ly">
                                          <span className="ux-menu-link__text">
                                            Tủ ly
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-an/xe-day">
                                          <span className="ux-menu-link__text">
                                            Xe đẩy
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/bep/tu-bep">
                                          <span className="ux-menu-link__text">
                                            Tủ bếp
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/bep/phu-kien-bep">
                                          <span className="ux-menu-link__text">
                                            Thiết bị bếp
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div id="col-734556994" className="col medium-2 small-6 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/giuong">
                                          <span className="ux-menu-link__text">
                                            Giường ngủ
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/ban-dau-giuong">
                                          <span className="ux-menu-link__text">
                                            Bàn đầu giường
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/ban-trang-diem">
                                          <span className="ux-menu-link__text">
                                            Bàn trang điểm
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/tu-ao">
                                          <span className="ux-menu-link__text">
                                            Tủ áo
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/tu-am-tuong">
                                          <span className="ux-menu-link__text">
                                            Tủ âm tường
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/tu-hoc-keo">
                                          <span className="ux-menu-link__text">
                                            Tủ hộc kéo
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-ngu/nem">
                                          <span className="ux-menu-link__text">
                                            Nệm
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div id="col-1385386632" className="col medium-2 small-6 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-lam-viec/ban-lam-viec">
                                          <span className="ux-menu-link__text">
                                            Bàn làm việc
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-lam-viec/ghe-phong-lam-viec">
                                          <span className="ux-menu-link__text">
                                            Ghế làm việc
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/phong-lam-viec/ke-sach">
                                          <span className="ux-menu-link__text">
                                            Kệ sách
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/ngoai-that/ban-ngoai-troi">
                                          <span className="ux-menu-link__text">
                                            Bàn ngoài trời
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/ngoai-that/ghe-ngoai-troi">
                                          <span className="ux-menu-link__text">
                                            Ghế ngoài trời
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div id="col-1570284053" className="col medium-2 small-6 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/den">
                                          <span className="ux-menu-link__text">
                                            Đèn trang trí
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/tham">
                                          <span className="ux-menu-link__text">
                                            Thảm trang trí
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="hang-trang-tri-michael-aram">
                                          <span className="ux-menu-link__text">
                                            Michael Aram
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/do-trang-tri-noel">
                                          <span className="ux-menu-link__text">
                                            Đồ trang trí noel
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/binh-trang-tri">
                                          <span className="ux-menu-link__text">
                                            Bình trang trí
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/tranh">
                                          <span className="ux-menu-link__text">
                                            Tranh
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/khung-guong">
                                          <span className="ux-menu-link__text">
                                            Gương
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/hoa-cay">
                                          <span className="ux-menu-link__text">
                                            Hoa và cây
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/dong-ho-hang-trang-tri">
                                          <span className="ux-menu-link__text">
                                            Đồng hồ
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/khung-hinh">
                                          <span className="ux-menu-link__text">
                                            Khung hình
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/tuong-trang-tri">
                                          <span className="ux-menu-link__text">
                                            Tượng trang trí
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/goi-va-thu-bong">
                                          <span className="ux-menu-link__text">
                                            Gối và thú bông
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/nen">
                                          <span className="ux-menu-link__text">
                                            Nến &amp; chân nến
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div id="col-2031353246" className="col medium-2 small-12 large-2">
                                  <div className="col-inner">
                                    <div className="ux-menu stack stack-col justify-start ux-menu--divider-solid">
                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/dung-cu-bep">
                                          <span className="ux-menu-link__text">
                                            Dụng cụ bếp
                                          </span>
                                        </a>
                                      </div>

                                      <div className="ux-menu-link flex menu-item">
                                        <a className="ux-menu-link__link flex" href="/danh-muc/hang-trang-tri/hang-trang-tri-khac">
                                          <span className="ux-menu-link__text">
                                            Hàng trang trí khác
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="col-40186864" className="col medium-3 small-12 large-3">
                            <div className="col-inner">
                              <div className="img has-hover img_menu_mega x md-x lg-x y md-y lg-y" id="image_1349304432">
                                <div className="img-inner dark">
                                  <img width="1020" height="680" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201020%20680'%3E%3C/svg%3E" className="attachment-large size-large" alt="phòng khách hiện đại poppy" decoding="async" data-lazy-srcset={`${NhaXinhPhongKhachHienDai1200x800} 1200w, ${NhaXinhPhongKhachHienDai311021} 300w, ${NhaXinhPhongKhachHienDai600x400} 600w, ${NhaXinhPhongKhachHienDai} 1500w`} data-lazy-sizes="(max-width: 1020px) 100vw, 1020px" data-lazy-src={NhaXinhPhongKhachHienDai1200x800} />
                                  <noscript><img width="1020" height="680" src="wp-content/uploads/2021/10/nha-xinh-phong-khach-hien-dai-poppy-1-1200x800.jpg" className="attachment-large size-large" alt="phòng khách hiện đại poppy" decoding="async" srcSet={`${NhaXinhPhongKhachHienDai1200x800} 1200w, ${NhaXinhPhongKhachHienDai311021} 300w, ${NhaXinhPhongKhachHienDai600x400} 600w, ${NhaXinhPhongKhachHienDai} 1500w" sizes="(max-width: 1020px) 100vw, 1020px`} /></noscript>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </li>

                <li id="menu-item-8010" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8010 menu-item-design-default has-dropdown">
                  <a href="/phong-khach" className="nav-top-link">
                    Phòng
                    <i className="icon-angle-down" />
                  </a>

                  <ul className="sub-menu nav-dropdown nav-dropdown-default">
                    <li id="menu-item-8199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8199"><a href="/phong-khach">Phòng khách</a></li>
                    <li id="menu-item-24423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24423"><a href="/phong-an">Phòng ăn</a></li>
                    <li id="menu-item-24304" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24304"><a href="/phong-ngu">Phòng ngủ</a></li>
                    <li id="menu-item-27857" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27857"><a href="/danh-muc/phong-lam-viec">Phòng làm việc</a></li>
                    <li id="menu-item-37292" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-37292"><a href="/danh-muc/bep/tu-bep">Tủ bếp</a></li>
                    <li id="menu-item-27856" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27856"><a href="/danh-muc/hang-trang-tri">Hàng trang trí</a></li>
                    <li id="menu-item-27855" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27855"><a href="/danh-muc/ngoai-that">Ngoại thất</a></li>
                  </ul>
                </li>

                <li id="menu-item-24226" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24226 menu-item-design-default"><a href="bo-suu-tap" className="nav-top-link">Bộ sưu tập</a></li>
                <li id="menu-item-290" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-290 menu-item-design-default"><a href="thiet-ke-noi-that" className="nav-top-link">Thiết kế nội thất</a></li>
                <li id="menu-item-288" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-288 menu-item-design-default"><a href="showroom-ao" className="nav-top-link">Cửa hàng 360 độ</a></li>
                <li id="menu-item-27825" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27825 menu-item-design-default"><a href="cam-hung-nha-xinh-y-tuong" className="nav-top-link">Góc cảm hứng</a></li>
              </ul>
            </div>

            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right  nav-size-medium nav-uppercase">
                <li className="header-search-form search-form html relative has-icon">
                  <div className="header-search-form-wrapper">
                    <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                      <form role="search" className="searchform" onSubmit={validation.handleSubmit}>
                        <div className="flex-row relative">
                          <div className="flex-col flex-grow position-relative">
                            <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-0">Search for:</label>
                            <div className="search-container">
                              <input
                                type="search"
                                id="woocommerce-product-search-field-0"
                                className="search-field mb-0"
                                placeholder="Tìm sản phẩm"
                                name="search"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.search}
                              />
                              <button type="submit" value="Search" className="ux-search-submit submit-button secondary button icon mb-0" aria-label="Submit">
                                <i className="icon-search" />
                              </button>
                            </div>
                            <input type="hidden" name="post_type" value="product" />
                            <input type="hidden" name="lang" value="vi" />
                          </div>
                        </div>
                        <div className="live-search-results text-left z-top" />
                        <input type="hidden" name="lang" value="vi" />
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right huan ">
                <li className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                  <div className="header-button">
                    <a href="/" aria-label="Search" className="icon button round is-outline is-small"><i className="icon-search" /></a>
                  </div>

                  <ul className="nav-dropdown nav-dropdown-default">
                    <li className="header-search-form search-form html relative has-icon">
                      <div className="header-search-form-wrapper">
                        <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                          <form role="search" method="get" className="searchform" action="https://nhaxinh.com/">
                            <div className="flex-row relative">
                              <div className="flex-col flex-grow">
                                <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-1">Search for:</label>
                                <input type="search" id="woocommerce-product-search-field-1" className="search-field mb-0" placeholder="Tìm sản phẩm" value="" name="s" />
                                <input type="hidden" name="post_type" value="product" />
                                <input type="hidden" name="lang" value="vi" />
                              </div>
                              <div className="flex-col">
                                <button type="submit" value="Search" className="ux-search-submit submit-button secondary button icon mb-0" aria-label="Submit">
                                  <i className="icon-search" />
                                </button>
                              </div>
                            </div>
                            <div className="live-search-results text-left z-top" />
                            <input type="hidden" name="lang" value="vi" />
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="html custom html_topbar_right"><a href="he-thong-cua-hang" aria-label="home"><i className="fal fa-map-marker-alt" /></a></li>
                <li className="cart-item has-icon">
                  <a href="gio-hang" className="header-cart-link off-canvas-toggle nav-top-link is-small" data-open="#cart-popup" data-class="off-canvas-cart" title="Cart" data-pos="right">
                    <span className="image-icon header-cart-icon" data-icon-label="0">
                      <img width="20" height="20" className="cart-img-icon" alt="Cart" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src={ICShopping} />
                      <noscript><img width="20" height="20" className="cart-img-icon" alt="Cart" src="wp-content/uploads/2021/09/ic-shopping.png" /></noscript>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container"><div className="top-divider full-width" /></div>
        </div>

        <div className="header-bg-container fill">
          <div className="header-bg-image fill" />
          <div className="header-bg-color fill" />
        </div>
      </div>

      <Wishlist />
      <Navbar />
      <LoginForm />
    </header>
  );
}

export default Header;
