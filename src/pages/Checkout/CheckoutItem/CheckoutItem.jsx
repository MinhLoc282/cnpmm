import React from 'react';

import PropTypes from 'prop-types';
import { formatPriceWithCommas } from 'utils';

function CheckoutItem({ item }) {
  const { product, quantity, totalPriceItem } = item;
  const { name, images } = product;

  return (
    <tr className="cart_item">
      <td className="product-name">
        <div className="product-thumbnails">
          <a aria-label="product" href={`https://nhaxinh.com/san-pham/${product._id}`}>
            <img
              width="300"
              height="200"
              src={images[0].url}
              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
              alt={name}
              decoding="async"
            />
          </a>
        </div>
        {name}
        &nbsp;&nbsp;
        <strong className="product-quantity">
          ×&nbsp;
          {quantity}
        </strong>
      </td>
      <td className="product-total">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            {formatPriceWithCommas(totalPriceItem)}
            {' '}
            <span className="woocommerce-Price-currencySymbol">₫</span>
          </bdi>
        </span>
      </td>
    </tr>
  );
}

CheckoutItem.propTypes = {
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
};

export default CheckoutItem;
