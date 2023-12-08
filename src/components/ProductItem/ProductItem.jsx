/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { formatPriceWithCommas } from 'utils';
import { actionAddToCart, actionUpdateUserWishlist } from 'store/actions';

function ProductItem({ product, isInWishlist }) {
  const {
    _id, name, slug, price, sale, priceSale, images,
  } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(actionAddToCart({ productId: _id, quantity: 1 }));
  };

  const handleAddToWishlist = () => {
    dispatch(actionUpdateUserWishlist({ prodId: _id }));
  };

  return (
    <div className={`product-small col has-hover product type-product post-53151 status-publish last instock product_cat-binh-trang-tri product_cat-hang-trang-tri has-post-thumbnail taxable shipping-taxable purchasable product-type-simple ${sale ? 'sale' : ''}`}>
      <div className="col-inner">
        <div className="badge-container absolute left top z-1">
          {sale ? (
            <div className="callout badge badge-circle">
              <div className="badge-inner secondary on-sale">
                <span className="onsale">
                  -
                  {sale}
                  %
                </span>
              </div>
            </div>
          )
            : ''}
        </div>
        <div className="product-small box ">
          <div className="box-image">
            <div className="image-fade_in_back">
              <a href={`/san-pham/${slug}`} aria-label={name}>
                {images
                && images.map((image) => {
                  const imageUrl = image.url && image.url.replace
                    ? image.url.replace(/-\d+x\d+\./, '-601x400.')
                    : '';

                  return (
                    <img
                      key={image._id}
                      width="300"
                      height="200"
                      src={image.url}
                      data-src={image.url}
                      className={`lazy-load ${
                        image._id === images[0]._id
                          ? 'attachment-woocommerce_thumbnail size-woocommerce_thumbnail'
                          : 'show-on-hover absolute fill hide-for-small back-image'
                      }`}
                      alt=""
                      decoding="async"
                      srcSet=""
                      data-srcset={`
                        ${image.url} 300w,
                        ${imageUrl} 601w,
                        ${imageUrl.replace(/-\d+x\d+\./, '-768x511.')} 768w,
                        ${imageUrl.replace(/-\d+x\d+\./, '-600x400.')} 600w,
                        ${image.url} 1000w
                      `}
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  );
                })}

              </a>
            </div>

            <div className="image-tools is-small top right show-on-hover" />
            <div className="image-tools is-small hide-for-small bottom left show-on-hover" />
            <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover" />
          </div>

          <div className="box-text box-text-products">
            <div className="title-wrapper">
              <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link" href={`/san-pham/${slug}`} aria-label={name}>
                {name}
              </a>
            </div>

            <div className="sub-title-wrapper">
              <div className="wishlist-icon">
                <button
                  type="button"
                  onClick={handleAddToWishlist}
                  className={`wishlist-button button is-outline circle icon ${isInWishlist ? 'wishlist-added' : ''}`}
                  aria-label="Wishlist"
                >
                  <i className="icon-heart-o" />
                </button>
              </div>
            </div>

            <div className="box-text-footer">
              <div className="price-wrapper">
                {sale ? (
                  <span className="price">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {formatPriceWithCommas(price)}
                          <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                        </bdi>
                      </span>
                    </del>

                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {formatPriceWithCommas(priceSale)}
                          <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                        </bdi>
                      </span>
                    </ins>
                  </span>
                ) : (
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        {formatPriceWithCommas(price)}
                        <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                      </bdi>
                    </span>
                  </span>
                )}
              </div>

              <div className="product-box-after">
                <div className="add-to-cart-button">
                  <a
                    href="/"
                    data-quantity="1"
                    className="primary is-small mb-0 button product_type_simple add_to_cart_button ajax_add_to_cart is-outline"
                    data-product_id="53151"
                    data-product_sku="3*111766"
                    aria-label="Add &ldquo;Bình trang trí Face L&rdquo; to your cart"
                    rel="nofollow"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ
                  </a>
                </div>

                <a href={`/san-pham/${slug}`} className="buy-now button">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    priceSale: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  isInWishlist: PropTypes.bool.isRequired,
};

export default ProductItem;
