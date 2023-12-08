import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { actionUpdateUserWishlist, actionUpdateCart } from 'store/actions';

import { convertToSlug, formatPriceWithCommas } from 'utils';

function CartItem({ item, isInWishlist }) {
  const {
    product,
    quantity,
    totalPriceItem,
  } = item;

  const {
    _id,
    name,
    images,
    specs,
  } = product;
  const dispatch = useDispatch();

  const handleDeleteProductInCart = (e) => {
    e.preventDefault();

    dispatch(actionUpdateCart({ productId: _id, quantity: 0 }));
  };

  const handleUpdateProductInCart = (newQuantity) => {
    dispatch(actionUpdateCart({ productId: _id, quantity: newQuantity }));
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(0, quantity + change);
    handleUpdateProductInCart(newQuantity);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();

    dispatch(actionUpdateUserWishlist({ prodId: _id }));
  };

  return (
    <tr className="woocommerce-cart-form__cart-item cart_item">
      <td className="product-thumbnail">
        <a
          href={`/san-pham/${convertToSlug(name)}`}
          aria-label={convertToSlug(name)}
        >
          <img
            decoding="async"
            width="300"
            height="200"
            src={images[0].url}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
            alt={name}
            srcSet={images.map((img) => `${img.url} 300w`).join(', ')}
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </a>
      </td>
      <td className="product-description">
        <a
          href={`/san-pham/${convertToSlug(name)}`}
        >
          {name}
        </a>

        <div className="product-attributes-wrapper">
          {specs.map((spec) => (
            <div key={spec._id} className="product-attribute product-attribute-item product-attribute-item-4">
              <span className="product-attribute-name">
                {spec.k}
                :
              </span>
              <span className="product-attribute-option">{spec.v}</span>
            </div>
          ))}
        </div>

        <span className="woocommerce-Price-amount amount">
          <bdi>
            {formatPriceWithCommas(totalPriceItem)}
            <span className="woocommerce-Price-currencySymbol">₫</span>
          </bdi>
        </span>

        <div className="wishlist-icon">
          <button
            type="button"
            className={`wishlist-button button is-outline circle icon ${isInWishlist ? 'wishlist-added' : ''}`}
            aria-label="Wishlist"
            onClick={handleAddToWishlist}
          >
            <i className="icon-heart-o" />
            Thêm vào Wishlist
          </button>

          <div className="wishlist-popup dark">
            {isInWishlist ? (
              <div
                className="yith-wcwl-add-to-wishlist add-to-wishlist-3083 exists wishlist-fragment on-first-load"
              >
                <div
                  className="yith-wcwl-wishlistexistsbrowse"
                >
                  <span className="feedback">
                    <i className="yith-wcwl-icon fa fa-heart" />
                    The product is already in your wishlist!
                  </span>
                  <a href="/tai-khoan/wishlist" rel="nofollow" data-title="Browse wishlist">
                    Browse wishlist
                  </a>
                </div>
              </div>
            ) : (
              <div className="yith-wcwl-add-button">
                <a
                  href="/"
                  className="add_to_wishlist single_add_to_wishlist"
                  data-title="Add to wishlist"
                  rel="nofollow"
                  onClick={handleAddToWishlist}
                >
                  <i className="yith-wcwl-icon fa fa-heart-o" />
                  <span>Add to wishlist</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </td>

      <td className="product-quantity">
        <a href="/" onClick={handleDeleteProductInCart} className="remove" aria-label="remove"><i className="fal fa-times" /></a>
        <div className="quantity buttons_added">
          <input
            type="button"
            value="-"
            className="minus button is-form"
            onClick={() => handleQuantityChange(-1)}
          />

          <label className="screen-reader-text" htmlFor={`quantity_${_id}`}>
            {name}
            {' '}
            quantity
          </label>
          <input
            type="number"
            id={`quantity_${_id}`}
            className="input-text qty text"
            step="1"
            min="0"
            max="11"
            name="cart[d3157f2f0212a80a5d042c127522a2d5][qty]"
            value={quantity}
            title="Qty"
            size="4"
            placeholder=""
            inputMode="numeric"
          />

          <input
            type="button"
            value="+"
            className="plus button is-form"
            onClick={() => handleQuantityChange(1)}
          />
        </div>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
      description: PropTypes.string.isRequired,
      specs: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          k: PropTypes.string.isRequired,
          v: PropTypes.string.isRequired,
        }),
      ).isRequired,
      priceSale: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    totalPriceItem: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  isInWishlist: PropTypes.bool.isRequired,
};

export default CartItem;
