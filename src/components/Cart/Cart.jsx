import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetCart } from 'store/actions';

import CartItem from 'components/CartItem/CartItem';

import { formatPriceWithCommas } from 'utils';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  useEffect(() => {
    dispatch(actionGetCart());
  }, []);

  return (
    <div id="cart-popup" className="mfp-hide widget_shopping_cart">
      <div className="cart-popup-inner inner-padding">
        <div className="cart-popup-title text-center">
          <h4 className="uppercase">Cart</h4>
          <div className="is-divider" />
        </div>
        <div className="widget_shopping_cart_content">
          {cart ? (
            <div className="widget_shopping_cart_content">
              {cart ? cart.map((cartItem) => (
                <CartItem key={cartItem._id} item={cartItem} />)) : ''}

              <p className="woocommerce-mini-cart__total total">
                <strong>Thành tiền:</strong>

                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {formatPriceWithCommas(cart.reduce((accumulator, item) => {
                      const { totalPriceItem } = item;
                      const totalPrice = totalPriceItem;

                      return accumulator + totalPrice;
                    }, 0))}
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>
              </p>

              <p className="woocommerce-mini-cart__buttons buttons">
                <a href="/gio-hang" className="button wc-forward">Xem giỏ hàng</a>
                <a href="/thanh-toan" className="button checkout wc-forward">Checkout</a>
              </p>
            </div>
          )
            : (
              <p className="woocommerce-mini-cart__empty-message">
                Không có sản phẩm nào trong giỏ hàng
              </p>
            )}
        </div>
        <div className="cart-sidebar-content relative" />
      </div>
    </div>
  );
}

export default Cart;
