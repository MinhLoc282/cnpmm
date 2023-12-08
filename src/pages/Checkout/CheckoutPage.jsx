/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionCreateOrder, actionGetCart } from 'store/actions';
import { formatPriceWithCommas } from 'utils';
import CheckoutItem from './CheckoutItem/CheckoutItem';

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  const coupon = localStorage.getItem('coupon');

  const addressSchema = Yup.object().shape({
    province: Yup.string().trim().required('Tỉnh không được bỏ trống.'),
    district: Yup.string().trim().required('Huyện không được bỏ trống.'),
    ward: Yup.string().trim().required('Xã không được bỏ trống.'),
    note: Yup.string().trim(),
  });

  const addressValidation = useFormik({
    enableReinitialize: true,

    initialValues: {
      PaymentMethod: 'COD',
      name: '',
      email: '',
      phoneNumber: '',
      addressShipping: {
        province: 'Ho Chi Minh City',
        district: '',
        ward: '',
        note: '',
      },
      couponApplied: '',
    },

    validationSchema: Yup.object({
      PaymentMethod: Yup.string().trim().required('Phương thức thanh toán không được bỏ trống.'),
      name: Yup.string().trim().required('Họ và tên không được bỏ trống.'),
      email: Yup.string().trim().email('Địa chỉ email không hợp lệ.').required('Địa chỉ email không được bỏ trống.'),
      phoneNumber: Yup.string().trim().required('Số điện thoại không được bỏ trống.'),
      addressShipping: addressSchema.required('Địa chỉ giao hàng không được bỏ trống.'),
      couponApplied: Yup.string().trim(),
    }),
  });

  const [province, setProvince] = useState('');

  const handleCreateOrder = () => {
    if (coupon) {
      addressValidation.values.couponApplied = coupon.code;
    }

    dispatch(actionCreateOrder(
      addressValidation.values,
    ));
    // addressValidation.handleSubmit();
  };

  useEffect(() => {
    dispatch(actionGetCart());
  }, [dispatch]);

  useEffect(() => {
    addressValidation.handleChange(
      { target: { name: 'province', value: addressValidation.values?.addressShipping?.province } },
      'addressShipping.province',
    );
  }, [addressValidation.values?.addressShipping?.province]);

  return (
    <main id="main" className="">
      <div className="checkout-page-title page-title" />
      <div className="cart-container container page-wrapper page-checkout">
        <div className="woocommerce">
          <div className="woocommerce-notices-wrapper" />
          <div className="woocommerce-notices-wrapper" />
          <form name="checkout" className="checkout woocommerce-checkout " onSubmit={addressValidation.handleSubmit}>
            <div className="row pt-0 ">
              <div className="large-7 col  ">
                <div id="customer_details">
                  <div className="clear">
                    <div className="woocommerce-billing-fields">
                      <h3>Địa chỉ giao hàng</h3>

                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p className="form-row form-row-wide validate-required" id="billing_first_name_field" data-priority="10">
                          <label htmlFor="name" className="">
                            Họ và tên&nbsp;
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text"
                              name="name"
                              id="billing_first_name"
                              placeholder="Nhập họ và tên"
                              value={addressValidation.values.name}
                              onChange={addressValidation.handleChange}
                            />
                          </span>
                        </p>

                        <p className="form-row form-row-first validate-required validate-phone" id="billing_phone_field" data-priority="20">
                          <label htmlFor="phoneNumber" className="">
                            Số điện thoại&nbsp;
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text"
                              name="phoneNumber"
                              id="billing_phone"
                              placeholder="Nhập số điện thoại của bạn"
                              value={addressValidation.values.phoneNumber}
                              onChange={addressValidation.handleChange}
                              autoComplete="tel"
                            />
                          </span>
                        </p>

                        <p className="form-row form-row-last validate-required validate-email" id="billing_email_field" data-priority="21">
                          <label htmlFor="email" className="">
                            Địa chỉ email&nbsp;
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="email"
                              className="input-text"
                              name="email"
                              id="billing_email"
                              placeholder="Nhập email"
                              value={addressValidation.values.email}
                              onChange={addressValidation.handleChange}
                              autoComplete="email username"
                            />
                          </span>
                        </p>
                        <p className="form-row form-row-first devvn-address-field validate-required" id="billing_state_field" data-priority="30">
                          <label htmlFor="province" className="">
                            Tỉnh / Thành phố&nbsp;
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="province"
                              id="province"
                              className="select"
                              data-placeholder="Chọn tỉnh / thành phố"
                              tabIndex="-1"
                              aria-hidden="true"
                              value={province}
                              onChange={(e) => setProvince(e.target.value)}
                            >
                              <option value="" selected="selected">Chọn tỉnh / thành phố</option>
                              <option value="HANOI">Hà Nội</option>
                              <option value="HOCHIMINH">Tp. Hồ Chí Minh</option>
                              <option value="ANGIANG">An Giang</option>
                              <option value="BACGIANG">Bắc Giang</option>
                              <option value="BACKAN">Bắc Kạn</option>
                              <option value="BACLIEU">Bạc Liêu</option>
                              <option value="BACNINH">Bắc Ninh</option>
                              <option value="BARIAVUNGTAU">Bà Rịa - Vũng Tàu</option>
                              <option value="BENTRE">Bến Tre</option>
                              <option value="BINHDINH">Bình Định</option>
                              <option value="BINHDUONG">Bình Dương</option>
                              <option value="BINHPHUOC">Bình Phước</option>
                              <option value="BINHTHUAN">Bình Thuận</option>
                              <option value="CAMAU">Cà Mau</option>
                              <option value="CANTHO">Cần Thơ</option>
                              <option value="CAOBANG">Cao Bằng</option>
                              <option value="DAKLAK">Đắk Lắk</option>
                              <option value="DAKNONG">Đắk Nông</option>
                              <option value="DANANG">Đà Nẵng</option>
                              <option value="DIENBIEN">Điện Biên</option>
                              <option value="DONGNAI">Đồng Nai</option>
                              <option value="DONGTHAP">Đồng Tháp</option>
                              <option value="GIALAI">Gia Lai</option>
                              <option value="HAGIANG">Hà Giang</option>
                              <option value="HAIDUONG">Hải Dương</option>
                              <option value="HAIPHONG">Hải Phòng</option>
                              <option value="HANAM">Hà Nam</option>
                              <option value="HATINH">Hà Tĩnh</option>
                              <option value="HAUGIANG">Hậu Giang</option>
                              <option value="HOABINH">Hòa Bình</option>
                              <option value="HUNGYEN">Hưng Yên</option>
                              <option value="KHANHHOA">Khánh Hòa</option>
                              <option value="KIENGIANG">Kiên Giang</option>
                              <option value="KONTUM">Kon Tum</option>
                              <option value="LAICHAU">Lai Châu</option>
                              <option value="LAMDONG">Lâm Đồng</option>
                              <option value="LANGSON">Lạng Sơn</option>
                              <option value="LAOCAI">Lào Cai</option>
                              <option value="LONGAN">Long An</option>
                              <option value="NAMDINH">Nam Định</option>
                              <option value="NGHEAN">Nghệ An</option>
                              <option value="NINHBINH">Ninh Bình</option>
                              <option value="NINHTHUAN">Ninh Thuận</option>
                              <option value="PHUTHO">Phú Thọ</option>
                              <option value="PHUYEN">Phú Yên</option>
                              <option value="QUANGBINH">Quảng Bình</option>
                              <option value="QUANGNAM">Quảng Nam</option>
                              <option value="QUANGNGAI">Quảng Ngãi</option>
                              <option value="QUANGNINH">Quảng Ninh</option>
                              <option value="QUANGTRI">Quảng Trị</option>
                              <option value="SOCTRANG">Sóc Trăng</option>
                              <option value="SONLA">Sơn La</option>
                              <option value="TAYNINH">Tây Ninh</option>
                              <option value="THAIBINH">Thái Bình</option>
                              <option value="THAINGUYEN">Thái Nguyên</option>
                              <option value="THANHHOA">Thanh Hóa</option>
                              <option value="THUATHIENHUE">Thừa Thiên Huế</option>
                              <option value="TIENGIANG">Tiền Giang</option>
                              <option value="TRAVINH">Trà Vinh</option>
                              <option value="TUYENQUANG">Tuyên Quang</option>
                              <option value="VINHLONG">Vĩnh Long</option>
                              <option value="VINHPHUC">Vĩnh Phúc</option>
                              <option value="YENBAI">Yên Bái</option>
                            </select>
                          </span>
                        </p>
                        <p className="form-row form-row-last address-field update_totals_on_change validate-required validate-required" id="billing_city_field" data-priority="40">
                          <label htmlFor="district" className="">
                            Quận / Huyện
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          {/* <span className="woocommerce-input-wrapper">
                            <select
                              name="billing_city"
                              id="billing_city"
                              className="select select2-hidden-accessible"
                              data-allow_clear="true"
                              data-placeholder="Chọn quận / huyện"
                              tabIndex="-1"
                              aria-hidden="true"
                              value={addressValidation.values.addressShipping.district}
                              onChange={addressValidation.handleChange}
                            >
                              <option value="" selected="selected">Chọn quận / huyện</option>
                            </select>
                          </span>
                          <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '355.188px' }}>
                            <span className="selection">
                              <span className="select2-selection select2-selection--single" role="combobox" aria-controls="dropdown-list" aria-expanded="false" aria-haspopup="true" tabIndex="0" aria-labelledby="select2-billing_city-container">
                                <span className="select2-selection__rendered" id="select2-billing_city-container"><span className="select2-selection__placeholder">Chọn quận / huyện</span></span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true" />
                          </span> */}
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              name="district"
                              id="district"
                              className="input-text"
                              placeholder="Nhập quận / huyện"
                              value={addressValidation.values.addressShipping.district}
                              onChange={(e) => {
                                const newValue = e.target.value;
                                addressValidation.handleChange({
                                  target: { name: 'addressShipping.district', value: newValue },
                                });
                              }}
                            />
                          </span>
                        </p>

                        <p className="form-row form-row-last address-field update_totals_on_change validate-required validate-required" id="billing_city_field" data-priority="40">
                          <label htmlFor="ward" className="">
                            Xã
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          {/* <span className="woocommerce-input-wrapper">
                            <select
                              name="billing_ward"
                              id="billing_ward"
                              className="select select2-hidden-accessible"
                              data-allow_clear="true"
                              data-placeholder="Chọn xã"
                              tabIndex="-1"
                              aria-hidden="true"
                              value={addressValidation.values.addressShipping.ward}
                              onChange={addressValidation.handleChange}
                            >
                              <option value="" selected="selected">Chọn xã</option>
                            </select>
                          </span>
                          <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '355.188px' }}>
                            <span className="selection">
                              <span className="select2-selection select2-selection--single" role="combobox" aria-controls="dropdown-list" aria-expanded="false" aria-haspopup="true" tabIndex="0" aria-labelledby="select2-billing_city-container">
                                <span className="select2-selection__rendered" id="select2-billing_city-container"><span className="select2-selection__placeholder">Chọn quận / huyện</span></span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true" />
                          </span> */}
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              name="ward"
                              id="ward"
                              className="input-text"
                              placeholder="Nhập xã"
                              value={addressValidation.values.addressShipping.ward}
                              onChange={(e) => {
                                const newValue = e.target.value;
                                addressValidation.handleChange({
                                  target: { name: 'addressShipping.ward', value: newValue },
                                });
                              }}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="clear">
                    <div className="woocommerce-shipping-fields" />
                    <div className="woocommerce-additional-fields">

                      <h3>Thông tin thêm</h3>

                      <div className="woocommerce-additional-fields__field-wrapper">
                        <p className="form-row notes" id="order_comments_field" data-priority="">
                          <label htmlFor="note" className="">
                            Lưu ý cho đơn hàng&nbsp;
                            <span className="optional">(tuỳ chọn)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <textarea
                              name="note"
                              className="input-text "
                              id="note"
                              placeholder="Viết các lưu ý cho đơn hàng của bạn, ví dụ: lưu ý đặc biệt khi vận chuyển."
                              rows="2"
                              cols="5"
                              value={addressValidation.values.addressShipping.note}
                              onChange={(e) => {
                                const newValue = e.target.value;
                                addressValidation.handleChange({
                                  target: { name: 'addressShipping.note', value: newValue },
                                });
                              }}
                              onBlur={addressValidation.handleBlur}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Phương thức thanh toán</h3>

                <div className="wc_payment_methods payment_methods methods">
                  <div className="payment-method-wrapper">
                    <div className="wc_payment_method payment_method_bacs">
                      <input
                        id="payment_method_bacs"
                        type="radio"
                        className="input-radio"
                        name="PaymentMethod"
                        value="bacs"
                        data-order_button_text=""
                        onChange={addressValidation.handleChange}
                        checked={addressValidation.values.PaymentMethod === 'BACS'}
                      />
                      <label htmlFor="payment_method_bacs">
                        <img className="lazy-load-active" decoding="async" src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/ic-bacs.png" data-src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/ic-bacs.png" alt="bacs" />
                        Chuyển khoản ngân hàng

                      </label>
                    </div>
                    <div className="wc_payment_method payment_method_cod">
                      <input
                        id="payment_method_cod"
                        type="radio"
                        className="input-radio"
                        name="PaymentMethod"
                        value="cod"
                        data-order_button_text=""
                        onChange={addressValidation.handleChange}
                        checked={addressValidation.values.PaymentMethod === 'COD'}
                      />
                      <label htmlFor="payment_method_cod">
                        <img className="lazy-load-active" decoding="async" src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/ic-cod.png" data-src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/ic-cod.png" alt="cod" />
                        Thanh toán khi nhận hàng
                      </label>
                    </div>
                  </div>

                  <div className="payment-method-content-wrapper">
                    <div className="payment_box payment_method_bacs">
                      <div>
                        <h4>Ngân hàng Vietcombank</h4>
                        <div>
                          <p>Số tài khoản : 000000000****</p>
                          <p>Tên chủ tài khoản:</p>
                          <p>CT CP NOI THAT AKA VIETCOMBANK – CHI NHÁNH TP.HCM.</p>
                        </div>
                      </div>
                    </div>
                    <div className="payment_box payment_method_cod" style={{ display: 'none' }}>
                      <p>Pay with cash upon delivery.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="large-5 col">
                <div className="col-inner has-border">
                  <div className="checkout-sidebar sm-touch-scroll">
                    <h3 id="order_review_heading">Tóm tắt đơn hàng</h3>

                    <div id="order_review" className="woocommerce-checkout-review-order">
                      <table className="shop_table woocommerce-checkout-review-order-table">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Thành tiền</th>
                            <td>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  {cart && formatPriceWithCommas(cart?.reduce((accumulator, item) => {
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                          <tr className="order-total">
                            <th>Tổng cộng</th>
                            <td>
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    {cart && Array.isArray(cart) && cart.length > 0 ? (
                                      coupon && coupon.discount ? (
                                        formatPriceWithCommas(
                                          (coupon.discount / 100)
                                          * cart?.reduce((accumulator, item) => {
                                            const { totalPriceItem } = item;
                                            const totalPrice = totalPriceItem;
                                            return accumulator + totalPrice;
                                          }, 0),
                                        )
                                      ) : (
                                        formatPriceWithCommas(
                                          cart?.reduce((accumulator, item) => {
                                            const { totalPriceItem } = item;
                                            const totalPrice = totalPriceItem;
                                            return accumulator + totalPrice;
                                          }, 0),
                                        )
                                      )
                                    ) : (
                                      0
                                    )}
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </bdi>
                                </span>
                              </strong>
                            </td>
                          </tr>

                          <tr className="product-title">
                            <th colSpan="2">
                              Sản phẩm
                              <span className="total_count">{cart && cart.length > 0 ? cart.length : 0}</span>
                            </th>
                          </tr>

                          {cart
                          && cart.map((item) => <CheckoutItem key={item._id} item={item} />)}
                        </tbody>
                      </table>

                      <input type="hidden" name="lang" value="vi" />
                      <div id="payment" className="woocommerce-checkout-payment">
                        <div className="form-row place-order">
                          <noscript>
                            Since your browser does not support JavaScript, or it is disabled, please ensure you click the
                            {' '}
                            <em>Update Totals</em>
                            {' '}
                            button before placing your order. You may be charged more than the amount stated above if you fail to do so.
                            <br />
                            <button type="submit" className="button alt" name="woocommerce_checkout_update_totals" value="Cập nhật giá tiền">Cập nhật giá tiền</button>
                          </noscript>

                          <div className="woocommerce-terms-and-conditions-wrapper">
                            <div className="woocommerce-terms-and-conditions" style={{ display: 'none', maxHeight: '200px', overflow: 'auto' }}>
                              {' '}
                              <section className="section" id="section_485903073">
                                <div className="bg section-bg fill bg-fill  bg-loaded" />

                                <div className="section-content relative">
                                  <p />
                                  <p />
                                  <div className="row" id="row-62862013">
                                    <p />
                                    <p />
                                    <div id="col-1979697123" className="col small-12 large-12">
                                      <div className="col-inner">

                                        <p />
                                        <p><strong>CHÍNH SÁCH BÁN HÀNG</strong></p>
                                        <p>
                                          <strong>
                                            1
                                            <span style={{ fontSize: '14.4px' }}>.</span>
                                            {' '}
                                            Thanh toán
                                          </strong>
                                        </p>
                                        <div id="content" className="content-area" role="main">
                                          <p>Nhà Xinh chỉ áp dụng duy nhất một hình thức thanh toán online qua thẻ tín dụng, chuyển khoản, cụ thể:</p>
                                          <ul>
                                            <li>Bước 1: Khách hàng tìm hiểu thông tin về sản phẩm.</li>
                                            <li>Bước 2: Khách hàng xác thực đơn hàng (điện thoại, tin nhắn, email).</li>
                                            <li>Bước 3: Khách hàng đồng ý các điều khoản mua hàng, chi phí giao hàng và lắp đặt.</li>
                                            <li>Bước 4: Khách hàng thanh toán qua các thẻ ATM/VISA/CREDIT CARD.</li>
                                            <li>Bước 5: Hệ thống Nhà Xinh xác nhận thông tin khách hàng và giao hàng.</li>
                                            <li>Bước 6: Khách hàng nhận hàng, kiểm tra và xác nhận với nhân viên.</li>
                                          </ul>
                                          <p><strong>2. Chính sách lưu kho (Bên mua gửi/ lưu giữ hàng hóa tại kho của bên bán).</strong></p>
                                          <p>Thỏa thuận lưu kho, phí lưu kho và điều kiện lưu kho sẽ được ký kết nếu khách hàng có nhu cầu kí gửi hàng hóa.</p>
                                          <p>
                                            3
                                            <strong>. ĐƠN HÀNG CÓ HIỆU LỰC.</strong>
                                          </p>
                                          <p>Đơn hàng có hiệu lực là đơn hàng sau khi Quý khách đã thanh toán và nhận được xác nhận của nhân viên bán hàng Nhà Xinh.</p>
                                          <p>Quý khách không được hủy đơn hàng sau khi đã thanh toán và nhận được xác nhận của nhân viên bán hàng Nhà Xinh.</p>
                                          <p>
                                            4
                                            <strong>. QUY ĐỊNH ĐỔI TRẢ HÀNG HÓA.</strong>
                                          </p>
                                          <p>
                                            4.1. Các trường hợp h
                                            <strong>ợp được đổi hàng:</strong>
                                          </p>
                                          <p>Nhà Xinh sẽ thực hiện việc đổi, trả hàng hóa theo các điều kiện sau:</p>
                                          <ul>
                                            <li>Hàng không đủ số lượng, đủ bộ, hoặc không đúng chủng loại theo như trong đơn đặt hàng của Quý khách.</li>
                                            <li>Hàng bị lỗi, không đạt chất lượng.</li>
                                          </ul>
                                          <p><strong>4.2. Các trường hợp KHÔNG được đổi trả hàng hóa:</strong></p>
                                          <ul>
                                            <li>– Sản phẩm đã sử dụng, dơ bẩn, hoặc hư hại.</li>
                                            <li>– Sản phẩm không có đầy đủ chứng từ, hóa đơn.</li>
                                            <li>– Sản phẩm mua theo các diện thanh lý, khuyến mại, bán hiện trạng.</li>
                                            <li>– Sản phẩm đã được Quý khách ký vào biên bản nhận hàng.</li>
                                          </ul>
                                          <p><strong>CHÍNH SÁCH GIAO HÀNG</strong></p>
                                          <p>
                                            1.
                                            <strong> PHẠM VI ÁP DỤNG</strong>
                                          </p>
                                          <p>Tất cả các đơn hàng có nhu cầu giao hàng và lắp đặt tại nhà được đặt mua theo hình thức mua online (qua website nhaxinh.com, điện thoại, fanpage…).</p>
                                          <p><strong>2. THỜI GIAN GIAO HÀNG.</strong></p>
                                          <p>– Chính sách giao hàng được áp dụng trong giờ hành chính từ thứ 2 đến hết thứ 7 (trừ chủ nhật, ngày lễ, tết).</p>
                                          <p>– Đối với các đơn hàng có sản phẩm cần lắp đặt, nhân viên giao hàng và kỹ thuật sẽ đến tận nhà lắp đặt cho Quý khách.</p>
                                          <p>– Đơn hàng giao tại nội thành Hà Nội, Hồ Chí Minh:</p>
                                          <p>• Đối với các sản phẩm có sẵn tại kho và showroom: khách hàng đặt hàng từ 09h-17h sẽ được giao vào ngày hôm sau.</p>
                                          <p>• Đối với đơn hàng phát sinh sau 17h: sẽ được giao trong 02 ngày làm việc.</p>
                                          <p>• Đối với các sản phẩm đặt hàng: thời gian giao hàng sẽ được thỏa thuận giữa hai bên.</p>
                                          <p>– Đơn hàng đi tỉnh hoặc khu vực ngoại thành Hà Nội, Hồ Chí Minh sẽ được hoàn tất trong 02 – 04 ngày làm việc (trừ trường hợp chờ hàng).</p>
                                          <p>– Lịch giao hàng trong thời gian diễn ra chương trình khuyến mại sẽ được nhân viên chúng tôi thông báo cụ thể tới quý khách.</p>
                                          <p><strong>3. BIỂU PHÍ GIAO HÀNG – LẮP ĐẶT.</strong></p>
                                          <p>– Biểu phí giao hàng bao gồm chi phí vận chuyển và chi phí nhân công giao hàng – lắp đặt (nếu có và đã bao gồm VAT).</p>
                                          <p>– Áp dụng lắp đặt cho các nhóm hàng nội thất. Không bao gồm nhóm đèn điện và các nhóm hàng khác.</p>
                                          <p>– Biểu phí giao hàng:</p>
                                          <p>• Đơn hàng dưới 10 triệu đồng: 350.000đ/ 1 chuyến trong nội thành Hà Nội và Hồ Chí Minh.</p>
                                          <p>• Đơn hàng từ 10 triệu đồng trở lên: miễn phí vận chuyển và lắp đặt trong nội thành Hà Nội và Hồ Chí Minh.</p>
                                          <p>• Đơn hàng đi tỉnh hoặc khu vực ngoại thành Hà Nội, Hồ Chí Minh sẽ được thông báo mức phí cụ thể tới Quý khách sau khi Nhà Xinh tiếp nhận thông tin đơn hàng.</p>
                                          <p>– Lưu ý: Các loại phụ phí khác như lưu kho, phí khoan tường, phí tháo dỡ, phí giao tới địa điểm không thuận lợi như trên tầng/ lầu cao không có hoặc không sử dụng được thang máy; hoặc khu vực lắp đặt phải thuê xe cẩu đưa hàng hóa lên cao; hoặc mặt bằng khu vực lắp đặt không đảm bảo điều kiện có phát sinh chi phí vận chuyển; hoặc các trường hợp khác,… Chúng tôi sẽ thông báo mức phí cụ thể tới quý khách.</p>
                                          <p>
                                            4.
                                            <strong>CÁC ĐIỀU KIỆN KHÁC.</strong>
                                          </p>
                                          <p>– Quý khách vui lòng kiểm tra hàng hóa trước khi ký nhận hàng hóa. Quý khách có thể từ chối nhận hàng nếu hàng hóa đã bị vỡ hỏng do quá trình vận chuyển hoặc Quý khách liên hệ trực tiếp với nhân viên bán hàng để được tư vấn cụ thể.</p>
                                          <p>– Trường hợp công ty đã vận chuyển đến địa điểm giao nhận như thỏa thuận, nhưng vì một lý do khách hàng thay đổi địa điểm nhận hàng; khách hàng phải chịu chi phí vận chuyển cho việc đổi địa điểm giao hàng theo biểu phí của công ty. Mức phí này sẽ được nhân viên Nhà Xinh thông báo đến Quý khách.</p>
                                          <p>– Trong trường hợp khách hàng có thay đổi về thời gian nhận hàng so với thỏa thuận khi mua hàng, cần báo trước cho chúng tôi ít nhất trước 24h với khách hàng nội thành và ít nhất 48h đối với khách hàng có khoảng cách trên 30km từ showroom mua hàng.</p>
                                          <p>– Trường hợp công ty đã vận chuyển đến địa điểm giao nhận nhưng không liên lạc được với quý khách, chúng tôi sẽ để lại tin nhắn thông báo. Chúng tôi sẽ tính phí giao hàng nếu giao hàng không thành công.</p>
                                          <p>– Trong một số trường hợp khách quan chúng tôi có thể giao hàng chậm do điều kiện bất khả kháng: thời tiết xấu, thiên tai, điều kiện giao thông, giờ cấm đường hoặc vào thời điểm lễ tết, sự kiện đặc biệt dẫn tới thay đổi thời gian giao hàng, công ty sẽ liên lạc thông báo và điều chỉnh thời gian giao hàng cụ thể cho khách hàng.</p>
                                          <p>– Nhân viên của chúng tôi chỉ lắp đặt sản phẩm trong điều kiện mặt bằng sử dụng đã sẵn sàng. Nhân viên không được phép thực hiện bất kỳ công việc nào khác ngoài việc lắp đặt sản phẩm.</p>
                                          <p>– Nhân viên giao hàng – lắp đặt không được phép thu thêm bất cứ khoản chi phí nào ngoài các chi phí được thông báo từ bộ phận bán hàng.</p>
                                          <p>– Với tất cả các điều kiện trên, quý khách hàng có yêu cầu khác, vui lòng hệ với nhân viên chăm sóc khách hàng hoặc cửa hàng để được tư vấn, hỗ trợ đầy đủ nhất.</p>
                                          <p>– Các chính sách và điều khoản có thể được chúng tôi thay đổi cho phù hợp nhất mà không cần báo trước.</p>
                                          <p><strong>CHÍNH SÁCH BẢO HÀNH</strong></p>
                                          <p><strong>1. ĐIỀU KHOẢN CHUNG VỀ THỜI HẠN BẢO HÀNH.</strong></p>
                                          <p>– Thời gian bảo hành các sản phẩm: 01 năm, kể từ khi nhận hàng. Nếu có trường hợp đặc biệt, nhân viên Nhà Xinh sẽ thông báo đến Quý khách.</p>
                                          <p>– Các sản phẩm hàng trang trí không áp dụng bảo hành nhưng áp dụng theo chính sách đổi trả hàng hoá.</p>
                                          <p>– Chính sách bảo hành có hiệu lực từ thời điểm bên mua nhận sản phẩm (Căn cứ theo Phiếu xuất kho kiêm biên bản bàn giao &amp; phiếu bảo hành).</p>
                                          <p>
                                            2
                                            <strong>. ĐIỀU KIỆN BẢO HÀNH.</strong>
                                          </p>
                                          <p>– Các sản phẩm vẫn nằm trong thời gian bảo hành của bên bán.</p>
                                          <p>– Khách hàng cung cấp đầy đủ Phiếu xuất kho kiêm biên bản bàn giao &amp; phiếu bảo hành.</p>
                                          <p>– Bên bán chỉ bảo hành cho các lỗi phát sinh trong quá trình sản xuất sản phẩm.</p>
                                          <p><strong>3. QUY TRÌNH BẢO HÀNH.</strong></p>
                                          <p>– Cửa hàng phụ trách kiểm tra sản phẩm, xác định các trường hợp thuộc phạm vi bảo hành.</p>
                                          <p>– Với sản phẩm thuộc phạm vi bảo hành, cửa hàng sẽ quyết định việc sửa chữa hoặc thay thế hoặc hoàn đổi lại sản phẩm.</p>
                                          <p>– Đối với các sản phẩm không còn tiếp tục kinh doanh, nếu nằm trong phạm vi bảo hành, không thể sửa chữa thì bên bán sẽ thay thế bằng sản phẩm có giá trị tương đồng.</p>
                                          <p>– Bên bán kiểm tra sản phẩm trong vòng 48h, hoàn tất bảo hành trong vòng 48h tiếp theo. Với trường hợp đặc biệt bên mua và bên bán thống nhất thời gian bảo hành.</p>
                                          <p>
                                            4.
                                            <strong> PHẠM VI BẢO HÀNH.</strong>
                                          </p>
                                          <p>Nhà Xinh bảo hành cho các sản phẩm đáp ứng đủ hai điều kiện sau:</p>
                                          <p>• Sản phẩm hư hỏng do lỗi kỹ thuật của nhà sản xuất và;</p>
                                          <p>• Sản phẩm còn trong thời hạn bảo hành.</p>
                                          <p>Nhà Xinh không bảo hành trong các trường hợp sau:</p>
                                          <p>• Khách hàng tự ý sửa chữa khi sản phẩm gặp trục trặc.</p>
                                          <p>• Sản phẩm trầy xước, hư hỏng do khách hàng không sử dụng theo đúng hướng dẫn.</p>
                                          <p>• Sản phẩm được xử lý chống mọt từ bên trong, mọi tác động do môi trường bên ngoài như: ẩm ướt, mối, chuột,… sẽ không được bảo hành.</p>
                                          <p>• Sản phẩm bị ngập nước, gây nở, cong, vênh.</p>
                                          <p>• Sản phẩm bị tác động của hơi nước, lửa,… do việc lắp đặt của các thiết bị điện nước của khách hàng không đảm bảo an toàn.</p>
                                          <p>• Sản phẩm không có phiếu bảo hành của công ty.</p>
                                          <p>• Sản phẩm bị hao mòn tự nhiên theo tính chất của từng loại vật liệu.</p>
                                          <p>• Sản phẩm không được bảo dưỡng đúng cách.</p>
                                          <p>Để biết thêm thông tin, vui lòng liên hệ với cửa hàng hoặc liên hệ trực tiếp bộ phận chăm sóc khách hàng:</p>
                                          <p>• Hotline: 1800 7200</p>
                                          <p>
                                            • Email:
                                            <a href="mailto:nhaxinhcare@akacompany.com.vn">nhaxinhcare@akacompany.com.vn</a>
                                          </p>
                                          <p>
                                            • Website:
                                            <a href="https://nhaxinh.com">www.nhaxinh.com</a>
                                          </p>
                                        </div>
                                        <p><strong>CHÍNH SÁCH BẢO MẬT THANH TOÁN</strong></p>
                                        <p><strong>1. CAM KẾT BẢO MẬT.</strong></p>
                                        <p>Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại Nhà Xinh đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.</p>
                                        <p><strong>2. QUY ĐỊNH BẢO MẬT.</strong></p>
                                        <p>– Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán gồm:</p>
                                        <ul>
                                          <li>Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer).</li>
                                          <li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
                                          <li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</li>
                                          <li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
                                          <li>Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.</li>
                                        </ul>
                                        <p>– Chính sách bảo mật giao dịch trong thanh toán của Nhà Xinh áp dụng với Khách hàng:</p>
                                        <ul>
                                          <li>Nhà Xinh cung cấp tiện ích lưu giữ token – chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp. Nhà Xinh không trực tiếp lưu trữ thông tin thẻ khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.</li>
                                          <li>Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống của www.nhaxinh.com . Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.</li>
                                          <li>Đối với thẻ nội địa (internet banking), Nhà Xinh chỉ lưu trữ mã đơn hàng, mã giao dịch và tên ngân hàng.</li>
                                        </ul>
                                        <p>Nhà Xinh cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên website www.nhaxinh.com.</p>
                                        <p>Tôi đã đọc và đồng ý điều kiện đổi trả hàng, giao hàng, chính sách bảo mật, điều khoản dịch vụ mua hàng online.</p>
                                        <p />
                                      </div>
                                    </div>

                                    <p />
                                    <p />
                                  </div>
                                  <p />
                                  <p />
                                </div>

                              </section>

                            </div>
                            <p className="form-row validate-required">
                              <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                <input type="checkbox" className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="terms" id="terms" />
                                <span className="woocommerce-terms-and-conditions-checkbox-text">
                                  Tôi đã đọc và đồng ý
                                  <a className="woocommerce-terms-and-conditions-link" target="_blank" href="/dieu-khoan-ban-hang-online/">điều kiện đổi trả hàng, giao hàng, chính sách bảo mật, điều khoản dịch vụ mua hàng online</a>
                                </span>
                                <span className="required">*</span>
                              </label>
                              <input type="hidden" name="terms-field" value="1" />
                            </p>
                          </div>

                          <button type="submit" onClick={handleCreateOrder} className="button alt">Đặt mua</button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </form>

        </div>
      </div>

    </main>
  );
}

export default CheckoutPage;
