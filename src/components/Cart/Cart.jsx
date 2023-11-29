import React from 'react';

function Cart() {
  return (
    <main id="main" className="">
      <div className="checkout-page-title page-title">
        <h1 className="cart-title">
          Giỏ hàng
          <span className="total_count">0</span>
        </h1>
      </div>
      <div className="cart-container container page-wrapper page-checkout">
        <div className="woocommerce">
          <div className="text-center pt pb">
            <div className="woocommerce-notices-wrapper" />
            <p className="cart-empty woocommerce-info">Hiện tại giỏ hàng của bạn đang trống</p>
            {' '}
            <p className="return-to-shop">
              <a className="button primary wc-backward" href="../cua-hang/index.html">
                Quay lại cửa hàng
              </a>
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Cart;
