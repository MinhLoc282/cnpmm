import React from 'react';
import { Link } from 'react-router-dom';

import VIFlag from 'assets/images/flags/vi.png';

function Navbar() {
  return (
    <>
      <div id="product-categories-menu" className="mobile-sidebar no-scrollbar mfp-hide">
        <div className="sidebar-menu no-scrollbar ">
          <div className="product-categories-menu-containter">
            <ul id="menu-danh-muc-sp" className="menu">
              <li id="menu-item-24213" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24213">
                <Link to="/">Sofa và Armchair</Link>
                <ul className="sub-menu">
                  <li id="menu-item-3785" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3785"><Link to="/danh-muc/phong-khach/sofa">Sofa</Link></li>
                  <li id="menu-item-3786" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3786"><Link to="/danh-muc/phong-khach/sofa-goc">Sofa góc</Link></li>
                  <li id="menu-item-24359" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24359"><Link to="/danh-muc/phong-khach/armchair">Armchair</Link></li>
                  <li id="menu-item-3377" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3377"><Link to="/danh-muc/phong-khach/ghe-dai-don">Ghế dài &amp; đôn</Link></li>
                  <li id="menu-item-3378" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3378"><Link to="/danh-muc/phong-khach/ghe-thu-gian">Ghế thư giãn</Link></li>
                </ul>
              </li>
              <li id="menu-item-24214" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24214">
                <Link to="/">Bàn</Link>
                <ul className="sub-menu">
                  <li id="menu-item-24417" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24417"><Link to="/danh-muc/phong-khach/ban-nuoc">Bàn nước</Link></li>
                  <li id="menu-item-3362" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3362"><Link to="/danh-muc/phong-an/ban-an">Bàn ăn</Link></li>
                  <li id="menu-item-3372" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3372"><Link to="/danh-muc/phong-khach/ban-ben">Bàn bên</Link></li>
                  <li id="menu-item-3387" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3387"><Link to="/danh-muc/phong-lam-viec/ban-lam-viec">Bàn làm việc</Link></li>
                  <li id="menu-item-3382" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3382"><Link to="/danh-muc/phong-ngu/ban-trang-diem">Bàn trang điểm</Link></li>
                </ul>
              </li>
              <li id="menu-item-28026" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28026">
                <Link to="/">Ghế</Link>
                <ul className="sub-menu">
                  <li id="menu-item-28024" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28024"><Link to="/danh-muc/phong-an/ghe-an">Ghế ăn</Link></li>
                  <li id="menu-item-3365" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3365"><Link to="/danh-muc/phong-an/ghe-bar">Ghế bar</Link></li>
                  <li id="menu-item-3388" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3388"><Link to="/danh-muc/phong-lam-viec/ghe-phong-lam-viec">Ghế làm việc</Link></li>
                </ul>
              </li>
              <li id="menu-item-28344" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28344">
                <Link to="/">Giường ngủ</Link>
                <ul className="sub-menu">
                  <li id="menu-item-28345" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28345"><Link to="/danh-muc/phong-ngu/giuong">Giường</Link></li>
                  <li id="menu-item-3381" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3381"><Link to="/danh-muc/phong-ngu/ban-dau-giuong">Bàn đầu giường</Link></li>
                  <li id="menu-item-3795" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3795"><Link to="/danh-muc/phong-ngu/nem">Nệm</Link></li>
                </ul>
              </li>
              <li id="menu-item-24217" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24217">
                <Link to="/">Tủ và kệ</Link>
                <ul className="sub-menu">
                  <li id="menu-item-3790" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3790"><Link to="/danh-muc/phong-khach/tu-tivi">Tủ tivi</Link></li>
                  <li id="menu-item-3776" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3776"><Link to="/danh-muc/outlet/tu-trung-bay">Tủ trưng bày</Link></li>
                  <li id="menu-item-3779" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3779"><Link to="/danh-muc/phong-an/tu-ly">Tủ ly</Link></li>
                  <li id="menu-item-3780" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3780"><Link to="/danh-muc/phong-an/tu-ruou">Tủ rượu</Link></li>
                  <li id="menu-item-3781" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3781"><Link to="/danh-muc/phong-an/xe-day">Xe đẩy</Link></li>
                  <li id="menu-item-3798" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3798"><Link to="/danh-muc/phong-ngu/tu-hoc-keo">Tủ hộc kéo</Link></li>
                  <li id="menu-item-3797" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3797"><Link to="/danh-muc/phong-ngu/tu-ao">Tủ áo</Link></li>
                  <li id="menu-item-3796" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3796"><Link to="/danh-muc/phong-ngu/tu-am-tuong">Tủ âm tường</Link></li>
                  <li id="menu-item-3788" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3788"><Link to="/danh-muc/phong-khach/tu-giay">Tủ giày</Link></li>
                  <li id="menu-item-3380" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3380"><Link to="/danh-muc/phong-khach/ke-phong-khach">Kệ phòng khách</Link></li>
                </ul>
              </li>
              <li id="menu-item-28027" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28027">
                <Link to="/">Bếp</Link>
                <ul className="sub-menu">
                  <li id="menu-item-3813" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3813"><Link to="/danh-muc/bep/tu-bep">Tủ bếp</Link></li>
                  <li id="menu-item-3810" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3810"><Link to="/danh-muc/bep/phu-kien-bep">Phụ kiện bếp</Link></li>
                  <li id="menu-item-3349" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3349"><Link to="/danh-muc/bep/dao-bep">Đảo bếp</Link></li>
                  <li id="menu-item-3811" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3811"><Link to="/danh-muc/bep/quay-bar">Quầy bar</Link></li>
                </ul>
              </li>
              <li id="menu-item-3351" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3351">
                <Link to="/danh-muc/hang-trang-tri">Hàng trang trí</Link>
                <ul className="sub-menu">
                  <li id="menu-item-3353" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3353"><Link to="/danh-muc/hang-trang-tri/binh-trang-tri">Bình trang trí</Link></li>
                  <li id="menu-item-3354" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3354"><Link to="/danh-muc/hang-trang-tri/den">Đèn trang trí</Link></li>
                  <li id="menu-item-3355" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3355"><Link to="/danh-muc/hang-trang-tri/do-trang-tri-noel">Đồ trang trí Noel</Link></li>
                  <li id="menu-item-3356" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3356"><Link to="/danh-muc/hang-trang-tri/dong-ho-hang-trang-tri">Đồng hồ</Link></li>
                  <li id="menu-item-3357" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3357"><Link to="/danh-muc/hang-trang-tri/dung-cu-bep">Dụng cụ bếp</Link></li>
                  <li id="menu-item-3358" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3358"><Link to="/danh-muc/hang-trang-tri/goi-va-thu-bong">Gối và thú bông</Link></li>
                  <li id="menu-item-3359" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3359"><Link to="/danh-muc/hang-trang-tri/hang-trang-tri-khac">Hàng trang trí khác</Link></li>
                  <li id="menu-item-3360" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3360"><Link to="/danh-muc/hang-trang-tri/hoa-cay">Hoa &amp; Cây</Link></li>
                  <li id="menu-item-3800" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3800"><Link to="/danh-muc/hang-trang-tri/khung-guong">Khung gương</Link></li>
                  <li id="menu-item-3801" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3801"><Link to="/danh-muc/hang-trang-tri/khung-hinh">Khung hình</Link></li>
                  <li id="menu-item-3802" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3802"><Link to="/danh-muc/hang-trang-tri/nem-hang-trang-tri">Nệm</Link></li>
                  <li id="menu-item-3804" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3804"><Link to="/danh-muc/hang-trang-tri/san-pham-khac">Sản phẩm khác</Link></li>
                  <li id="menu-item-3805" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3805"><Link to="/danh-muc/hang-trang-tri/tham">Thảm</Link></li>
                  <li id="menu-item-3794" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3794"><Link to="/danh-muc/phong-ngu/men">Mền</Link></li>
                  <li id="menu-item-3806" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3806"><Link to="/danh-muc/hang-trang-tri/tranh">Tranh</Link></li>
                  <li id="menu-item-3807" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3807"><Link to="/danh-muc/hang-trang-tri/tuong-trang-tri">Tượng trang trí</Link></li>
                </ul>
              </li>
              <li id="menu-item-3773" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3773">
                <Link to="/danh-muc/ngoai-that">Ngoại thất</Link>
                <ul className="sub-menu">
                  <li id="menu-item-3391" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3391"><Link to="/danh-muc/ngoai-that/ban-ngoai-troi">Bàn ngoài trời</Link></li>
                  <li id="menu-item-3393" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3393"><Link to="/danh-muc/ngoai-that/ghe-ngoai-troi">Ghế ngoài trời</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="main-menu" className="mobile-sidebar no-scrollbar mfp-hide">
        <div className="sidebar-menu no-scrollbar ">
          <ul className="nav nav-sidebar nav-vertical nav-uppercase">
            <li id="menu-item-24092" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24092"><Link to="/cua-hang">Sản phẩm</Link></li>
            <li id="menu-item-24210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24210">
              <Link to="/">Sofa và Armchair</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24155" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24155"><Link to="/danh-muc/phong-khach/sofa">Sofa</Link></li>
                <li id="menu-item-24156" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24156"><Link to="/danh-muc/phong-khach/sofa-goc">Sofa góc</Link></li>
                <li id="menu-item-24360" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24360"><Link to="/danh-muc/phong-khach/armchair">Armchair</Link></li>
                <li id="menu-item-24126" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24126"><Link to="/danh-muc/phong-khach/ghe-thu-gian">Ghế thư giãn</Link></li>
                <li id="menu-item-24125" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24125"><Link to="/danh-muc/phong-khach/ghe-dai-don">Ghế dài &amp; đôn</Link></li>
              </ul>
            </li>
            <li id="menu-item-24212" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24212">
              <Link to="/">Bàn</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-28010" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28010"><Link to="/danh-muc/phong-an/ban-an">Bàn ăn</Link></li>
                <li id="menu-item-24415" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24415"><Link to="/danh-muc/phong-khach/ban-nuoc">Bàn nước</Link></li>
                <li id="menu-item-24120" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24120"><Link to="/danh-muc/phong-khach/ban-ben">Bàn bên</Link></li>
                <li id="menu-item-24135" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24135"><Link to="/danh-muc/phong-lam-viec/ban-lam-viec">Bàn làm việc</Link></li>
                <li id="menu-item-24130" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24130"><Link to="/danh-muc/phong-ngu/ban-trang-diem">Bàn trang điểm</Link></li>
                <li id="menu-item-30268" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-30268"><Link to="/danh-muc/phong-khach/ban-console">Bàn console</Link></li>
              </ul>
            </li>
            <li id="menu-item-24147" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24147">
              <Link to="/danh-muc/phong-an">Ghế</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24111" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24111"><Link to="/danh-muc/phong-an/ghe-an">Ghế ăn</Link></li>
                <li id="menu-item-24113" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24113"><Link to="/danh-muc/phong-an/ghe-bar">Ghế bar</Link></li>
                <li id="menu-item-24151" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24151"><Link to="/danh-muc/phong-an/xe-day">Xe đẩy</Link></li>
              </ul>
            </li>
            <li id="menu-item-24209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24209">
              <Link to="/">Giường ngủ</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24775" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24775"><Link to="/danh-muc/phong-ngu/giuong">Giường</Link></li>
                <li id="menu-item-24129" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24129"><Link to="/danh-muc/phong-ngu/ban-dau-giuong">Bàn đầu giường</Link></li>
                <li id="menu-item-24164" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24164"><Link to="/danh-muc/phong-ngu/nem">Nệm</Link></li>
              </ul>
            </li>
            <li id="menu-item-24211" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24211">
              <Link to="/">Tủ và Kệ</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24160" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24160"><Link to="/danh-muc/phong-khach/tu-tivi">Tủ tivi</Link></li>
                <li id="menu-item-24158" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24158"><Link to="/danh-muc/phong-khach/tu-giay">Tủ giày</Link></li>
                <li id="menu-item-24167" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24167"><Link to="/danh-muc/phong-ngu/tu-hoc-keo">Tủ hộc kéo</Link></li>
                <li id="menu-item-24159" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24159"><Link to="/danh-muc/phong-khach/tu-thap">Tủ thấp</Link></li>
                <li id="menu-item-24149" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24149"><Link to="/danh-muc/phong-an/tu-ly">Tủ ly</Link></li>
                <li id="menu-item-24150" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24150"><Link to="/danh-muc/phong-an/tu-ruou">Tủ rượu</Link></li>
                <li id="menu-item-24128" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24128"><Link to="/danh-muc/phong-khach/ke-phong-khach">Kệ phòng khách</Link></li>
                <li id="menu-item-39704" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-39704"><Link to="/danh-muc/phong-lam-viec/ke-sach">Kệ sách</Link></li>
                <li id="menu-item-24166" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24166"><Link to="/danh-muc/phong-ngu/tu-ao">Tủ áo</Link></li>
                <li id="menu-item-24165" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24165"><Link to="/danh-muc/phong-ngu/tu-am-tuong">Tủ âm tường</Link></li>
              </ul>
            </li>
            <li id="menu-item-24093" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24093">
              <Link to="/danh-muc/bep">Bếp</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24182" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24182"><Link to="/danh-muc/bep/tu-bep">Tủ bếp</Link></li>
                <li id="menu-item-24097" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24097"><Link to="/danh-muc/bep/dao-bep">Đảo bếp</Link></li>
                <li id="menu-item-24180" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24180"><Link to="/danh-muc/bep/quay-bar">Quầy bar</Link></li>
                <li id="menu-item-24179" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24179"><Link to="/danh-muc/bep/phu-kien-bep">Phụ kiện bếp</Link></li>
              </ul>
            </li>
            <li id="menu-item-24099" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24099">
              <Link to="/danh-muc/hang-trang-tri">Hàng trang trí</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24102" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24102"><Link to="/danh-muc/hang-trang-tri/den">Đèn trang trí</Link></li>
                <li id="menu-item-24174" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24174"><Link to="/danh-muc/hang-trang-tri/tham">Thảm</Link></li>
                <li id="menu-item-43877" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-43877"><Link to="/danh-muc/hang-trang-tri/do-trang-tri-noel">Đồ trang trí Noel</Link></li>
                <li id="menu-item-36693" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36693"><Link to="/hang-trang-tri-michael-aram">Michael Aram</Link></li>
                <li id="menu-item-24101" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24101"><Link to="/danh-muc/hang-trang-tri/binh-trang-tri">Bình trang trí</Link></li>
                <li id="menu-item-24104" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24104"><Link to="/danh-muc/hang-trang-tri/dong-ho-hang-trang-tri">Đồng hồ</Link></li>
                <li id="menu-item-24106" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24106"><Link to="/danh-muc/hang-trang-tri/goi-va-thu-bong">Gối và thú bông</Link></li>
                <li id="menu-item-24107" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24107"><Link to="/danh-muc/hang-trang-tri/hang-trang-tri-khac">Hàng trang trí khác</Link></li>
                <li id="menu-item-24108" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24108"><Link to="/danh-muc/hang-trang-tri/hoa-cay">Hoa &amp; Cây</Link></li>
                <li id="menu-item-24169" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24169"><Link to="/danh-muc/hang-trang-tri/khung-guong">Khung gương</Link></li>
                <li id="menu-item-24170" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24170"><Link to="/danh-muc/hang-trang-tri/khung-hinh">Khung hình</Link></li>
                <li id="menu-item-24172" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24172"><Link to="/danh-muc/hang-trang-tri/nen">Nến</Link></li>
                <li id="menu-item-24175" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24175"><Link to="/danh-muc/hang-trang-tri/tranh">Tranh</Link></li>
                <li id="menu-item-24176" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24176"><Link to="/danh-muc/hang-trang-tri/tuong-trang-tri">Tượng trang trí</Link></li>
                <li id="menu-item-24173" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24173"><Link to="/danh-muc/hang-trang-tri/san-pham-khac">Sản phẩm khác</Link></li>
              </ul>
            </li>
            <li id="menu-item-24143" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24143">
              <Link to="/danh-muc/ngoai-that">Ngoại thất</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24141" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24141"><Link to="/danh-muc/ngoai-that/ghe-ngoai-troi">Ghế ngoài trời</Link></li>
                <li id="menu-item-24139" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24139"><Link to="/danh-muc/ngoai-that/ban-ngoai-troi">Bàn ngoài trời</Link></li>
              </ul>
            </li>
            <li id="menu-item-24183" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24183">
              <Link to="/">Phòng</Link>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24469" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24469"><Link to="/phong-khach">Phòng khách</Link></li>
                <li id="menu-item-27882" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27882"><Link to="/phong-an">Phòng ăn</Link></li>
                <li id="menu-item-27881" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27881"><Link to="/phong-ngu">Phòng ngủ</Link></li>
                <li id="menu-item-27883" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27883"><Link to="/danh-muc/phong-lam-viec">Phòng làm việc</Link></li>
              </ul>
            </li>
            <li id="menu-item-30269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30269"><Link to="/he-thong-cua-hang">TÌM CỬA HÀNG &gt;&gt;</Link></li>
            <li id="menu-item-51031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51031"><Link to="/khuyen-mai">Khuyến mãi</Link></li>
            <li id="menu-item-51030" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-51030"><Link to="/danh-muc/giam-gia-dac-biet">Giảm giá đặc biệt</Link></li>
            <li id="menu-item-24192" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24192"><Link to="/thiet-ke-noi-that">Thiết kế nội thất</Link></li>
            <li id="menu-item-24229" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24229"><Link to="/bo-suu-tap">Bộ sưu tập</Link></li>
            <li id="menu-item-24191" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24191"><Link to="/showroom-ao">Cửa hàng 360 độ</Link></li>
            <li id="menu-item-27841" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-27841"><a href="index.html" aria-current="page">Góc cảm hứng</a></li>
            <li>
              <a href="/">
                Tiếng Việt
                <i className="image-icon">
                  <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="Tiếng Việt" data-lazy-src={VIFlag} />
                  <noscript><img width="18" height="12" src={VIFlag} alt="Tiếng Việt" /></noscript>
                </i>
              </a>
              <ul className="children">
                <li>
                  <a href="index.html" hrefLang="vi">
                    <i className="icon-image">
                      <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="Tiếng Việt" data-lazy-src={VIFlag} />
                      <noscript><img width="18" height="12" src={VIFlag} alt="Tiếng Việt" /></noscript>
                    </i>
                    Tiếng Việt
                  </a>
                </li>
                <li>
                  <Link to="/index9ed2.html?lang=en" hrefLang="en">
                    <i className="icon-image">
                      <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="English" data-lazy-src="../../plugins/sitepress-multilingual-cms/res/flags/en.png" />
                      <noscript><img width="18" height="12" src="../../plugins/sitepress-multilingual-cms/res/flags/en.png" alt="English" /></noscript>
                    </i>
                    English
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
