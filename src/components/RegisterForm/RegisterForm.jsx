import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionRegister } from 'store/actions';

import {
  EMAIL_REGEX, TEXT_LENGTH_LIMIT,
} from 'constants/index';

function RegisterForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Register.loading);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required('Email is required.')
        .matches(EMAIL_REGEX, 'Invalid email format'),
      password: Yup.string()
        .trim()
        .required('Password is required.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Password must be at least 6 characters long')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Password must not exceed ${TEXT_LENGTH_LIMIT.SHORT} characters`),
    }),

    onSubmit: (values) => {
      dispatch(actionRegister({ values }));
    },
  });

  return (
    <form method="post" className="woocommerce-form woocommerce-form-register register">
      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.email || ''}
        />
        {validation.touched.email && validation.errors.email && (
        <div className="errors">{validation.errors.email}</div>
        )}
      </p>
      <p>Mật khẩu mới sẽ được gửi tới email của bạn.</p>
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
      <div className="woocommerce-privacy-policy-text">
        <p>
          Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ
          trải nghiệm của bạn trên toàn bộ trang web này,
          để quản lý quyền truy cập vào tài khoản của bạn
          và cho các mục đích khác được mô tả trong chính
          sách bảo mật của chúng tôi.
        </p>
      </div>
      <p className="woocommerce-form-row form-row">
        <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="04fdbab7c8" />
        <input type="hidden" name="_wp_http_referer" value="/cam-hung-nha-xinh-y-tuong/" />

        {loading ? (
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
  );
}

export default RegisterForm;
