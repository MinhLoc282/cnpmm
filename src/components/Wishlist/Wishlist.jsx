/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

import { Link } from 'react-router-dom';

function Wishlist() {
  return (
    <div id="overlay-right-sidebar" className="mobile-sidebar no-scrollbar mfp-hide">
      <div className="sidebar-menu no-scrollbar ">
        <div className="wishlist-view-sidebar">
          <div className="wishlist-view-sidebar-header">
            <h4>
              Wishlist
              <span>0</span>
            </h4>
          </div>
          <div className="wishlist-view-sidebar-content wishlist_table cart" data-token="" />
          <div className="wishlist-view-sidebar-footer">
            <div className="total_price_wrapper">
              <span>Tổng cộng</span>
              {' '}
              <strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    0
                    <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                  </bdi>
                </span>
              </strong>
            </div>
            <Link to="/tai-khoan/wishlist" className="wishlist-link is-small">
              Xem Wishlist
            </Link>
            <Link
              to="/tai-khoan"
              className="btn btn-login is-small"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
