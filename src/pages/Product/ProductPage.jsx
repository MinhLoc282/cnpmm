/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Flickity from 'react-flickity-component';

import { actionAddToCart, actionUpdateUserWishlist, actionGetProductDetail } from 'store/actions';

import PageTitle from './PageTitle/PageTitle';

import { formatPriceWithCommas, convertToSlug } from 'utils';

let flickityMainRef = null;
let flickityThumbRef = null;

function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.Product.productDetail);

  const [currentSeletedIndex, setCurrentSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const flickityOptions = {
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    adaptiveHeight: true,
    imagesLoaded: true,
    lazyLoad: 1,
    dragThreshold: 15,
    pageDots: false,
    rightToLeft: false,
    asNavFor: '.product-thumbnails',
  };

  const flickityThumbnailOptions = {
    cellAlign: 'left',
    wrapAround: false,
    autoPlay: false,
    prevNextButtons: false,
    asNavFor: '.product-gallery-slider',
    percentPosition: true,
    imagesLoaded: true,
    freeScroll: true,
    pageDots: false,
    rightToLeft: false,
    contain: true,
  };

  const handlePrevClick = () => {
    flickityThumbRef.previous();
    flickityMainRef.previous();
    setCurrentSelectedIndex(flickityMainRef.selectedIndex);
  };

  const handleNextClick = () => {
    flickityThumbRef.next();
    flickityMainRef.next();
    setCurrentSelectedIndex(flickityMainRef.selectedIndex);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(actionAddToCart({ productId: product._id, quantity }));
  };

  const handleAddToWishlist = (event) => {
    event.preventDefault();

    dispatch(actionUpdateUserWishlist({ prodId: product._id }));
  };

  const handleBuyNowClick = async () => {
    dispatch(actionAddToCart({ productId: product._id, quantity: 1 }));

    navigate('/gio-hang');
  };

  useEffect(() => {
    dispatch(actionGetProductDetail({ slug }));
  }, [dispatch]);

  useEffect(() => {
    if (flickityThumbRef) {
      flickityThumbRef.select(currentSeletedIndex);
    }
  }, [currentSeletedIndex]);

  return (
    <div>
      {product && (
      <>
        <PageTitle />

        <main id="main">

          <div className="shop-container">
            <div className="container">
              <div className="woocommerce-notices-wrapper" />
            </div>

            <div id={`product-${product._id}`} className="product type-product post-34192 status-publish first instock product_cat-phong-khach product_cat-sofa has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
              <div className="product-container">
                <div className="product-main">
                  <div className="row content-row mb-0">
                    <div className="product-gallery col large-7">
                      <div className="row row-small">
                        <div className="col large-10">
                          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images relative mb-half has-hover" data-columns="4" style={{ opacity: '1' }}>
                            <div className="badge-container is-larger absolute left top z-1" />

                            <div className="image-tools absolute top show-on-hover right z-3" />

                            <Flickity
                              className="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-0 is-draggable flickity-enabled slider-lazy-load-active"
                              elementType="div"
                              options={flickityOptions}
                              flickityRef={(c) => (flickityMainRef = c)}
                            >
                              {product.images.map((image, index) => (
                                <div
                                  key={image._id}
                                  data-thumb={image.url}
                                  className={`woocommerce-product-gallery__image slide ${
                                    index === 0 ? 'first' : ''
                                  }`}
                                  style={{ position: 'absolute', left: `${index * 100}%` }}
                                  aria-hidden={index !== 0 ? 'true' : 'false'}
                                >
                                  <a aria-label="image" href={image.url}>
                                    <img
                                      width="600"
                                      height="400"
                                      src={image.url}
                                      className="wp-post-image skip-lazy lazy-load-active"
                                      alt=""
                                      title={product.name}
                                      data-caption=""
                                      data-src={image.url}
                                      data-large_image={image.url}
                                      data-large_image_width="1000"
                                      data-large_image_height="666"
                                      decoding="async"
                                    />
                                  </a>
                                </div>
                              ))}
                            </Flickity>

                            <button
                              className="flickity-button flickity-prev-next-button previous"
                              type="button"
                              aria-label="Previous"
                              onClick={handlePrevClick}
                            >
                              <svg className="flickity-button-icon" viewBox="0 0 100 100">
                                <path
                                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                  className="arrow"
                                />
                              </svg>
                            </button>
                            <button
                              className="flickity-button flickity-prev-next-button next"
                              type="button"
                              aria-label="Next"
                              onClick={handleNextClick}
                            >
                              <svg className="flickity-button-icon" viewBox="0 0 100 100">
                                <path
                                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                  className="arrow"
                                  transform="translate(100, 100) rotate(180) "
                                />
                              </svg>
                            </button>

                            <div className="image-tools absolute bottom left z-3">
                              <a href="#product-zoom" className="zoom-button button is-outline circle icon tooltip hide-for-small tooltipstered">
                                <i className="icon-expand" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col large-2 large-col-first vertical-thumbnails pb-0">
                          <a href="javascript:void(0)" onClick={handlePrevClick} className="prev_arrow desktop">
                            <img src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/arrowdown.svg" alt="preview" />
                          </a>
                          <Flickity
                            className="product-thumbnails thumbnails slider row row-small row-slider slider-nav-small small-columns-4 is-draggable flickity-enabled slider-lazy-load-active"
                            elementType="div"
                            options={flickityThumbnailOptions}
                            style={{
                              left: 0,
                              transform: `translateX(-${currentSeletedIndex * 100}%)`,
                            }}
                            flickityRef={(c) => (flickityThumbRef = c)}
                          >
                            {product.images.map((image, index) => (
                              <div key={image._id} className={`col ${index === currentSeletedIndex ? 'is-selected is-nav-selected' : ''}`}>
                                <a>
                                  <img src={image.url} alt={`Thumbnail ${index + 1}`} width="300" height="" className="attachment-woocommerce_thumbnail" />
                                </a>
                              </div>
                            ))}
                          </Flickity>
                        </div>
                      </div>

                      <a href="javascript:void(0)" onClick={handleNextClick} className="next_arrow desktop">
                        <img src="https://nhaxinh.com/wp-content/themes/flatsome-child/assets/images/arrowdown.svg" alt="next" />
                      </a>
                    </div>

                    <div className="product-info summary col-fit col entry-summary product-summary">
                      <h1 className="product-title product_title entry-title">
                        {product.name}
                      </h1>

                      <div className="is-divider small" />
                      <div className="wishlist-wrapper">
                        <div className="wishlist-icon">
                          <button type="button" className="wishlist-button button is-outline circle icon" aria-label="Wishlist">
                            <i className="icon-heart-o" />
                          </button>
                          <div className="wishlist-popup dark">

                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-34192  wishlist-fragment on-first-load" data-fragment-ref="34192" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:&quot;34192&quot;,&quot;parent_product_id&quot;:&quot;34192&quot;,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">

                              <div className="yith-wcwl-add-button">
                                <a
                                  className="add_to_wishlist single_add_to_wishlist"
                                  data-title="Add to wishlist"
                                  rel="nofollow"
                                  onClick={handleAddToWishlist}
                                >
                                  <i className="yith-wcwl-icon fa fa-heart-o" />

                                  <span>Add to wishlist</span>
                                </a>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                      {!product.sale ? (
                        <div className="price-wrapper">
                          <p className="price product-page-price ">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                {formatPriceWithCommas(product.priceSale)}
                                <span className="woocommerce-Price-currencySymbol">₫</span>
                              </bdi>
                            </span>
                          </p>
                        </div>
                      )
                        : (
                          <div className="price-wrapper">
                            <p className="price product-page-price price-on-sale">
                              <del aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    {formatPriceWithCommas(product.price)}
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </bdi>
                                </span>
                              </del>

                              <ins>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    {formatPriceWithCommas(product.priceSale)}
                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                  </bdi>
                                </span>
                              </ins>
                            </p>
                          </div>
                        )}

                      <div className="product-attributes-wrapper">
                        {product.specs.map((spec) => (
                          <div key={spec._id} className="product-attribute product-attribute-item product-attribute-item-0">
                            <strong>{spec.k}</strong>
                            <span className="product-attribute-option">{spec.v}</span>
                          </div>
                        ))}

                      </div>
                      <div className="stock-available-wrapper">
                        <div>
                          Hàng có sẵn -

                          <a href="/" id="btn-view-stock-modal">Xem cửa hàng trưng bày</a>
                        </div>
                      </div>
                      <div className="product_meta">

                        <span className="sku_wrapper">
                          Mã:

                          <span className="sku">{product.code}</span>
                        </span>

                        <span className="posted_in">
                          Danh mục:
                          {' '}
                          <a href={`/${convertToSlug(product.room.nameRoom)}`} rel="tag">{product.room.nameRoom}</a>
                          ,
                          {' '}
                          <a href={`/danh-muc/${convertToSlug(product.category.nameCate)}`} rel="tag">{product.category.nameCate}</a>

                          {product.sale > 0 && (
                          <span>
                            ,
                            {' '}
                            <a href="/danh-muc/giam-gia-dac-biet" rel="tag">Giảm giá đặc biệt</a>
                          </span>
                          )}
                        </span>

                      </div>
                      <p className="stock in-stock">In stock</p>

                      <form className="cart" onSubmit={handleAddToCart}>
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus button is-form"
                            onClick={() => handleQuantityChange(-1)}
                          />
                          <label className="screen-reader-text" htmlFor={`quantity_${product._id}`}>
                            {`${product.name} quantity`}
                          </label>
                          <input
                            type="number"
                            id={`quantity_${product._id}`}
                            className="input-text qty text"
                            step="1"
                            min="1"
                            max="2"
                            name="quantity"
                            value={quantity}
                            title="Qty"
                            size="4"
                            placeholder=""
                            inputMode="numeric"
                            onChange={(e) => setQuantity(
                              Math.max(
                                1,
                                parseInt(e.target.value, 10) || 1,
                              ),
                            )}
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus button is-form"
                            onClick={() => handleQuantityChange(1)}
                          />
                        </div>
                        <a onClick={handleBuyNowClick} className="buy-now button">Mua ngay</a>

                        <button type="submit" name="add-to-cart" value="34192" className="single_add_to_cart_button button alt">Thêm vào giỏ</button>
                      </form>

                      <div className="hotline-wrapper">
                        Liên hệ tư vấn và đặt mua:
                        {' '}
                        <a className="hotline-phone" href="tel:18007200">18007200</a>
                      </div>

                      <div className="woocommerce-tabs wc-tabs-wrapper container tabbed-content">
                        <ul className="tabs wc-tabs product-tabs small-nav-collapse nav nav-uppercase nav-tabs nav-normal nav-left" role="tablist">
                          <li className="short-description_tab active" id="tab-title-short-description" role="tab" aria-controls="tab-short-description">
                            <a href="#tab-short-description">
                              Mô tả

                            </a>
                          </li>
                          <li className="659_tab" id="tab-title-659" role="tab" aria-controls="tab-659">
                            <a href="#tab-659">
                              Bảo hành

                            </a>
                          </li>
                          <li className="656_tab" id="tab-title-656" role="tab" aria-controls="tab-656">
                            <a href="#tab-656">
                              Vận chuyển

                            </a>
                          </li>
                        </ul>
                        <div className="tab-panels">
                          <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--short-description panel entry-content active" id="tab-short-description" role="tabpanel" aria-labelledby="tab-title-short-description">
                            Sofa Miami khoác lên mình một màu xám tinh tế,
                            tối giản, mang đến không gian phòng khách hiện đại,
                            trang nhã. Sofa Miami 2 chỗ vải xám sử dụng khung
                            gỗ bọc vải kết hợp cùng với phần nệm ngồi có thể
                            tháo rời, dễ dàng vệ sinh hiệu quả.
                          </div>
                          <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--659 panel entry-content " id="tab-659" role="tabpanel" aria-labelledby="tab-title-659">
                            <div className="tab-editor-container ywtm_content_tab" />

                            <div className="thehoivien" style={{ textAlign: 'justify' }}>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />
                                Các sản phẩm nội thất tại Nhà Xinh đa số đều
                                được sản xuất tại nhà máy của công ty cổ phần
                                xây dựng kiến trúc AA với đội ngũ nhân viên
                                và công nhân ưu tú cùng cơ sở vật chất hiện đại

                                <a href="http://www.aacorporation.com/">(http://www.aacorporation.com/)</a>
                                . Nhà Xinh đã kiểm tra kỹ lưỡng từ nguồn
                                nguyên liệu cho đến sản phẩm hoàn thiện cuối cùng.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />
                                Nhà Xinh bảo hành một năm cho các trường hợp có lỗi
                                về kỹ thuật trong quá trình sản xuất hay lắp đặt.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />
                                Quý khách không nên tự sửa chữa mà hãy báo ngay
                                cho Nhà Xinh qua hotline:

                                <a href="https://nhaxinh.com/#">1800 7200.</a>
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />
                                {' '}
                                Sau thời gian hết hạn bảo hành, nếu quý khách
                                có bất kỳ yêu cầu hay thắc mắc thì vui lòng
                                liên hệ với Nhà Xinh để được hướng dẫn và
                                giải quyết các vấn đề gặp phải.
                              </p>

                              <p>
                                <strong>
                                  TUY NHIÊN NHÀ XINH KHÔNG BẢO HÀNH CHO
                                  CÁC TRƯỜNG HỢP SAU:
                                </strong>
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                Khách hàng tự ý sửa chữa khi sản phẩm bị
                                trục trặc mà không báo cho Nhà Xinh.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                Sản phẩm được sử dụng không đúng quy cách
                                của sổ bảo hành (được trao gửi khi quý khách
                                mua sản phẩm) gây nên trầy xước, móp, dơ bẩn
                                hay mất màu.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                Sản phẩm bị biến dạng do môi trường bên ngoài
                                bất bình thường (quá ẩm, quá khô, mối hay do
                                tác động từ các thiết bị điện nước, các hóa
                                chất hay dung môi khách hàng sử dụng không
                                phù hợp).
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                Sản phẩm hết hạn bảo hành.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                Sản phẩm không có phiếu bảo hành của Nhà Xinh.
                              </p>
                              <p>
                                <img alt="check" src="https://nhaxinh.com/image/check.png" />

                                <a href="https://nhaxinh.com/index.php?menu=302">
                                  Xem nội dung sổ bảo hành
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--656 panel entry-content " id="tab-656" role="tabpanel" aria-labelledby="tab-title-656">

                          <div className="tab-editor-container ywtm_content_tab">
                            {' '}
                            <h4 className="big_title_store"><strong>GIAO HÀNG TẬN NƠI</strong></h4>
                            <div>
                              <div>
                                <p style={{ textAlign: 'justify' }}>Nhà Xinh cung cấp dịch vụ giao hàng tận nơi, lắp ráp và sắp xếp vị trí theo đúng ý muốn của quý khách:</p>
                                <p style={{ textAlign: 'justify' }}>- MIỄN PHÍ giao hàng trong các Quận nội thành Tp.Hồ Chí Minh và Hà Nội, áp dụng cho các đơn hàng trị giá trên 10 triệu.</p>
                                <p style={{ textAlign: 'justify' }}>- Đối với khu vực các tỉnh lân cận: Tính phí hợp lý theo dựa trên quãng đường vận chuyển</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-footer">
                  <div className="sp_addmore">
                    {' '}
                    <p className="same-h3">Lựa chọn màu &amp; kích thước khác</p>
                    <div className="list_iterm_pd">
                      <div className="container">
                        <div
                          style={{ backgroundColor: '#FFF' }}
                          className="slider flipContainer slider-nav-circle row-slider flickity-enabled slider-lazy-load-active"
                          data-flickity-options="{
                          &quot;cellAlign&quot;: &quot;center&quot;,
                          &quot;wrapAround&quot;: true,
                          &quot;percentPosition&quot;: true,
                          &quot;imagesLoaded&quot;: true,
                          &quot;pageDots&quot;: false,
                          &quot;contain&quot;: true
                        }"
                        >

                          <div className="flickity-viewport" style={{ height: '380px', touchAction: 'pan-y' }}>
                            <div className="flickity-slider" style={{ left: '0px', transform: 'translateX(1.71%)' }}>
                              <div className="row is-selected" style={{ position: 'absolute', left: '0%' }}>
                                <div className="iterm_pr col">
                                  <div className="img_thumb">
                                    <div data-thumb="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-100x100.jpg" className="woocommerce-product-gallery__image slide"><a href="https://nhaxinh.com/san-pham/sofa-miami-3-cho-1-armchair/"><img width="600" height="400" src="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1.jpg" className="skip-lazy lazy-load-active" alt="Sofa Miami 3 chỗ + 1 armchair hiện đại tiện nghi" title="95434-sofa-armchair-miami-1" data-caption="" data-src="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1.jpg" data-large_image="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1.jpg" data-large_image_width="1000" data-large_image_height="666" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1.jpg 1000w" data-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/95434-sofa-armchair-miami-1.jpg 1000w" sizes="(max-width: 600px) 100vw, 600px" /></a></div>
                                  </div>
                                  <div className="info_product">
                                    <div className="title-wrapper">
                                      <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link" href="https://nhaxinh.com/san-pham/sofa-miami-3-cho-1-armchair/" aria-label="Sofa Miami 3 chỗ + 1 armchair">
                                        Sofa Miami 3 chỗ + 1 armchair
                                      </a>
                                    </div>
                                    <div className="price">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          25,400,001
                                          <span className="woocommerce-Price-currencySymbol">₫</span>
                                        </bdi>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="iterm_pr col">
                                  <div className="img_thumb">
                                    <div
                                      data-thumb="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-100x100.jpg"
                                      className="woocommerce-product-gallery__image slide"
                                    >
                                      <a href="https://nhaxinh.com/san-pham/sofa-miami-3-cho-1-armchair-2/">
                                        <img
                                          width="600"
                                          height="400"
                                          src="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449.jpg"
                                          className="skip-lazy lazy-load-active"
                                          alt=""
                                          title="sofa-3-cho-miami-va-armchair-vai-99449"
                                          data-caption=""
                                          data-src="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449.jpg"
                                          data-large_image="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449.jpg"
                                          data-large_image_width="1000"
                                          data-large_image_height="666"
                                          decoding="async"
                                          srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449.jpg 1000w"
                                          data-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/sofa-3-cho-miami-va-armchair-vai-99449.jpg 1000w"
                                          sizes="(max-width: 600px) 100vw, 600px"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="info_product">
                                    <div className="title-wrapper">
                                      <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link" href="https://nhaxinh.com/san-pham/sofa-miami-3-cho-1-armchair-2/" aria-label="Sofa Miami 3 chỗ + 1 armchair">
                                        Sofa Miami 3 chỗ + 1 armchair
                                      </a>
                                    </div>
                                    <div className="price">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          25,400,001
                                          <span className="woocommerce-Price-currencySymbol">₫</span>
                                        </bdi>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="iterm_pr col">
                                  <div className="img_thumb">
                                    <div data-thumb="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-100x100.jpg" className="woocommerce-product-gallery__image slide"><a href="https://nhaxinh.com/san-pham/sofa-miami-2-cho-vai-vang/"><img width="600" height="400" src="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1.jpg" className="skip-lazy lazy-load-active" alt="Sofa Roya 2 chỗ vải màu vàng tươi tắn" title="sofa-miami-2-cho-boc-vai-vang-1" data-caption="" data-src="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1.jpg" data-large_image="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1.jpg" data-large_image_width="1000" data-large_image_height="666" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1.jpg 1000w" data-srcset="https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-600x400.jpg 600w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-601x400.jpg 601w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-768x511.jpg 768w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1-300x200.jpg 300w, https://nhaxinh.com/wp-content/uploads/2022/04/sofa-miami-2-cho-boc-vai-vang-1.jpg 1000w" sizes="(max-width: 600px) 100vw, 600px" /></a></div>
                                  </div>
                                  <div className="info_product">
                                    <div className="title-wrapper">
                                      <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link" href="https://nhaxinh.com/san-pham/sofa-miami-2-cho-vai-vang/" aria-label="Sofa Miami 2 chỗ vải vàng">
                                        Sofa Miami 2 chỗ vải vàng
                                      </a>
                                    </div>
                                    <div className="price">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          15,200,000
                                          <span className="woocommerce-Price-currencySymbol">₫</span>
                                        </bdi>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          <button className="flickity-button flickity-prev-next-button previous" type="button" disabled="" aria-label="Previous"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" /></svg></button>
                          <button className="flickity-button flickity-prev-next-button next" type="button" disabled="" aria-label="Next"><svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) " /></svg></button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <section className="section" id="section_1269107064">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse row-full-width align-equal design_air" id="row-334276307">
                <div id="col-300834076" className="col img_first_left medium-6 small-12 large-6">
                  <div className="col-inner">
                    <div className="img has-hover img_first_left x md-x lg-x y md-y lg-y" id="image_394955833">
                      <div className="img-inner dark">
                        <img width="970" height="640" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20970%20640'%3E%3C/svg%3E" className="attachment-large size-large" alt="" decoding="async" data-lazy-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle.jpeg 970w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-300x198.jpeg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-600x396.jpeg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-606x400.jpeg 606w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-768x507.jpeg 768w" data-lazy-sizes="(max-width: 970px) 100vw, 970px" data-lazy-src="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle.jpeg" />
                        <noscript><img width="970" height="640" src="wp-content/uploads/2021/10/Rectangle.jpg" className="attachment-large size-large" alt="" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle.jpeg 970w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-300x198.jpeg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-600x396.jpeg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-606x400.jpeg 606w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle-768x507.jpeg 768w" sizes="(max-width: 970px) 100vw, 970px" /></noscript>
                      </div>
                    </div>

                    <div id="text-2049894174" className="text ct_design">
                      <div className="ct_design">
                        <h2>Mẫu thiết kế phòng khách</h2>
                        <p>
                          Phòng khách là không gian chính của ngôi nhà,
                          là nơi sum họp  gia đình
                        </p>
                        <p>
                          <a href="phong-khach/index.html">
                            MẪU PHÒNG KHÁCH
                            <i className="fal fa-arrow-right" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="col-362044621" className="col first_right medium-6 small-12 large-6">
                  <div className="col-inner">
                    <div className="img has-hover img_first_right x md-x lg-x y md-y lg-y" id="image_1595276186">
                      <div className="img-inner dark">
                        <img width="533" height="800" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20533%20800'%3E%3C/svg%3E" className="attachment-large size-large" alt="" decoding="async" data-lazy-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3.jpg 533w, https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3-300x450.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3-267x400.jpg 267w" data-lazy-sizes="(max-width: 533px) 100vw, 533px" data-lazy-src="https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3.jpg" />
                        <noscript><img width="533" height="800" src="wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3.jpg" className="attachment-large size-large" alt="" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3.jpg 533w, https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3-300x450.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-may-net-viet-duong-dai-3-267x400.jpg 267w" sizes="(max-width: 533px) 100vw, 533px" /></noscript>
                      </div>
                    </div>

                    <div className="ct_design">
                      <h2>Đồ trang trí</h2>
                      <p>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>
                      <p>
                        <a href="danh-muc/hang-trang-tri/index.html">
                          KHÁM PHÁ
                          <i className="fal fa-arrow-right" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row secon_design" id="row-972319301">
                <div id="col-1903960622" className="col medium-6 small-12 large-6">
                  <div className="col-inner">
                    <div className="row secon_left" id="row-613268815">
                      <div id="col-1098808690" className="col medium-8 small-12 large-8">
                        <div className="col-inner">
                          <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_140137184">
                            <div className="img-inner dark">
                              <img width="800" height="639" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20800%20639'%3E%3C/svg%3E" className="attachment-large size-large" alt="" decoding="async" data-lazy-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007.jpg 800w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-300x240.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-600x479.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-501x400.jpg 501w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-768x613.jpg 768w" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007.jpg" />
                              <noscript><img width="800" height="639" src="wp-content/uploads/2021/10/SHOWROOM_007.jpg" className="attachment-large size-large" alt="" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007.jpg 800w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-300x240.jpg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-600x479.jpg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-501x400.jpg 501w, https://nhaxinh.com/wp-content/uploads/2021/10/SHOWROOM_007-768x613.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" /></noscript>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="col-789131928" className="col medium-4 small-12 large-4">
                        <div className="col-inner">
                          <div className="ct_design">
                            <h2>Mẫu thiết kế phòng ngủ</h2>
                            <p>
                              Những mẫu phòng ngủ của Nhà Xinh mang đến
                              cảm giác ấm cúng, gần gũi và thoải mái
                            </p>
                            <p>
                              <a href="phong-ngu/index.html">
                                MẪU PHÒNG NGỦ
                                <i className="fal fa-arrow-right" />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="col-309332333" className="col secon_right medium-6 small-12 large-6">
                  <div className="col-inner">
                    <div className="img has-hover img_secon_right x md-x lg-x y md-y lg-y" id="image_1360979314">
                      <div className="img-inner dark">
                        <img width="850" height="540" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20850%20540'%3E%3C/svg%3E" className="attachment-large size-large" alt="" decoding="async" data-lazy-srcset="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4.jpeg 850w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-300x191.jpeg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-600x381.jpeg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-630x400.jpeg 630w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-768x488.jpeg 768w" data-lazy-sizes="(max-width: 850px) 100vw, 850px" data-lazy-src="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4.jpeg" />
                        <noscript><img width="850" height="540" src="wp-content/uploads/2021/10/Rectangle4.jpg" className="attachment-large size-large" alt="" decoding="async" srcSet="https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4.jpeg 850w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-300x191.jpeg 300w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-600x381.jpeg 600w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-630x400.jpeg 630w, https://nhaxinh.com/wp-content/uploads/2021/10/Rectangle4-768x488.jpeg 768w" sizes="(max-width: 850px) 100vw, 850px" /></noscript>
                      </div>
                    </div>

                    <div className="ct_design">
                      <h2>Mẫu thiết kế phòng Ăn</h2>
                      <p>
                        Một bữa ăn ngon luôn là mong ước của mỗi gia đình.
                        Không gian phòng ăn đóng vai trò rất quan trọng
                        trong văn hóa Việt
                      </p>
                      <p>
                        MẪU PHÒNG ĂN
                        <a href="phong-an/index.html">
                          <i className="fal fa-arrow-right" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
      )}
    </div>
  );
}

export default ProductPage;
