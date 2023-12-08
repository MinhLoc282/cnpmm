/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { convertToSlug } from 'utils';
import { useDispatch } from 'react-redux';
import { actionUpdateCart } from 'store/actions';

function CartItem({ item }) {
  const { product, quantity, totalPriceItem } = item;
  const { _id, name, images } = product;
  const dispatch = useDispatch();

  const handleUpdateCart = (event) => {
    event.preventDefault();

    dispatch(actionUpdateCart({ quantity: 0, productId: _id }));
  };

  return (
    <ul className="woocommerce-mini-cart cart_list product_list_widget">
      <li className="woocommerce-mini-cart-item mini_cart_item">
        <a
          href="#"
          className="remove remove_from_cart_button"
          aria-label="Remove this item"
          data-product_id={_id}
          data-cart_item_key={_id}
          data-product_sku="3*96299"
          onClick={handleUpdateCart}
        >
          ×
        </a>

        <a href={`https://nhaxinh.com/san-pham/${convertToSlug(name)}/`}>
          <img
            width="300"
            height="200"
            src={images[0].url}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
            alt=""
            decoding="async"
            srcSet={images.map((img) => `${img.url} 300w`).join(', ')}
            sizes="(max-width: 300px) 100vw, 300px"
          />
          {name}
        </a>
        <span className="quantity">
          {quantity}
          {' '}
          ×
          <span className="woocommerce-Price-amount amount">
            <bdi>
              {totalPriceItem}
              <span className="woocommerce-Price-currencySymbol">₫</span>
            </bdi>
          </span>
        </span>
      </li>
    </ul>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          _id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    totalPriceItem: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
