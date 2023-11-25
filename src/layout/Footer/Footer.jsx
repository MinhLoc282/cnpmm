import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Logo from 'assets/images/logo.png';
import CorrLogo from 'assets/images/aa-corporation-logo-2311.png';
import AkaLogo from 'assets/images/aka-logo-2311.png';
import NhaXinhLogo from 'assets/images/nha-xinh-logo-2311.png';
import Image15 from 'assets/images/image-15.png';

function Footer() {
  return (
    <footer id="footer" className="footer-wrapper">
      <div className="footer-widgets footer footer-2 dark">
        <div className="row dark large-columns-4 mb-0">
          <div id="text-14" className="col pb-0 widget widget_text">
            <span className="widget-title">Kết nối với Nhà Xinh</span>
            <div className="is-divider small" />
            {' '}
            <div className="textwidget">
              <p>
                <LazyLoadImage width="140" height="40" className="logo_ft" src={Logo} alt="logo" />
              </p>
              <div className="follow">
                <h4>Follow us</h4>
                <p>
                  <a href="https://www.instagram.com/nha_xinh/">Instagram</a>
                  &#8211;
                  <a href="https://www.youtube.com/c/NhàXinhvn">Youtube</a>
                  &#8211;
                  <a href="https://www.facebook.com/nhaxinhvn">Facebook</a>
                </p>
              </div>
              <p><a className="bt_timcuahang" href="he-thong-cua-hang/index.html">Hệ Thống Cửa Hàng</a></p>
            </div>
          </div>
          <div id="nav_menu-2" className="col pb-0 widget widget_nav_menu">
            <span className="widget-title">Nhà Xinh</span>
            <div className="is-divider small" />
            <div className="menu-ve-nha-xinh-container">
              <ul id="menu-ve-nha-xinh" className="menu">
                <li id="menu-item-41004" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41004"><a href="gioi-thieu/index.html">Giới thiệu</a></li>
                <li id="menu-item-41005" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41005"><a href="tin-tuc/index.html">Chuyện Nhà Xinh</a></li>
                <li id="menu-item-41000" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41000"><a href="tong-cong-ty/index.html">Tổng công ty</a></li>
                <li id="menu-item-41002" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41002"><a href="tuyen-dung/index.html">Tuyển dụng</a></li>
                <li id="menu-item-41001" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41001"><a href="the-hoi-vien-2/index.html">Thẻ hội viên</a></li>
                <li id="menu-item-41003" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41003"><a href="doi-tra-hang/index.html">Đổi trả hàng</a></li>
              </ul>
            </div>
          </div>
          <div id="nav_menu-3" className="col pb-0 widget widget_nav_menu">
            <span className="widget-title">CẢM HỨNG #NHAXINH</span>
            <div className="is-divider small" />
            <div className="menu-cam-hung-nha-xinh-container">
              <ul id="menu-cam-hung-nha-xinh" className="menu">
                <li id="menu-item-449" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-449"><a href="cua-hang/index.html">Sản phẩm</a></li>
                <li id="menu-item-450" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-450"><a href="cam-hung-nha-xinh-y-tuong/index.html">Ý tưởng và cảm hứng</a></li>
              </ul>
            </div>
          </div>
          <div id="block_widget-3" className="col pb-0 widget block_widget">
            <span className="widget-title">Newsletter</span>
            <div className="is-divider small" />
            <div id="text-4141469133" className="text">

              <p>
                Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới
                và những thông tin, ưu đãi từ Nhà Xinh
              </p>
              <p>Email: nhaxinhcare@akacompany.com.vn</p>
              <p>
                Hotline:
                {' '}
                <strong>18007200</strong>
              </p>
            </div>

            <div role="form" className="wpcf7" id="wpcf7-f9-o2" lang="en-US" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true" />
                {' '}
                <ul />
              </div>
              <form action="https://nhaxinh.com/#wpcf7-f9-o2" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_wpcf7" value="9" />
                  <input type="hidden" name="_wpcf7_version" value="5.5.2" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f9-o2" />
                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                </div>
                <div className="flex-row form-flat medium-flex-wrap">
                  <div className="flex-col flex-grow">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Nhập email của bạn" /></span>
                  </div>
                  <div className="flex-col ml-half">
                    <input type="submit" value="Đăng ký" className="wpcf7-form-control has-spinner wpcf7-submit button" />
                  </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true" />
              </form>

            </div>
          </div>

        </div>
      </div>

      <div className="absolute-footer dark medium-text-center small-text-center">
        <div className="container clearfix">

          <div className="footer-secondary">
            <div className="footer-text inline-block small-block">

              <div className="row slider_gallary_logo large-columns-6 medium-columns-3 small-columns-2 slider row-slider slider-nav-reveal" data-flickity-options='{"imagesLoaded": true, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": true,"pageDots": false, "rightToLeft": false, "autoPlay" : 3000}'>

                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.aacorporation.com/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" src={CorrLogo} />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.akafurniture.com.vn/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" src={AkaLogo} />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="index.html" target="_blank" title="">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" src={NhaXinhLogo} />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.boconcept.com/vi-vn/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/Boconcept-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="http://bellavitaluxury.com/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/bellavita-luxury-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.calligarisvn.com/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/calligaris-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="http://bellavitaluxury.com/brands/baxter-vi/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/baxter-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.ligne-roset.com/vn/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/ligneroset-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.lago.it/en/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/lago-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
                <div className="gallery-col col">
                  <div className="col-inner">
                    <a href="https://www.adamos.com.vn/" target="_blank" title="" rel="noreferrer">
                      {' '}
                      <div className="box has-hover gallery-box box-none">
                        <div className="box-image" style={{ width: '71%' }}>
                          <LazyLoadImage width="100" height="30" className="slider_gallary_logo" alt="" ids="28916,28920,28932,28924,28922,28926,28934,28930,28928,28918" style={{ display: 'none' }} lightbox="false" type="slider" columns="6" auto_slide="3000" image_width="71" text_align="center" decoding="async" data-lazy-src="wp-content/uploads/2021/11/adamos-logo-2311.png" />
                          {' '}

                        </div>
                        <div className="box-text text-center">
                          <p />
                        </div>
                      </div>
                    </a>
                    {' '}

                  </div>
                </div>
              </div>
              {' '}

            </div>
          </div>

          <div className="footer-primary">
            <div className="copyright-footer">
              © 2021 - Bản quyền của Nhà Xinh - thương hiệu thuộc AKA Furniture
              <br />
              Từ năm 1999 - thương hiệu đăng ký số 284074 Cục sở hữu trí tuệ
              <LazyLoadImage width="105" height="40" style={{ float: 'right' }} src={Image15} />
              {' '}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
