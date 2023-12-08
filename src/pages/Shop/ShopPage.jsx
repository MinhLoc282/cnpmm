import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllProduct, actionGetUserWishlist } from 'store/actions';

import ProductItem from 'components/ProductItem/ProductItem';

function ShopPage() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Product.allProducts);
  const wishlist = useSelector((state) => state.Wishlist.wishlist);
  const totalProducts = useSelector((state) => state.Product.totalProducts);

  const totalPages = Math.ceil(totalProducts / 20);

  const isInWishlist = (productId) => wishlist && wishlist.some((item) => item._id === productId);

  const generatePageNumbers = (currentPage) => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (!totalPages) {
      return [pageNumbers];
    }

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, parseInt(currentPage, 10) - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i += 1) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  useEffect(() => {
    dispatch(actionGetUserWishlist());
  }, [dispatch]);

  useEffect(() => {
    if (pageNumber === undefined || Number.isNaN(Number(pageNumber))) {
      navigate('/cua-hang/page/1');
    } else {
      dispatch(actionGetAllProduct({ page: parseInt(pageNumber, 10), limit: 20 }));
    }
  }, [dispatch, pageNumber, navigate]);

  return (
    <>
      <div className="shop-page-title category-page-title page-title featured-title dark ">
        <div className="page-title-bg fill">
          <div
            className="title-bg fill bg-fill parallax-active"
            data-parallax-fade="true"
            data-parallax="-2"
            data-parallax-background=""
            data-parallax-container=".page-title"
            style={{
              height: '538.111px',
              transform: 'translate3d(0px, -15.9px, 0px)',
              backfaceVisibility: 'hidden',
            }}
          />
          <div className="title-overlay fill" />
        </div>

        <div className="page-title-inner flex-row  medium-flex-wrap container">
          <div className="flex-col flex-grow medium-text-center">
            <h1 className="shop-page-title is-xlarge">Sản phẩm</h1>
            <div className="is-small">
              <nav className="woocommerce-breadcrumb breadcrumbs ">
                <a href="/">Trang chủ</a>
                <span className="divider">/</span>
                Sản phẩm
              </nav>

            </div>
          </div>

          <div className="flex-col medium-text-center  form-flat">
            <p className="woocommerce-result-count hide-for-medium">
              Showing 1-200 of 4069 results

            </p>
            <form className="woocommerce-ordering" method="get">
              <select name="orderby" className="orderby" aria-label="Shop order" defaultValue="menu_order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Theo mức độ phổ biến</option>
                <option value="rating">Xếp hạng trung bình</option>
                <option value="date">Mới nhất</option>
                <option value="price">Theo giá: Thấp đến cao</option>
                <option value="price-desc">Theo giá: cao đến thấp</option>
              </select>
              <input type="hidden" name="paged" value="1" />
            </form>
          </div>
        </div>
      </div>

      <div className="custom-category-header">
        <div className="yith-wcan-filters no-title enhanced" id="preset_509" data-preset-id="509" data-target="">
          <div className="filters-container">
            <form>
              <div className="yith-wcan-filter filter-orderby" id="filter_509_0" data-filter-type="orderby" data-filter-id="0">
                <span className="filter-title">Giá</span>
                <div className="filter-content">
                  <select className="filter-order-by filter-dropdown filter-items enhanced" name="filter[509][0]" id="filter_509_0" style={{ display: 'none' }}>
                    <option className="filter-item" value="popularity">Theo mức độ phổ biến</option>
                    <option className="filter-item" value="date">Mới nhất</option>
                    <option className="filter-item" value="price">Theo giá: Thấp đến cao</option>
                    <option className="filter-item" value="price-desc">Theo giá: cao đến thấp</option>
                  </select>
                  <div className="yith-wcan-dropdown closed">
                    <div className="dropdown-label">Theo mức độ phổ biến</div>
                    <div className="dropdown-wrapper">
                      <ul className="matching-items filter-items" />
                      <a href="/" className="show-more" style={{ display: 'none' }}>Show 10 more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="yith-wcan-filter filter-tax" id="filter_509_2" data-filter-type="tax" data-filter-id="2" data-taxonomy="product_tag" data-multiple="yes" data-relation="or">
                <span className="filter-title">Chất liệu</span>
                <div className="filter-content">
                  <select className="filter-items filter-dropdown enhanced" name="filter[509][2]" id="filter_509_2" multiple="multiple" data-show_search="0" style={{ display: 'none' }}>
                    <option
                      className="filter-item select  level-0"
                      value="ceramic"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=ceramic"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (49)</small>
                      "
                    >
                      Ceramic
                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="da"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=da"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (3)</small>
                      "
                    >
                      Đá

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="vat-lieu-da"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=vat-lieu-da"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (271)</small>
                      "
                    >
                      Đá

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="da-va-vai"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=da-va-vai"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (9)</small>
                      "
                    >
                      Da và vải

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="go"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=go"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (537)</small>
                      "
                    >
                      Gỗ

                    </option>

                    <option
                      className="filter-item select  level-0 disabled"
                      value="go-soi"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=go-soi"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (0)</small>
                      "
                    >
                      Gỗ sồi

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="gom"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=gom"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (136)</small>
                      "
                    >
                      Gốm

                    </option>

                    <option
                      className="filter-item select  level-0 disabled"
                      value="inox"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=inox"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (0)</small>
                      "
                    >
                      Inox

                    </option>

                    <option
                      className="filter-item select  level-0 disabled"
                      value="khung-sat-tinh-dien"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=khung-sat-tinh-dien"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (0)</small>
                      "
                    >
                      Khung sắt tĩnh điện

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="kim-loai"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=kim-loai"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (469)</small>
                      "
                    >
                      Kim loại

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="kinh"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=kinh"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (156)</small>
                      "
                    >
                      Kính

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="mdf"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=mdf"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (11)</small>
                      "
                    >
                      MDF

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="mdf-son"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=mdf-son"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (45)</small>
                      "
                    >
                      MDF sơn

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="mdf-veneer"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=mdf-veneer"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (111)</small>
                      "
                    >
                      MDF veneer

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="mo-rong-nhieu-cho"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=mo-rong-nhieu-cho"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (21)</small>
                      "
                    >
                      Mở rộng nhiều chỗ

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="thuy-tinh"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=thuy-tinh"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (209)</small>
                      "
                    >
                      Thủy tinh

                    </option>

                    <option
                      className="filter-item select  level-0"
                      value="vai"
                      data-filter_url="https://nhaxinh.com/cua-hang/?yith_wcan=1&amp;product_tag=vai"
                      data-count="
                      <small class=&quot;item-count&quot;>
                        (434)</small>
                      "
                    >
                      Vải

                    </option>

                  </select>
                  <div className="yith-wcan-dropdown closed">
                    <div className="dropdown-label">Tất cả</div>
                    <div className="dropdown-wrapper">
                      <ul className="matching-items filter-items" />
                      <a href="/" className="show-more" style={{ display: 'none' }}>Show 10 more</a>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-primary apply-filters">
                Áp dụng
              </button>
            </form>
          </div>
        </div>
      </div>

      <main id="main" className="">
        <div className="row category-page-row">
          <div className="col large-12">
            <div className="shop-container">
              <div className="woocommerce-notices-wrapper" />
              <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2">
                {products ? products.map((product) => <ProductItem key={product._id} product={product} isInWishlist={isInWishlist(product._id)} />) : ''}
              </div>

              <div className="container">
                <nav className="woocommerce-pagination">
                  <ul className="page-numbers nav-pagination links text-center">
                    {pageNumber && totalPages && +pageNumber > 1 && (
                    <li>
                      <a
                        className="prev page-number"
                        href={`/cua-hang/page/${+pageNumber - 1}`}
                      >
                        <i className="icon-angle-left" />
                      </a>
                    </li>
                    )}

                    {pageNumber && totalPages && generatePageNumbers(pageNumber).map((page) => (
                      <li key={page}>
                        {page === '...' ? (
                          <span className="page-number dots">{page}</span>
                        ) : (
                          <a
                            className={`page-number ${page === +pageNumber ? 'current' : ''}`}
                            href={`/cua-hang/page/${page}`}
                          >
                            {page}
                          </a>
                        )}
                      </li>
                    ))}

                    {pageNumber && totalPages && +pageNumber < totalPages && (
                    <li>
                      <a
                        className="next page-number"
                        href={`/cua-hang/page/${+pageNumber + 1}`}
                      >
                        <i className="icon-angle-right" />
                      </a>
                    </li>
                    )}
                  </ul>
                </nav>
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
                      <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp  gia đình</p>
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
  );
}

export default ShopPage;
