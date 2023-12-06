import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionLogin, actionRegister } from 'store/actions';

import {
  EMAIL_REGEX,
  TEXT_LENGTH_LIMIT,
} from 'constants/index';

function AccountPage() {
  const dispatch = useDispatch();
  const loginLoading = useSelector((state) => state.Login.loading);
  const signupLoading = useSelector((state) => state.Register.loading);

  const loginValidation = useFormik({
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

  const signupValidation = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
    },

    validationSchema: Yup.object({
      firstname: Yup.string().trim().required('First name is required.'),
      lastname: Yup.string().trim().required('Last name is required.'),
      username: Yup.string().trim().required('Username is required.'),
      email: Yup.string()
        .trim()
        .required('Email is required.')
        .matches(EMAIL_REGEX, 'Invalid email format'),
      password: Yup.string()
        .trim()
        .required('Password is required.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Password must be at least 6 characters long')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Password must not exceed ${TEXT_LENGTH_LIMIT.SHORT} characters`),
      phoneNumber: Yup.string().trim().required('Phone number is required.'),
    }),

    onSubmit: (values) => {
      dispatch(actionRegister({ values }));
    },
  });

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    loginValidation.handleSubmit();
  };

  return (
    <main id="main" className="">
      <div className="page-wrapper my-account mb">
        <div className="container" role="main">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper" />
            <div className="account-container lightbox-inner">
              <div className="col2-set row row-divided row-large" id="customer_login">
                <div className="col-1 large-6 col pb-0">
                  <div className="account-login-inner">
                    <h3 className="uppercase">Đăng nhập</h3>

                    <form className="woocommerce-form woocommerce-form-login login" onSubmit={handleLoginSubmit}>
                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="username">
                          Tên đăng nhập&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="username"
                          onChange={loginValidation.handleChange}
                          onBlur={loginValidation.handleBlur}
                          value={loginValidation.values.username || ''}
                        />
                        {loginValidation.touched.username && loginValidation.errors.username && (
                        <div className="errors">{loginValidation.errors.username}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password">
                          Mật khẩu&nbsp;
                          <span className="required">*</span>
                        </label>
                        <span className="password-input">
                          <input
                            className="woocommerce-Input woocommerce-Input--text input-text"
                            type="password"
                            name="password"
                            id="password"
                            onChange={loginValidation.handleChange}
                            onBlur={loginValidation.handleBlur}
                            value={loginValidation.values.password || ''}
                          />
                          {loginValidation.touched.password && loginValidation.errors.password && (
                          <div className="errors">{loginValidation.errors.password}</div>
                          )}
                          <span className="show-password-input" />
                        </span>
                      </div>

                      <p className="form-row">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                          <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" />

                          <span>Lưu thông tin đăng nhập</span>
                        </label>

                        {loginLoading ? (
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
                        <a href="https://nhaxinh.com/tai-khoan/reset-password/">Quên mật khẩu?</a>
                      </p>
                    </form>
                  </div>
                </div>

                <div className="col-2 large-6 col pb-0">
                  <div className="account-register-inner">
                    <h3 className="uppercase">Đăng ký</h3>

                    <form className="woocommerce-form woocommerce-form-register register" onSubmit={signupValidation.handleSubmit}>
                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_firstname">
                          Họ&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="firstname"
                          id="reg_firstname"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.firstname || ''}
                        />
                        {signupValidation.touched.firstname
                        && signupValidation.errors.firstname && (
                        <div className="errors">{signupValidation.errors.firstname}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_lastname">
                          Tên&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="lastname"
                          id="reg_lastname"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.lastname || ''}
                        />
                        {signupValidation.touched.lastname && signupValidation.errors.lastname && (
                        <div className="errors">{signupValidation.errors.lastname}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_username">
                          Username&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="reg_username"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.username || ''}
                        />
                        {signupValidation.touched.username && signupValidation.errors.username && (
                        <div className="errors">{signupValidation.errors.username}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Địa chỉ email&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="email"
                          id="reg_email"
                          autoComplete="email"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.email || ''}
                        />
                        {signupValidation.touched.email && signupValidation.errors.email && (
                        <div className="errors">{signupValidation.errors.email}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_password">
                          Password&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="password"
                          id="reg_password"
                          autoComplete="password"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.password || ''}
                        />
                        {signupValidation.touched.password && signupValidation.errors.password && (
                        <div className="errors">{signupValidation.errors.password}</div>
                        )}
                      </div>

                      <div className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_number">
                          Số điện thoại&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="phoneNumber"
                          id="reg_number"
                          autoComplete="number"
                          onChange={signupValidation.handleChange}
                          onBlur={signupValidation.handleBlur}
                          value={signupValidation.values.phoneNumber || ''}
                        />
                        {signupValidation.touched.phoneNumber
                          && signupValidation.errors.phoneNumber && (
                          <div className="errors">{signupValidation.errors.phoneNumber}</div>
                        )}
                      </div>

                      <p className="woocommerce-form-row form-row">
                        {signupLoading ? (
                          <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Đăng ký">
                            <div className="loading" />
                          </button>
                        )
                          : (
                            <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Đăng ký">
                              Đăng ký
                            </button>
                          )}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountPage;
