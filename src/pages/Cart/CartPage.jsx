import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetCart, actionGetCoupon } from 'store/actions';
import CartItem from './CartItem/CartItem';

import { formatPriceWithCommas } from 'utils';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  const wishlist = useSelector((state) => state.Wishlist.wishlist);
  const coupon = useSelector((state) => state.Coupon.coupon);

  const isInWishlist = (productId) => wishlist && wishlist.some((item) => item._id === productId);

  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    dispatch(actionGetCoupon({ code: couponCode }));
  };

  useEffect(() => {
    dispatch(actionGetCart());
  }, [dispatch]);

  return (
    <main id="main" className="">
      <div className="checkout-page-title page-title">
        <h1 className="cart-title">
          Giỏ hàng
          <span className="total_count">{cart && cart.length > 0 ? cart.length : 0}</span>
        </h1>
      </div>

      <div className="cart-container container page-wrapper page-checkout">
        <div className="woocommerce">
          <div className="text-center pt pb">
            <div className="woocommerce-notices-wrapper" />
            {cart ? (
              <div className="woocommerce row row-large row-divided">
                <div className="col large-7 pb-0 ">
                  <form className="woocommerce-cart-form" action="https://nhaxinh.com/gio-hang/">
                    <div className="cart-wrapper sm-touch-scroll">
                      <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                        <tbody>
                          {cart && cart.length ? cart.map((item) => (
                            <CartItem
                              item={item}
                              isInWishlist={isInWishlist(item.product._id)}
                            />
                          ))
                            : ''}
                          <tr>
                            <td colSpan="3" className="actions clear">
                              <button type="submit" className="button primary mt-0 pull-left small" name="update_cart" value="Cập nhật giỏ hàng" disabled="" aria-disabled="true">Cập nhật giỏ hàng</button>

                              <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="8892560656" />
                              <input type="hidden" name="_wp_http_referer" value="/gio-hang/" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>

                <div className="cart-collaterals large-5 col pb-0">
                  <div className="cart-sidebar col-inner ">
                    <div className="cart_totals ">
                      <table cellSpacing="0">
                        <thead>
                          <tr>
                            <th className="product-name" colSpan="2" style={{ borderWidth: '3px' }}>Tóm tắt đơn hàng</th>
                          </tr>
                        </thead>
                      </table>

                      <h2>Tóm tắt đơn hàng</h2>

                      <table cellSpacing="0" className="shop_table shop_table_responsive">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Thành tiền</th>
                            <td data-title="Thành tiền">
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
                            </td>
                          </tr>

                          <tr className="woocommerce-shipping-totals shipping ">
                            <td className="shipping__inner" colSpan="2">
                              <table className="shipping__table ">
                                <tbody>
                                  <tr>
                                    <th>Vận chuyển</th>
                                    <td data-title="Vận chuyển">
                                      <ul id="shipping_method" className="shipping__list woocommerce-shipping-methods">
                                        <li className="shipping__list_item">
                                          <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate4" value="flat_rate:4" className="shipping_method" />
                                          <label className="shipping__list_label" htmlFor="shipping_method_0_flat_rate4">Liên hệ phí vận chuyển sau</label>
                                        </li>
                                      </ul>

                                      <p className="woocommerce-shipping-destination">
                                        Shipping options will be updated during checkout.
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                          <tr className="coupon">
                            <td colSpan="2">
                              <form className="checkout_coupon mb-0" onSubmit={handleApplyCoupon}>
                                <h3 className="widget-title">
                                  <i className="icon-tag" />
                                  Coupon
                                </h3>
                                <input
                                  type="text"
                                  name="coupon_code"
                                  className="input-text"
                                  id="coupon_code"
                                  value={couponCode}
                                  onChange={(e) => setCouponCode(e.target.value)}
                                  placeholder="Mã giảm giá"
                                />

                                <input type="submit" className="is-form expand" name="apply_coupon" value="Sử dụng" />
                              </form>
                            </td>
                          </tr>

                          <tr className="order-total">
                            <th>Tổng cộng</th>
                            <td data-title="Tổng cộng">
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    {coupon && coupon.discount
                                      ? formatPriceWithCommas((coupon.discount / 100)
                                        * cart.reduce((accumulator, item) => {
                                          const { totalPriceItem } = item;
                                          const totalPrice = totalPriceItem;

                                          return accumulator + totalPrice;
                                        }, 0))
                                      : formatPriceWithCommas(cart.reduce((accumulator, item) => {
                                        const { totalPriceItem } = item;
                                        const totalPrice = totalPriceItem;

                                        return accumulator + totalPrice;
                                      }, 0))}
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </bdi>
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="shipping_info">
                        <h4>Thông tin giao hàng</h4>
                        <p>
                          Đối với những sản phẩm có sẵn tại khu vực,
                          Nhà Xinh sẽ giao hàng trong vòng 2-7 ngày.
                          Đối với những sản phẩm không có sẵn, thời
                          gian giao hàng sẽ được nhân viên Nhà Xinh
                          thông báo đến quý khách.
                        </p>
                        <p>Từ 2-6: 8:30 - 17:30</p>
                        <p>Thứ 7, CN: 9:30 - 16:30</p>
                      </div>

                      <div className="wc-go-to-shopping">
                        <div className="continue-shopping pull-left text-left">
                          <a className="button-continue-shopping button primary is-outline" href="/cua-hang">
                            ←&nbsp;Tiếp tục mua hàng
                          </a>
                        </div>
                      </div>

                      <div className="wc-proceed-to-checkout">
                        <a href="/thanh-toan" className="checkout-button button alt wc-forward">
                          Đặt hàng
                        </a>
                      </div>
                    </div>
                    <div className="cart-sidebar-content relative" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="cart-empty woocommerce-info">Hiện tại giỏ hàng của bạn đang trống</p>

                <p className="return-to-shop">
                  <a className="button primary wc-backward" href="/cua-hang">
                    Quay lại cửa hàng
                  </a>
                </p>
              </>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
