/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import ProductItem from 'components/ProductItem/ProductItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetUserWishlist } from 'store/actions';

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.Wishlist.wishlist);

  useEffect(() => {
    dispatch(actionGetUserWishlist());
  }, []);

  return (
    <main id="main" className="">
      <div className="page-wrapper my-account mb">
        <div className="container" role="main">
          <form
            id="yith-wcwl-form"
            className="woocommerce yith-wcwl-form wishlist-fragment"
          >
            <div className="wishlist-title-container">
              <div className="wishlist-title wishlist-title-with-form">
                <h2>My wishlist</h2>
              </div>
            </div>

            <div
              className="row large-columns-4 medium-columns-3 small-columns-2 row-small slider row-slider slider-nav-reveal slider-nav-push"
              data-flickity-options="{
                &quot;imagesLoaded&quot;: true, &quot;groupCells&quot;: &quot;100%&quot;,
                &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: true,
                &quot;prevNextButtons&quot;: true,&quot;percentPosition&quot;: true,
                &quot;rightToLeft&quot;: false, &quot;autoPlay&quot; : false, &quot;pageDots&quot; : true
              }"
              tabIndex="0"
            >
              <div className="row">
                {wishlist ? wishlist.map((product) => <ProductItem key={product._id} product={product} isInWishlist />) : ''}
              </div>
            </div>

            <div className="yith_wcwl_wishlist_footer">
              <div className="yith-wcwl-share social-icons share-icons share-row relative">
                <span className="yith-wcwl-share-title share-icons-title">Share on:</span>
                <a target="_blank" rel="noopener noreferrer nofollow" className="facebook icon button circle is-outline tooltip" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fnhaxinh.com%2Ftai-khoan%2Fwishlist%2F%3Fwishlist-action%3Dview%26wishlist_id%3DU3MYY77WLS02&p[title]=My+wishlist+on+N%E1%BB%99i+th%E1%BA%A5t+Nh%C3%A0+Xinh" title="Facebook">
                  <i className="icon-facebook" />
                </a>

                <a target="_blank" rel="noopener noreferrer nofollow" className="twitter icon button circle is-outline tooltip" href="https://twitter.com/share?url=https%3A%2F%2Fnhaxinh.com%2Ftai-khoan%2Fwishlist%2F%3Fwishlist-action%3Dview%26wishlist_id%3DU3MYY77WLS02&amp;text=" title="Twitter">
                  <i className="icon-twitter" />
                </a>

                <a target="_blank" rel="noopener noreferrer nofollow" className="pinterest icon button circle is-outline tooltip" href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fnhaxinh.com%2Ftai-khoan%2Fwishlist%2F%3Fwishlist-action%3Dview%26wishlist_id%3DU3MYY77WLS02&amp;description=&amp;media=" title="Pinterest" onClick="window.open(this.href); return false;">
                  <i className="icon-pinterest" />
                </a>

                <a rel="nofollow" className="email icon button circle is-outline tooltip" href="mailto:?subject=My+wishlist+on+N%E1%BB%99i+th%E1%BA%A5t+Nh%C3%A0+Xinh&amp;body=https%3A%2F%2Fnhaxinh.com%2Ftai-khoan%2Fwishlist%2F%3Fwishlist-action%3Dview%26wishlist_id%3DU3MYY77WLS02&amp;title=My+wishlist+on+N%E1%BB%99i+th%E1%BA%A5t+Nh%C3%A0+Xinh" title="Email">
                  <i className="icon-envelop" />
                </a>

                <a target="_blank" rel="noopener noreferrer" className="whatsapp show-for-medium icon button circle is-outline tooltip" href="https://web.whatsapp.com/send?text=My+wishlist+on+N%E1%BB%99i+th%E1%BA%A5t+Nh%C3%A0+Xinh - https%3A%2F%2Fnhaxinh.com%2Ftai-khoan%2Fwishlist%2F%3Fwishlist-action%3Dview%26wishlist_id%3DU3MYY77WLS02" data-action="share/whatsapp/share" title="WhatsApp">
                  <i className="icon-whatsapp" />
                </a>
              </div>
            </div>

            <input type="hidden" id="yith_wcwl_edit_wishlist" name="yith_wcwl_edit_wishlist" value="2a2f2cdc2b" />
            <input type="hidden" name="_wp_http_referer" value="/tai-khoan/wishlist/?wishlist-action" />
            <input type="hidden" value="U3MYY77WLS02" name="wishlist_id" id="wishlist_id" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default WishlistPage;
