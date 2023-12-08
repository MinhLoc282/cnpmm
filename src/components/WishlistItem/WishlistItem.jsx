/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { actionUpdateUserWishlist } from 'store/actions';

import { convertToSlug, formatPriceWithCommas } from 'utils';

function WishlistItem({ product }) {
  const {
    _id, images, name, price, priceSale,
  } = product;
  const dispatch = useDispatch();

  const handleAddToWishlist = (event) => {
    event.preventDefault();

    console.log('Wishlist');

    dispatch(actionUpdateUserWishlist({ prodId: _id }));
  };

  return (
    <div className="wishlist-item-wrapper">
      <div className="left">
        <div className="woocommerce-product-gallery__wrapper">
          <div key={images[0]._id} data-thumb={images[0].url} className="woocommerce-product-gallery__image slide first">
            <img
              width="600"
              height="400"
              src={images[0].url}
              className="wp-post-image skip-lazy"
              alt=""
              title={name}
              data-caption=""
              decoding="async"
              srcSet={`${images[0].url} 600w, ${images[0].url.replace('-100x100.', '-300x200.')} 300w, ${images[0].url.replace('-100x100.', '-601x400.')} 601w, ${images[0].url.replace('-100x100.', '-768x511.')} 768w, ${images[0].url} 1000w`}
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="woocommerce-product-title__wrapper">
          <h4>
            <a href={`/san-pham/${convertToSlug(name)})}`}>
              {name}
            </a>
          </h4>
        </div>
        <div className="">
          <div className="price-wrapper">
            {price !== priceSale ? (
              <p className="price product-page-price price-on-sale">
                <del aria-hidden="true">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {formatPriceWithCommas(price)}
                      <span className="woocommerce-Price-currencySymbol">₫</span>
                    </bdi>
                  </span>
                </del>

                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {formatPriceWithCommas(priceSale)}
                      <span className="woocommerce-Price-currencySymbol">₫</span>
                    </bdi>
                  </span>
                </ins>
              </p>
            ) : (
              <p className="price product-page-price ">
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {formatPriceWithCommas(price)}
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="wishlist-icon">
          <a
            href="#"
            className="remove_from_wishlist wishlist-button icon"
            title="Remove this product"
            aria-label="Wishlist"
            rel="nofollow"
            onClick={handleAddToWishlist}
          >
            <i className="icon-heart-o" />
          </a>
        </div>
      </div>
    </div>
  );
}

WishlistItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceSale: PropTypes.number.isRequired,
  }).isRequired,
};

export default WishlistItem;
