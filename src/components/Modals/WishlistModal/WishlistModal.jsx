import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';

import styles from './index.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 40,
    backgroundColor: 'rgba(11,11,11,0.5)',
  },
  content: {
    backgroundColor: 'white',
    width: '400px',
    height: '100vh',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    borderRadius: '0',
    position: 'fixed',
    inset: '0 0 auto',
  },
};

function WishlistModal({
  isWishlistModalOpen,
  closeWishlistModal,
}) {
  return (
    <CSSTransition
      in={isWishlistModalOpen}
      timeout={300}
      classNames={{
        enter: styles.ReactModal__Content__beforeClose,
        enterActive: styles.ReactModal__Content__afterOpen,
        exit: styles.ReactModal__Content__beforeClose,
        exitActive: styles.ReactModal__Content__afterOpen,
      }}
      unmountOnExit
    >
      <Modal
        isOpen={isWishlistModalOpen}
        onRequestClose={closeWishlistModal}
        style={customStyles}
      >
        <div id="overlay-right-sidebar" className="mobile-sidebar no-scrollbar">
          <div className="sidebar-menu no-scrollbar ">
            <div className="wishlist-view-sidebar">
              <div className="wishlist-view-sidebar-header">
                <h4>
                  Wishlist
                  <span>0</span>
                </h4>
              </div>
              <div className="wishlist-view-sidebar-content wishlist_table cart" data-token="" />
              <div className="wishlist-view-sidebar-footer">
                <div className="total_price_wrapper">
                  <span>Tổng cộng</span>
                  {' '}
                  <strong>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        0
                        <span className="woocommerce-Price-currencySymbol">&#8363;</span>
                      </bdi>
                    </span>
                  </strong>
                </div>
                <a href="tai-khoan/wishlist/indexc5e7.html?wishlist-action" className="wishlist-link is-small">
                  Xem Wishlist
                </a>
                <a
                  href="tai-khoan/index.html"
                  className="btn btn-login is-small"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </CSSTransition>
  );
}

WishlistModal.propTypes = {
  isWishlistModalOpen: PropTypes.bool.isRequired,
  closeWishlistModal: PropTypes.func.isRequired,
};

export default WishlistModal;
