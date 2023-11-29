import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionLogin } from 'store/actions';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import {
  TEXT_LENGTH_LIMIT, LOCATION,
} from 'constants/index';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.Login.loading);

  const callbackLoginSuccess = useCallback(() => {
    navigate(LOCATION.HOME);
  }, [navigate]);

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
      dispatch(actionLogin({ values, callback: callbackLoginSuccess }));
    },
  });

  return (
    <div id="login-form-popup" className="lightbox-content mfp-hide">
      <div className="my-account-header page-title normal-title">
        <div className="page-title-inner flex-row container text-left">
          <div className="flex-col flex-grow medium-text-center">
            <div className="text-center social-login">
              <a href="https://www.facebook.com/v7.0/dialog/oauth?response_type=code&amp;client_id=560042275112548&amp;redirect_uri=https%3A%2F%2Fnhaxinh.com%2Fwp-login.php%3FloginSocial%3Dfacebook&amp;state=d5093d51171b2d1329e17fdf8996c070&amp;scope=public_profile%2Cemail" className="button social-button large facebook circle" data-plugin="nsl" data-action="connect" data-redirect="current" data-provider="facebook" data-popupwidth="475" data-popupheight="175">
                <i className="icon-facebook" />
                <span>
                  Login with
                  {' '}
                  <strong>Facebook</strong>
                </span>
              </a>

              <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;client_id=606975438985-6s6id1qsbpmcal34599j8j5aakju90qi.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fnhaxinh.com%2Fwp-login.php%3FloginSocial%3Dgoogle&amp;state=3b154ec74e96f6c69591cc1a0d34b3a5&amp;scope=email+profile&amp;access_type=offline&amp;prompt=select_account" className="button social-button large google-plus circle" data-plugin="nsl" data-action="connect" data-redirect="current" data-provider="google" data-popupwidth="600" data-popupheight="600">
                <i className="icon-google-plus" />
                <span>
                  Login with
                  {' '}
                  <strong>Google</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="woocommerce-notices-wrapper" />
      <div className="account-container lightbox-inner">
        <div className="col2-set row row-divided row-large" id="customer_login">
          <div className="col-1 large-6 col pb-0">
            <div className="account-login-inner">
              <h3 className="uppercase">Đăng nhập</h3>

              <form className="woocommerce-form woocommerce-form-login login" onSubmit={validation.handleSubmit}>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="username">
                    Tên đăng nhập hoặc địa chỉ email&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="username"
                    id="username"
                    autoComplete="username"
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
                  <input
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password || ''}
                  />
                  {validation.touched.password && validation.errors.password && (
                  <div className="errors">{validation.errors.password}</div>
                  )}
                </p>
                <div className="g-recaptcha" id="g-recaptcha" data-sitekey="6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj" data-callback="submitEnable" data-expired-callback="submitDisable" />
                <noscript>
                  <div style={{ width: '100%', height: '473px' }}>
                    <div style={{ width: '100%', height: '422px', position: 'relative' }}>
                      <div style={{ width: '302px', height: '422px', position: 'relative' }}>
                        <iframe
                          src="https://www.google.com/recaptcha/api/fallback?k=6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj"
                          frameBorder="0"
                          title="captcha"
                          scrolling="no"
                          style={{ width: '302px', height: '422px', borderStyle: 'none' }}
                        />
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '60px',
                          borderStyle: 'none',
                          bottom: '12px',
                          left: '25px',
                          margin: '0px',
                          padding: '0px',
                          right: '25px',
                          background: '#f9f9f9',
                          border: '1px solid #c1c1c1',
                          borderRadius: '3px',
                        }}
                      >
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          title="response"
                          className="g-recaptcha-response"
                          style={{
                            width: '250px',
                            height: '40px',
                            border: '1px solid #c1c1c1',
                            margin: '10px 25px',
                            padding: '0px',
                            resize: 'none',
                          }}
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                </noscript>
                <p className="form-row">
                  <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                    <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" />
                    <span>Lưu thông tin đăng nhập</span>
                  </label>
                  <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="41715934dc" />
                  <input type="hidden" name="_wp_http_referer" value="/cam-hung-nha-xinh-y-tuong/" />

                  {loading ? (
                    <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Đăng nhập" disabled>
                      <div className="loading" />
                    </button>
                  )
                    : (
                      <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Đăng nhập">
                        Đăng nhập
                      </button>
                    )}
                </p>
                <p className="woocommerce-LostPassword lost_password">
                  <Link to="/tai-khoan/reset-password">Quên mật khẩu?</Link>
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
