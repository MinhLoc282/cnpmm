import React from 'react';

import VIFlag from 'assets/images/flags/vi.png';

function Navbar() {
  return (
    <>
      <div id="product-categories-menu" className="mobile-sidebar no-scrollbar mfp-hide">
        <div className="sidebar-menu no-scrollbar ">
          <div className="product-categories-menu-containter">
            <ul id="menu-danh-muc-sp" className="menu">
              <li id="menu-item-24213" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24213">
                <a href="/">Sofa và Armchair</a>
                <ul className="sub-menu">
                  <li id="menu-item-3785" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3785"><a href="/danh-muc/phong-khach/sofa">Sofa</a></li>
                  <li id="menu-item-3786" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3786"><a href="/danh-muc/phong-khach/sofa-goc">Sofa góc</a></li>
                  <li id="menu-item-24359" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24359"><a href="/danh-muc/phong-khach/armchair">Armchair</a></li>
                  <li id="menu-item-3377" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3377"><a href="/danh-muc/phong-khach/ghe-dai-don">Ghế dài &amp; đôn</a></li>
                  <li id="menu-item-3378" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3378"><a href="/danh-muc/phong-khach/ghe-thu-gian">Ghế thư giãn</a></li>
                </ul>
              </li>
              <li id="menu-item-24214" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24214">
                <a href="/">Bàn</a>
                <ul className="sub-menu">
                  <li id="menu-item-24417" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24417"><a href="/danh-muc/phong-khach/ban-nuoc">Bàn nước</a></li>
                  <li id="menu-item-3362" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3362"><a href="/danh-muc/phong-an/ban-an">Bàn ăn</a></li>
                  <li id="menu-item-3372" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3372"><a href="/danh-muc/phong-khach/ban-ben">Bàn bên</a></li>
                  <li id="menu-item-3387" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3387"><a href="/danh-muc/phong-lam-viec/ban-lam-viec">Bàn làm việc</a></li>
                  <li id="menu-item-3382" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3382"><a href="/danh-muc/phong-ngu/ban-trang-diem">Bàn trang điểm</a></li>
                </ul>
              </li>
              <li id="menu-item-28026" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28026">
                <a href="/">Ghế</a>
                <ul className="sub-menu">
                  <li id="menu-item-28024" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28024"><a href="/danh-muc/phong-an/ghe-an">Ghế ăn</a></li>
                  <li id="menu-item-3365" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3365"><a href="/danh-muc/phong-an/ghe-bar">Ghế bar</a></li>
                  <li id="menu-item-3388" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3388"><a href="/danh-muc/phong-lam-viec/ghe-phong-lam-viec">Ghế làm việc</a></li>
                </ul>
              </li>
              <li id="menu-item-28344" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28344">
                <a href="/">Giường ngủ</a>
                <ul className="sub-menu">
                  <li id="menu-item-28345" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28345"><a href="/danh-muc/phong-ngu/giuong">Giường</a></li>
                  <li id="menu-item-3381" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3381"><a href="/danh-muc/phong-ngu/ban-dau-giuong">Bàn đầu giường</a></li>
                  <li id="menu-item-3795" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3795"><a href="/danh-muc/phong-ngu/nem">Nệm</a></li>
                </ul>
              </li>
              <li id="menu-item-24217" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24217">
                <a href="/">Tủ và kệ</a>
                <ul className="sub-menu">
                  <li id="menu-item-3790" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3790"><a href="/danh-muc/phong-khach/tu-tivi">Tủ tivi</a></li>
                  <li id="menu-item-3776" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3776"><a href="/danh-muc/outlet/tu-trung-bay">Tủ trưng bày</a></li>
                  <li id="menu-item-3779" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3779"><a href="/danh-muc/phong-an/tu-ly">Tủ ly</a></li>
                  <li id="menu-item-3780" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3780"><a href="/danh-muc/phong-an/tu-ruou">Tủ rượu</a></li>
                  <li id="menu-item-3781" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3781"><a href="/danh-muc/phong-an/xe-day">Xe đẩy</a></li>
                  <li id="menu-item-3798" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3798"><a href="/danh-muc/phong-ngu/tu-hoc-keo">Tủ hộc kéo</a></li>
                  <li id="menu-item-3797" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3797"><a href="/danh-muc/phong-ngu/tu-ao">Tủ áo</a></li>
                  <li id="menu-item-3796" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3796"><a href="/danh-muc/phong-ngu/tu-am-tuong">Tủ âm tường</a></li>
                  <li id="menu-item-3788" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3788"><a href="/danh-muc/phong-khach/tu-giay">Tủ giày</a></li>
                  <li id="menu-item-3380" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3380"><a href="/danh-muc/phong-khach/ke-phong-khach">Kệ phòng khách</a></li>
                </ul>
              </li>
              <li id="menu-item-28027" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-28027">
                <a href="/">Bếp</a>
                <ul className="sub-menu">
                  <li id="menu-item-3813" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3813"><a href="/danh-muc/bep/tu-bep">Tủ bếp</a></li>
                  <li id="menu-item-3810" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3810"><a href="/danh-muc/bep/phu-kien-bep">Phụ kiện bếp</a></li>
                  <li id="menu-item-3349" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3349"><a href="/danh-muc/bep/dao-bep">Đảo bếp</a></li>
                  <li id="menu-item-3811" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3811"><a href="/danh-muc/bep/quay-bar">Quầy bar</a></li>
                </ul>
              </li>
              <li id="menu-item-3351" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3351">
                <a href="/danh-muc/hang-trang-tri">Hàng trang trí</a>
                <ul className="sub-menu">
                  <li id="menu-item-3353" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3353"><a href="/danh-muc/hang-trang-tri/binh-trang-tri">Bình trang trí</a></li>
                  <li id="menu-item-3354" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3354"><a href="/danh-muc/hang-trang-tri/den">Đèn trang trí</a></li>
                  <li id="menu-item-3355" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3355"><a href="/danh-muc/hang-trang-tri/do-trang-tri-noel">Đồ trang trí Noel</a></li>
                  <li id="menu-item-3356" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3356"><a href="/danh-muc/hang-trang-tri/dong-ho-hang-trang-tri">Đồng hồ</a></li>
                  <li id="menu-item-3357" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3357"><a href="/danh-muc/hang-trang-tri/dung-cu-bep">Dụng cụ bếp</a></li>
                  <li id="menu-item-3358" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3358"><a href="/danh-muc/hang-trang-tri/goi-va-thu-bong">Gối và thú bông</a></li>
                  <li id="menu-item-3359" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3359"><a href="/danh-muc/hang-trang-tri/hang-trang-tri-khac">Hàng trang trí khác</a></li>
                  <li id="menu-item-3360" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3360"><a href="/danh-muc/hang-trang-tri/hoa-cay">Hoa &amp; Cây</a></li>
                  <li id="menu-item-3800" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3800"><a href="/danh-muc/hang-trang-tri/khung-guong">Khung gương</a></li>
                  <li id="menu-item-3801" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3801"><a href="/danh-muc/hang-trang-tri/khung-hinh">Khung hình</a></li>
                  <li id="menu-item-3802" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3802"><a href="/danh-muc/hang-trang-tri/nem-hang-trang-tri">Nệm</a></li>
                  <li id="menu-item-3804" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3804"><a href="/danh-muc/hang-trang-tri/san-pham-khac">Sản phẩm khác</a></li>
                  <li id="menu-item-3805" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3805"><a href="/danh-muc/hang-trang-tri/tham">Thảm</a></li>
                  <li id="menu-item-3794" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3794"><a href="/danh-muc/phong-ngu/men">Mền</a></li>
                  <li id="menu-item-3806" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3806"><a href="/danh-muc/hang-trang-tri/tranh">Tranh</a></li>
                  <li id="menu-item-3807" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3807"><a href="/danh-muc/hang-trang-tri/tuong-trang-tri">Tượng trang trí</a></li>
                </ul>
              </li>
              <li id="menu-item-3773" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3773">
                <a href="/danh-muc/ngoai-that">Ngoại thất</a>
                <ul className="sub-menu">
                  <li id="menu-item-3391" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3391"><a href="/danh-muc/ngoai-that/ban-ngoai-troi">Bàn ngoài trời</a></li>
                  <li id="menu-item-3393" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3393"><a href="/danh-muc/ngoai-that/ghe-ngoai-troi">Ghế ngoài trời</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="main-menu" className="mobile-sidebar no-scrollbar mfp-hide">
        <div className="sidebar-menu no-scrollbar ">
          <ul className="nav nav-sidebar nav-vertical nav-uppercase">
            <li id="menu-item-24092" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24092"><a href="/cua-hang">Sản phẩm</a></li>
            <li id="menu-item-24210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24210">
              <a href="/">Sofa và Armchair</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24155" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24155"><a href="/danh-muc/phong-khach/sofa">Sofa</a></li>
                <li id="menu-item-24156" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24156"><a href="/danh-muc/phong-khach/sofa-goc">Sofa góc</a></li>
                <li id="menu-item-24360" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24360"><a href="/danh-muc/phong-khach/armchair">Armchair</a></li>
                <li id="menu-item-24126" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24126"><a href="/danh-muc/phong-khach/ghe-thu-gian">Ghế thư giãn</a></li>
                <li id="menu-item-24125" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24125"><a href="/danh-muc/phong-khach/ghe-dai-don">Ghế dài &amp; đôn</a></li>
              </ul>
            </li>
            <li id="menu-item-24212" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24212">
              <a href="/">Bàn</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-28010" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-28010"><a href="/danh-muc/phong-an/ban-an">Bàn ăn</a></li>
                <li id="menu-item-24415" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24415"><a href="/danh-muc/phong-khach/ban-nuoc">Bàn nước</a></li>
                <li id="menu-item-24120" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24120"><a href="/danh-muc/phong-khach/ban-ben">Bàn bên</a></li>
                <li id="menu-item-24135" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24135"><a href="/danh-muc/phong-lam-viec/ban-lam-viec">Bàn làm việc</a></li>
                <li id="menu-item-24130" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24130"><a href="/danh-muc/phong-ngu/ban-trang-diem">Bàn trang điểm</a></li>
                <li id="menu-item-30268" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-30268"><a href="/danh-muc/phong-khach/ban-console">Bàn console</a></li>
              </ul>
            </li>
            <li id="menu-item-24147" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24147">
              <a href="/danh-muc/phong-an">Ghế</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24111" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24111"><a href="/danh-muc/phong-an/ghe-an">Ghế ăn</a></li>
                <li id="menu-item-24113" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24113"><a href="/danh-muc/phong-an/ghe-bar">Ghế bar</a></li>
                <li id="menu-item-24151" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24151"><a href="/danh-muc/phong-an/xe-day">Xe đẩy</a></li>
              </ul>
            </li>
            <li id="menu-item-24209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24209">
              <a href="/">Giường ngủ</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24775" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24775"><a href="/danh-muc/phong-ngu/giuong">Giường</a></li>
                <li id="menu-item-24129" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24129"><a href="/danh-muc/phong-ngu/ban-dau-giuong">Bàn đầu giường</a></li>
                <li id="menu-item-24164" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24164"><a href="/danh-muc/phong-ngu/nem">Nệm</a></li>
              </ul>
            </li>
            <li id="menu-item-24211" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24211">
              <a href="/">Tủ và Kệ</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24160" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24160"><a href="/danh-muc/phong-khach/tu-tivi">Tủ tivi</a></li>
                <li id="menu-item-24158" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24158"><a href="/danh-muc/phong-khach/tu-giay">Tủ giày</a></li>
                <li id="menu-item-24167" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24167"><a href="/danh-muc/phong-ngu/tu-hoc-keo">Tủ hộc kéo</a></li>
                <li id="menu-item-24159" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24159"><a href="/danh-muc/phong-khach/tu-thap">Tủ thấp</a></li>
                <li id="menu-item-24149" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24149"><a href="/danh-muc/phong-an/tu-ly">Tủ ly</a></li>
                <li id="menu-item-24150" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24150"><a href="/danh-muc/phong-an/tu-ruou">Tủ rượu</a></li>
                <li id="menu-item-24128" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24128"><a href="/danh-muc/phong-khach/ke-phong-khach">Kệ phòng khách</a></li>
                <li id="menu-item-39704" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-39704"><a href="/danh-muc/phong-lam-viec/ke-sach">Kệ sách</a></li>
                <li id="menu-item-24166" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24166"><a href="/danh-muc/phong-ngu/tu-ao">Tủ áo</a></li>
                <li id="menu-item-24165" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24165"><a href="/danh-muc/phong-ngu/tu-am-tuong">Tủ âm tường</a></li>
              </ul>
            </li>
            <li id="menu-item-24093" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24093">
              <a href="/danh-muc/bep">Bếp</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24182" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24182"><a href="/danh-muc/bep/tu-bep">Tủ bếp</a></li>
                <li id="menu-item-24097" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24097"><a href="/danh-muc/bep/dao-bep">Đảo bếp</a></li>
                <li id="menu-item-24180" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24180"><a href="/danh-muc/bep/quay-bar">Quầy bar</a></li>
                <li id="menu-item-24179" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24179"><a href="/danh-muc/bep/phu-kien-bep">Phụ kiện bếp</a></li>
              </ul>
            </li>
            <li id="menu-item-24099" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24099">
              <a href="/danh-muc/hang-trang-tri">Hàng trang trí</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24102" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24102"><a href="/danh-muc/hang-trang-tri/den">Đèn trang trí</a></li>
                <li id="menu-item-24174" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24174"><a href="/danh-muc/hang-trang-tri/tham">Thảm</a></li>
                <li id="menu-item-43877" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-43877"><a href="/danh-muc/hang-trang-tri/do-trang-tri-noel">Đồ trang trí Noel</a></li>
                <li id="menu-item-36693" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36693"><a href="/hang-trang-tri-michael-aram">Michael Aram</a></li>
                <li id="menu-item-24101" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24101"><a href="/danh-muc/hang-trang-tri/binh-trang-tri">Bình trang trí</a></li>
                <li id="menu-item-24104" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24104"><a href="/danh-muc/hang-trang-tri/dong-ho-hang-trang-tri">Đồng hồ</a></li>
                <li id="menu-item-24106" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24106"><a href="/danh-muc/hang-trang-tri/goi-va-thu-bong">Gối và thú bông</a></li>
                <li id="menu-item-24107" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24107"><a href="/danh-muc/hang-trang-tri/hang-trang-tri-khac">Hàng trang trí khác</a></li>
                <li id="menu-item-24108" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24108"><a href="/danh-muc/hang-trang-tri/hoa-cay">Hoa &amp; Cây</a></li>
                <li id="menu-item-24169" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24169"><a href="/danh-muc/hang-trang-tri/khung-guong">Khung gương</a></li>
                <li id="menu-item-24170" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24170"><a href="/danh-muc/hang-trang-tri/khung-hinh">Khung hình</a></li>
                <li id="menu-item-24172" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24172"><a href="/danh-muc/hang-trang-tri/nen">Nến</a></li>
                <li id="menu-item-24175" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24175"><a href="/danh-muc/hang-trang-tri/tranh">Tranh</a></li>
                <li id="menu-item-24176" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24176"><a href="/danh-muc/hang-trang-tri/tuong-trang-tri">Tượng trang trí</a></li>
                <li id="menu-item-24173" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24173"><a href="/danh-muc/hang-trang-tri/san-pham-khac">Sản phẩm khác</a></li>
              </ul>
            </li>
            <li id="menu-item-24143" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-24143">
              <a href="/danh-muc/ngoai-that">Ngoại thất</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24141" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24141"><a href="/danh-muc/ngoai-that/ghe-ngoai-troi">Ghế ngoài trời</a></li>
                <li id="menu-item-24139" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-24139"><a href="/danh-muc/ngoai-that/ban-ngoai-troi">Bàn ngoài trời</a></li>
              </ul>
            </li>
            <li id="menu-item-24183" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24183">
              <a href="/">Phòng</a>
              <ul className="sub-menu nav-sidebar-ul children">
                <li id="menu-item-24469" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24469"><a href="/phong-khach">Phòng khách</a></li>
                <li id="menu-item-27882" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27882"><a href="/phong-an">Phòng ăn</a></li>
                <li id="menu-item-27881" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27881"><a href="/phong-ngu">Phòng ngủ</a></li>
                <li id="menu-item-27883" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-27883"><a href="/danh-muc/phong-lam-viec">Phòng làm việc</a></li>
              </ul>
            </li>
            <li id="menu-item-51031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51031"><a href="/khuyen-mai">Khuyến mãi</a></li>
            <li id="menu-item-51030" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-51030"><a href="/danh-muc/giam-gia-dac-biet">Giảm giá đặc biệt</a></li>
            <li id="menu-item-24192" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24192"><a href="/thiet-ke-noi-that">Thiết kế nội thất</a></li>
            <li id="menu-item-24229" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24229"><a href="/bo-suu-tap">Bộ sưu tập</a></li>
            <li id="menu-item-24191" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24191"><a href="/showroom-ao">Cửa hàng 360 độ</a></li>
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
                  <a href="/index9ed2.html?lang=en" hrefLang="en">
                    <i className="icon-image">
                      <img width="18" height="12" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2012'%3E%3C/svg%3E" alt="English" data-lazy-src="../../plugins/sitepress-multilingual-cms/res/flags/en.png" />
                      <noscript><img width="18" height="12" src="../../plugins/sitepress-multilingual-cms/res/flags/en.png" alt="English" /></noscript>
                    </i>
                    English
                  </a>
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
