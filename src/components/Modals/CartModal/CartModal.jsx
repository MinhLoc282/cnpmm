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

function CartModal({
  isCartModalOpen,
  closeCartModal,
}) {
  return (
    <CSSTransition
      in={isCartModalOpen}
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
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        style={customStyles}
      >
        <div id="cart-popup" className="widget_shopping_cart">
          <div className="cart-popup-inner inner-padding">
            <div className="cart-popup-title text-center">
              <h4 className="uppercase">Cart</h4>

              <div className="is-divider" />
            </div>

            <div className="widget_shopping_cart_content">
              <p className="woocommerce-mini-cart__empty-message">Không có sản phẩm nào trong giỏ hàng</p>
            </div>
            <div className="cart-sidebar-content relative" />
          </div>
        </div>
      </Modal>
    </CSSTransition>
  );
}

CartModal.propTypes = {
  isCartModalOpen: PropTypes.bool.isRequired,
  closeCartModal: PropTypes.func.isRequired,
};

export default CartModal;
