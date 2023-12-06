import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionLogin } from 'store/actions';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import {
  TEXT_LENGTH_LIMIT,
} from 'constants/index';

function LoginForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Login.loading);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required('Username không được bỏ trống.'),
      password: Yup.string()
        .trim()
        .required('Mật khẩu không được bỏ trống.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Mật khẩu không được ít hơn 6 kí tự')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Mật khẩu không được vượt quá ${TEXT_LENGTH_LIMIT.SHORT} kí tự`),
    }),

    onSubmit: (values) => {
      dispatch(actionLogin({ values }));
    },
  });

  return (
    <div id="login-form-popup" className="lightbox-content mfp-hide">
      <div className="account-container lightbox-inner">
        <div className="col2-set row row-divided row-large" id="customer_login">
          <div className="col-1 large-6 col pb-0">
            <div className="account-login-inner">
              <h3 className="uppercase">Đăng nhập</h3>

              <form className="woocommerce-form woocommerce-form-login login" onSubmit={validation.handleSubmit}>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="username">
                    Tên đăng nhập&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="username"
                    id="username_input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.username || ''}
                  />
                  {validation.touched.username && validation.errors.username && (
                  <div className="errors">{validation.errors.username}</div>
                  )}
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="password">
                    Mật khẩu&nbsp;
                    <span className="required">*</span>
                  </label>
                  <span className="password-input">
                    <input
                      className="woocommerce-Input woocommerce-Input--text input-text"
                      type="password"
                      name="password"
                      id="password_input"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.password || ''}
                    />
                    {validation.touched.password && validation.errors.password && (
                    <div className="errors">{validation.errors.password}</div>
                    )}
                    <span className="show-password-input" />
                  </span>
                </p>

                <p className="form-row">
                  <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                    <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme_checkbox" value="forever" />
                    <span>Lưu thông tin đăng nhập</span>
                  </label>

                  {loading ? (
                    <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" disabled>
                      <div className="loading" />
                    </button>
                  )
                    : (
                      <button type="submit" className="woocommerce-button button woocommerce-form-login__submit">
                        Đăng nhập
                      </button>
                    )}
                </p>
                <p className="woocommerce-LostPassword lost_password">
                  <a href="/tai-khoan/reset-password">Quên mật khẩu?</a>
                </p>
              </form>
            </div>
          </div>

          <div className="col-2 large-6 col pb-0">
            <div className="account-register-inner">
              <h3 className="uppercase">Đăng ký</h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
