import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';

import MenuWithToggle, { MenuWithToggleItem } from 'components/MenuWithToggle/MenuWithToggle';

import './index.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 40,
    backgroundColor: 'rgba(11,11,11,0.5)',
  },
  content: {
    backgroundColor: 'white',
    width: '400px',
    height: '100vh',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '0',
    position: 'relative',
    inset: '0 0 auto',
  },
};

function NavbarModal({
  isNavbarModalOpen,
  closeNavbarModal,
}) {
  return (
    <CSSTransition
      in={isNavbarModalOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <Modal
        isOpen={isNavbarModalOpen}
        onRequestClose={closeNavbarModal}
        style={customStyles}
      >
        {/* <div id="product-categories-menu" className="mobile-sidebar no-scrollbar mfp-hide"> */}
        <div id="product-categories-menu" className="mobile-sidebar no-scrollbar">
          <div className="sidebar-menu no-scrollbar ">
            <div className="product-categories-menu-containter">
              <ul id="menu-danh-muc-sp" className="menu">
                <MenuWithToggle title="Sofa và Armchair">
                  <MenuWithToggleItem id="menu-item-3785" href="danh-muc/phong-khach/sofa/index.html" text="Sofa" />
                  <MenuWithToggleItem id="menu-item-3786" href="danh-muc/phong-khach/sofa-goc/index.html" text="Sofa góc" />
                  <MenuWithToggleItem id="menu-item-24359" href="danh-muc/phong-khach/armchair/index.html" text="Armchair" />
                  <MenuWithToggleItem id="menu-item-3377" href="danh-muc/phong-khach/ghe-dai-don/index.html" text="Ghế dài & đôn" />
                  <MenuWithToggleItem id="menu-item-3378" href="danh-muc/phong-khach/ghe-thu-gian/index.html" text="Ghế thư giãn" />
                </MenuWithToggle>

                <MenuWithToggle title="Bàn">
                  <MenuWithToggleItem id="menu-item-24417" href="danh-muc/phong-khach/ban-nuoc/index.html" text="Bàn nước" />
                  <MenuWithToggleItem id="menu-item-3362" href="danh-muc/phong-an/ban-an/index.html" text="Bàn ăn" />
                  <MenuWithToggleItem id="menu-item-3372" href="danh-muc/phong-khach/ban-ben/index.html" text="Bàn bên" />
                  <MenuWithToggleItem id="menu-item-3387" href="danh-muc/phong-lam-viec/ban-lam-viec/index.html" text="Bàn làm việc" />
                  <MenuWithToggleItem id="menu-item-3382" href="danh-muc/phong-ngu/ban-trang-diem/index.html" text="Bàn trang điểm" />
                </MenuWithToggle>

                <MenuWithToggle title="Ghế">
                  <MenuWithToggleItem id="menu-item-28024" href="danh-muc/phong-an/ghe-an/index.html" text="Ghế ăn" />
                  <MenuWithToggleItem id="menu-item-3365" href="danh-muc/phong-an/ghe-bar/index.html" text="Ghế bar" />
                  <MenuWithToggleItem id="menu-item-3388" href="danh-muc/phong-lam-viec/ghe-phong-lam-viec/index.html" text="Ghế làm việc" />
                </MenuWithToggle>

                <MenuWithToggle title="Giường ngủ">
                  <MenuWithToggleItem id="menu-item-28345" href="danh-muc/phong-ngu/giuong/index.html" text="Giường" />
                  <MenuWithToggleItem id="menu-item-3381" href="danh-muc/phong-ngu/ban-dau-giuong/index.html" text="Bàn đầu giường" />
                  <MenuWithToggleItem id="menu-item-3795" href="danh-muc/phong-ngu/nem/index.html" text="Nệm" />
                </MenuWithToggle>

                <MenuWithToggle title="Tủ và kệ">
                  <MenuWithToggleItem id="menu-item-3790" href="danh-muc/phong-khach/tu-tivi/index.html" text="Tủ tivi" />
                  <MenuWithToggleItem id="menu-item-3776" href="danh-muc/outlet/tu-trung-bay/index.html" text="Tủ trưng bày" />
                  <MenuWithToggleItem id="menu-item-3779" href="danh-muc/phong-an/tu-ly/index.html" text="Tủ ly" />
                  <MenuWithToggleItem id="menu-item-3780" href="danh-muc/phong-an/tu-ruou/index.html" text="Tủ rượu" />
                  <MenuWithToggleItem id="menu-item-3781" href="danh-muc/phong-an/xe-day/index.html" text="Xe đẩy" />
                  <MenuWithToggleItem id="menu-item-3798" href="danh-muc/phong-ngu/tu-hoc-keo/index.html" text="Tủ hộc kéo" />
                  <MenuWithToggleItem id="menu-item-3797" href="danh-muc/phong-ngu/tu-ao/index.html" text="Tủ áo" />
                  <MenuWithToggleItem id="menu-item-3796" href="danh-muc/phong-ngu/tu-am-tuong/index.html" text="Tủ âm tường" />
                  <MenuWithToggleItem id="menu-item-3788" href="danh-muc/phong-khach/tu-giay/index.html" text="Tủ giày" />
                  <MenuWithToggleItem id="menu-item-3380" href="danh-muc/phong-khach/ke-phong-khach/index.html" text="Kệ phòng khách" />
                </MenuWithToggle>

                <MenuWithToggle title="Bếp">
                  <MenuWithToggleItem id="menu-item-3813" href="danh-muc/bep/tu-bep/index.html" text="Tủ bếp" />
                  <MenuWithToggleItem id="menu-item-3810" href="danh-muc/bep/phu-kien-bep/index.html" text="Phụ kiện bếp" />
                  <MenuWithToggleItem id="menu-item-3349" href="danh-muc/bep/dao-bep/index.html" text="Đảo bếp" />
                  <MenuWithToggleItem id="menu-item-3811" href="danh-muc/bep/quay-bar/index.html" text="Quầy bar" />
                </MenuWithToggle>

                <MenuWithToggle title="Hàng trang trí">
                  <MenuWithToggleItem id="menu-item-3353" href="danh-muc/hang-trang-tri/binh-trang-tri/index.html" text="Bình trang trí" />
                  <MenuWithToggleItem id="menu-item-3354" href="danh-muc/hang-trang-tri/den/index.html" text="Đèn trang trí" />
                  <MenuWithToggleItem id="menu-item-3355" href="danh-muc/hang-trang-tri/do-trang-tri-noel/index.html" text="Đồ trang trí Noel" />
                  <MenuWithToggleItem id="menu-item-3356" href="danh-muc/hang-trang-tri/dong-ho-hang-trang-tri/index.html" text="Đồng hồ" />
                  <MenuWithToggleItem id="menu-item-3357" href="danh-muc/hang-trang-tri/dung-cu-bep/index.html" text="Dụng cụ bếp" />
                  <MenuWithToggleItem id="menu-item-3358" href="danh-muc/hang-trang-tri/goi-va-thu-bong/index.html" text="Gối và thú bông" />
                  <MenuWithToggleItem id="menu-item-3359" href="danh-muc/hang-trang-tri/hang-trang-tri-khac/index.html" text="Hàng trang trí khác" />
                  <MenuWithToggleItem id="menu-item-3360" href="danh-muc/hang-trang-tri/hoa-cay/index.html" text="Hoa & Cây" />
                  <MenuWithToggleItem id="menu-item-3800" href="danh-muc/hang-trang-tri/khung-guong/index.html" text="Khung gương" />
                  <MenuWithToggleItem id="menu-item-3801" href="danh-muc/hang-trang-tri/khung-hinh/index.html" text="Khung hình" />
                  <MenuWithToggleItem id="menu-item-3802" href="danh-muc/hang-trang-tri/nem-hang-trang-tri/index.html" text="Nệm" />
                  <MenuWithToggleItem id="menu-item-3804" href="danh-muc/hang-trang-tri/san-pham-khac/index.html" text="Sản phẩm khác" />
                  <MenuWithToggleItem id="menu-item-3805" href="danh-muc/hang-trang-tri/tham/index.html" text="Thảm" />
                  <MenuWithToggleItem id="menu-item-3794" href="danh-muc/phong-ngu/men/index.html" text="Mền" />
                  <MenuWithToggleItem id="menu-item-3806" href="danh-muc/hang-trang-tri/tranh/index.html" text="Tranh" />
                  <MenuWithToggleItem id="menu-item-3807" href="danh-muc/hang-trang-tri/tuong-trang-tri/index.html" text="Tượng trang trí" />
                </MenuWithToggle>

                <MenuWithToggle title="Ngoại thất">
                  <MenuWithToggleItem id="menu-item-3391" href="danh-muc/ngoai-that/ban-ngoai-troi/index.html" text="Bàn ngoài trời" />
                  <MenuWithToggleItem id="menu-item-3393" href="danh-muc/ngoai-that/ghe-ngoai-troi/index.html" text="Ghế ngoài trời" />
                </MenuWithToggle>

              </ul>
            </div>
          </div>
        </div>

        <div id="main-menu" className="mobile-sidebar no-scrollbar mfp-hide">
          <div className="sidebar-menu no-scrollbar ">
            <ul className="nav nav-sidebar nav-vertical nav-uppercase">
              <li id="menu-item-24092" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24092"><a href="cua-hang/index.html">Sản phẩm</a></li>
              <li id="menu-item-24210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24210">
                <a href="/">Sofa và Armchair</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24155" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24155"><a href="danh-muc/phong-khach/sofa/index.html">Sofa</a></li>
                  <li id="menu-item-24156" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24156"><a href="danh-muc/phong-khach/sofa-goc/index.html">Sofa góc</a></li>
                  <li id="menu-item-24360" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24360"><a href="danh-muc/phong-khach/armchair/index.html">Armchair</a></li>
                  <li id="menu-item-24126" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24126"><a href="danh-muc/phong-khach/ghe-thu-gian/index.html">Ghế thư giãn</a></li>
                  <li id="menu-item-24125" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24125"><a href="danh-muc/phong-khach/ghe-dai-don/index.html">Ghế dài &amp; đôn</a></li>
                </ul>
              </li>
              <li id="menu-item-24212" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24212">
                <a href="/">Bàn</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-28010" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28010"><a href="danh-muc/phong-an/ban-an/index.html">Bàn ăn</a></li>
                  <li id="menu-item-24415" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24415"><a href="danh-muc/phong-khach/ban-nuoc/index.html">Bàn nước</a></li>
                  <li id="menu-item-24120" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24120"><a href="danh-muc/phong-khach/ban-ben/index.html">Bàn bên</a></li>
                  <li id="menu-item-24135" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24135"><a href="danh-muc/phong-lam-viec/ban-lam-viec/index.html">Bàn làm việc</a></li>
                  <li id="menu-item-24130" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24130"><a href="danh-muc/phong-ngu/ban-trang-diem/index.html">Bàn trang điểm</a></li>
                  <li id="menu-item-30268" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-30268"><a href="danh-muc/phong-khach/ban-console/index.html">Bàn console</a></li>
                </ul>
              </li>
              <li id="menu-item-24147" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24147">
                <a href="danh-muc/phong-an/index.html">Ghế</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24111" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24111"><a href="danh-muc/phong-an/ghe-an/index.html">Ghế ăn</a></li>
                  <li id="menu-item-24113" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24113"><a href="danh-muc/phong-an/ghe-bar/index.html">Ghế bar</a></li>
                  <li id="menu-item-24151" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24151"><a href="danh-muc/phong-an/xe-day/index.html">Xe đẩy</a></li>
                </ul>
              </li>
              <li id="menu-item-24209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24209">
                <a href="/">Giường ngủ</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24775" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24775"><a href="danh-muc/phong-ngu/giuong/index.html">Giường</a></li>
                  <li id="menu-item-24129" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24129"><a href="danh-muc/phong-ngu/ban-dau-giuong/index.html">Bàn đầu giường</a></li>
                  <li id="menu-item-24164" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24164"><a href="danh-muc/phong-ngu/nem/index.html">Nệm</a></li>
                </ul>
              </li>
              <li id="menu-item-24211" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24211">
                <a href="/">Tủ và Kệ</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24160" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24160"><a href="danh-muc/phong-khach/tu-tivi/index.html">Tủ tivi</a></li>
                  <li id="menu-item-24158" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24158"><a href="danh-muc/phong-khach/tu-giay/index.html">Tủ giày</a></li>
                  <li id="menu-item-24167" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24167"><a href="danh-muc/phong-ngu/tu-hoc-keo/index.html">Tủ hộc kéo</a></li>
                  <li id="menu-item-24159" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24159"><a href="danh-muc/phong-khach/tu-thap/index.html">Tủ thấp</a></li>
                  <li id="menu-item-24149" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24149"><a href="danh-muc/phong-an/tu-ly/index.html">Tủ ly</a></li>
                  <li id="menu-item-24150" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24150"><a href="danh-muc/phong-an/tu-ruou/index.html">Tủ rượu</a></li>
                  <li id="menu-item-24128" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24128"><a href="danh-muc/phong-khach/ke-phong-khach/index.html">Kệ phòng khách</a></li>
                  <li id="menu-item-39704" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-39704"><a href="danh-muc/phong-lam-viec/ke-sach/index.html">Kệ sách</a></li>
                  <li id="menu-item-24166" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24166"><a href="danh-muc/phong-ngu/tu-ao/index.html">Tủ áo</a></li>
                  <li id="menu-item-24165" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24165"><a href="danh-muc/phong-ngu/tu-am-tuong/index.html">Tủ âm tường</a></li>
                </ul>
              </li>
              <li id="menu-item-24093" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24093">
                <a href="danh-muc/bep/index.html">Bếp</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24182" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24182"><a href="danh-muc/bep/tu-bep/index.html">Tủ bếp</a></li>
                  <li id="menu-item-24097" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24097"><a href="danh-muc/bep/dao-bep/index.html">Đảo bếp</a></li>
                  <li id="menu-item-24180" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24180"><a href="danh-muc/bep/quay-bar/index.html">Quầy bar</a></li>
                  <li id="menu-item-24179" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24179"><a href="danh-muc/bep/phu-kien-bep/index.html">Phụ kiện bếp</a></li>
                </ul>
              </li>
              <li id="menu-item-24099" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24099">
                <a href="danh-muc/hang-trang-tri/index.html">Hàng trang trí</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24102" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24102"><a href="danh-muc/hang-trang-tri/den/index.html">Đèn trang trí</a></li>
                  <li id="menu-item-24174" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24174"><a href="danh-muc/hang-trang-tri/tham/index.html">Thảm</a></li>
                  <li id="menu-item-43877" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-43877"><a href="danh-muc/hang-trang-tri/do-trang-tri-noel/index.html">Đồ trang trí Noel</a></li>
                  <li id="menu-item-36693" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36693"><a href="hang-trang-tri-michael-aram/index.html">Michael Aram</a></li>
                  <li id="menu-item-24101" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24101"><a href="danh-muc/hang-trang-tri/binh-trang-tri/index.html">Bình trang trí</a></li>
                  <li id="menu-item-24104" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24104"><a href="danh-muc/hang-trang-tri/dong-ho-hang-trang-tri/index.html">Đồng hồ</a></li>
                  <li id="menu-item-24106" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24106"><a href="danh-muc/hang-trang-tri/goi-va-thu-bong/index.html">Gối và thú bông</a></li>
                  <li id="menu-item-24107" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24107"><a href="danh-muc/hang-trang-tri/hang-trang-tri-khac/index.html">Hàng trang trí khác</a></li>
                  <li id="menu-item-24108" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24108"><a href="danh-muc/hang-trang-tri/hoa-cay/index.html">Hoa &amp; Cây</a></li>
                  <li id="menu-item-24169" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24169"><a href="danh-muc/hang-trang-tri/khung-guong/index.html">Khung gương</a></li>
                  <li id="menu-item-24170" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24170"><a href="danh-muc/hang-trang-tri/khung-hinh/index.html">Khung hình</a></li>
                  <li id="menu-item-24172" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24172"><a href="danh-muc/hang-trang-tri/nen/index.html">Nến</a></li>
                  <li id="menu-item-24175" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24175"><a href="danh-muc/hang-trang-tri/tranh/index.html">Tranh</a></li>
                  <li id="menu-item-24176" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24176"><a href="danh-muc/hang-trang-tri/tuong-trang-tri/index.html">Tượng trang trí</a></li>
                  <li id="menu-item-24173" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24173"><a href="danh-muc/hang-trang-tri/san-pham-khac/index.html">Sản phẩm khác</a></li>
                </ul>
              </li>
              <li id="menu-item-24143" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24143">
                <a href="danh-muc/ngoai-that/index.html">Ngoại thất</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24141" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24141"><a href="danh-muc/ngoai-that/ghe-ngoai-troi/index.html">Ghế ngoài trời</a></li>
                  <li id="menu-item-24139" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24139"><a href="danh-muc/ngoai-that/ban-ngoai-troi/index.html">Bàn ngoài trời</a></li>
                </ul>
              </li>
              <li id="menu-item-24183" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24183">
                <a href="/">Phòng</a>
                <ul className="sub-menu nav-sidebar-ul children">
                  <li id="menu-item-24469" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24469"><a href="phong-khach/index.html">Phòng khách</a></li>
                  <li id="menu-item-27882" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27882"><a href="phong-an/index.html">Phòng ăn</a></li>
                  <li id="menu-item-27881" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27881"><a href="phong-ngu/index.html">Phòng ngủ</a></li>
                  <li id="menu-item-27883" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27883"><a href="danh-muc/phong-lam-viec/index.html">Phòng làm việc</a></li>
                </ul>
              </li>
              <li id="menu-item-30269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30269"><a href="he-thong-cua-hang/index.html">TÌM CỬA HÀNG</a></li>
              <li id="menu-item-51031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51031"><a href="khuyen-mai/index.html">Khuyến mãi</a></li>
              <li id="menu-item-51030" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-51030"><a href="danh-muc/giam-gia-dac-biet/index.html">Giảm giá đặc biệt</a></li>
              <li id="menu-item-24192" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24192"><a href="thiet-ke-noi-that/index.html">Thiết kế nội thất</a></li>
              <li id="menu-item-24229" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24229"><a href="bo-suu-tap/index.html">Bộ sưu tập</a></li>
              <li id="menu-item-24191" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24191"><a href="showroom-ao/index.html">Cửa hàng 360 độ</a></li>
              <li id="menu-item-27841" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27841"><a href="cam-hung-nha-xinh-y-tuong/index.html">Góc cảm hứng</a></li>
              <li>
                <a href="/">
                  Tiếng Việt
                  <i className="image-icon">
                    <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="Tiếng Việt" data-lazy-src="wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png" />
                    <noscript><img width="18" height="12" src="wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png" alt="Tiếng Việt" /></noscript>
                  </i>
                  {' '}

                </a>
                <ul className="children">
                  <li>
                    <a href="index.html" hrefLang="vi">
                      <i className="icon-image">
                        <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="Tiếng Việt" data-lazy-src="wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png" />
                        <noscript><img width="18" height="12" src="wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.png" alt="Tiếng Việt" /></noscript>
                      </i>
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a href="index9ed2.html?lang=en" hrefLang="en">
                      <i className="icon-image">
                        <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="English" data-lazy-src="wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" />
                        <noscript><img width="18" height="12" src="wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="English" /></noscript>
                      </i>
                      English
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </CSSTransition>
  );
}

NavbarModal.propTypes = {
  isNavbarModalOpen: PropTypes.bool.isRequired,
  closeNavbarModal: PropTypes.func.isRequired,
};

export default NavbarModal;
