import React from 'react';

function PageTitle() {
  return (
    <div className="page-title shop-page-title product-page-title">
      <div className="page-title-inner flex-row medium-flex-wrap container">
        <div className="flex-col flex-grow medium-text-center">
          <div className="is-small">
            <nav className="woocommerce-breadcrumb breadcrumbs ">
              <a href="https://nhaxinh.com">Trang chủ</a>
              <span className="divider">/</span>
              <a href="https://nhaxinh.com/danh-muc/phong-khach/">Phòng khách</a>
              <span className="divider">/</span>
              <a href="https://nhaxinh.com/danh-muc/phong-khach/ghe-dai-don/">Ghế dài &amp; đôn</a>
            </nav>
          </div>
        </div>
        <div className="flex-col medium-text-center" />
      </div>
    </div>
  );
}

export default PageTitle;
