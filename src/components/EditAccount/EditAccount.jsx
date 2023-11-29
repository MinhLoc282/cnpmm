/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

function EditAccount() {
  useEffect(() => {
    // Function to enable submit buttons
    const submitEnable = () => {
      const button = document.getElementById('wp-submit') || document.getElementById('submit');
      if (button) {
        button.removeAttribute('disabled');
      }

      const wooButtons = document.querySelectorAll('.woocommerce-form-login button, .woocommerce-form-register button, .woocommerce-ResetPassword button');
      if (wooButtons.length > 0) {
        wooButtons.forEach((btn) => {
          btn.removeAttribute('disabled');
        });
      }
    };

    // Function to disable submit buttons
    const submitDisable = () => {
      const button = document.getElementById('wp-submit') || document.getElementById('submit');
      if (button) {
        button.setAttribute('disabled', 'disabled');
      }

      const wooButtons = document.querySelectorAll('.woocommerce-form-login button, .woocommerce-form-register button, .woocommerce-ResetPassword button');
      if (wooButtons.length > 0) {
        wooButtons.forEach((btn) => {
          btn.setAttribute('disabled', 'disabled');
        });
      }
    };

    // Attach event listeners or any other script logic here

    // Clean up the script logic when the component unmounts
    return () => {
      // Clean up logic here (if needed)
    };
  }, []);

  return (
    <main id="main" className="">
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

      <div className="page-wrapper my-account mb">
        <div className="container" role="main">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper" />

            <div className="account-container lightbox-inner">
              <div className="col2-set row row-divided row-large" id="customer_login">
                <div className="col-1 large-6 col pb-0">
                  <div className="account-login-inner">
                    <h3 className="uppercase">Đăng nhập</h3>

                    <form className="woocommerce-form woocommerce-form-login login" method="post">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="username">
                          Tên đăng nhập hoặc địa chỉ email&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autoComplete="username" value="" />
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password">
                          Mật khẩu&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autoComplete="current-password" />
                      </p>

                      <div className="g-recaptcha" id="g-recaptcha" data-sitekey="6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj" data-callback="submitEnable" data-expired-callback="submitDisable" />
                      <script />
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
                            <div style={{
                              width: '100%', height: '60px', borderStyle: 'none', bottom: '12px', left: '25px', margin: '0px', padding: '0px', right: '25px', background: '#f9f9f9', border: '1px solid #c1c1c1', borderRadius: '3px',
                            }}
                            >
                              <textarea
                                id="g-recaptcha-response"
                                name="g-recaptcha-response"
                                title="response"
                                className="g-recaptcha-response"
                                style={{
                                  width: '250px', height: '40px', border: '1px solid #c1c1c1', margin: '10px 25px', padding: '0px', resize: 'none',
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
                          {' '}
                          <span>Lưu thông tin đăng nhập</span>
                        </label>
                        <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="a07115b501" />
                        <input type="hidden" name="_wp_http_referer" value="/tai-khoan/edit-account/" />
                        {' '}
                        <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Đăng nhập">Đăng nhập</button>
                      </p>
                      <p className="woocommerce-LostPassword lost_password">
                        <a href="../reset-password/index.html">Quên mật khẩu?</a>
                      </p>

                    </form>
                  </div>

                </div>

                <div className="col-2 large-6 col pb-0">

                  <div className="account-register-inner">

                    <h3 className="uppercase">Đăng ký</h3>

                    <form method="post" className="woocommerce-form woocommerce-form-register register">

                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Địa chỉ email&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" value="" />
                        {' '}

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
                          Dữ liệu cá nhân của bạn sẽ được sử dụng để
                          hỗ trợ trải nghiệm của bạn trên toàn bộ
                          trang web này, để quản lý quyền truy cập
                          vào tài khoản của bạn và cho các mục đích
                          khác được mô tả trong chính sách bảo mật
                          của chúng tôi.
                        </p>
                      </div>
                      <p className="woocommerce-form-row form-row">
                        <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="3d01530b38" />
                        <input type="hidden" name="_wp_http_referer" value="/tai-khoan/edit-account/" />
                        <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Đăng ký">Đăng ký</button>
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

export default EditAccount;
