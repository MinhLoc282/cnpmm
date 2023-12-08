/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import WishlistItem from 'components/WishlistItem/WishlistItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetUserWishlist } from 'store/actions';
import { formatPriceWithCommas } from 'utils';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.Wishlist.wishlist);

  useEffect(() => {
    dispatch(actionGetUserWishlist());
  }, []);

  return (
    <div id="overlay-right-sidebar" className="mobile-sidebar no-scrollbar mfp-hide">
      <div className="sidebar-menu no-scrollbar ">
        <div className="wishlist-view-sidebar">
          <div className="wishlist-view-sidebar-header">
            <h4>
              Wishlist
              {' '}
              <span>{wishlist.length > 0 ? wishlist.length : 0}</span>
            </h4>
          </div>
          <div className="wishlist-view-sidebar-content wishlist_table cart">
            {wishlist ? wishlist.map((product) => (
              <WishlistItem key={product._id} product={product} />
            )) : ''}
          </div>
          <div className="wishlist-view-sidebar-footer">
            <div className="total_price_wrapper">
              <span>Tổng cộng</span>
              {' '}
              <strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {formatPriceWithCommas(wishlist.reduce((accumulator, product) => {
                      const { price, priceSale } = product;
                      const totalPrice = priceSale < price ? priceSale : price;

                      return accumulator + totalPrice;
                    }, 0))}
                    <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                  </bdi>
                </span>
              </strong>
            </div>
            <a href="/tai-khoan/wishlist" className="wishlist-link is-small">
              Xem Wishlist
            </a>
            <a
              href="/tai-khoan"
              className="btn btn-login is-small"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
