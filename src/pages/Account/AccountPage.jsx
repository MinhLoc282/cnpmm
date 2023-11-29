import React from 'react';

function AccountPage() {
  return (
    <main id="main" className="">
      <div className="my-account-header page-title normal-title">
        <div className="page-title-inner flex-row container text-left">
          <div className="flex-col flex-grow medium-text-center">
            <div className="text-center social-login">
              <a href="https://nhaxinh.com/wp-login.php?loginSocial=facebook" className="button social-button large facebook circle" data-plugin="nsl" data-action="connect" data-redirect="current" data-provider="facebook" data-popupwidth="475" data-popupheight="175">
                <i className="icon-facebook" />
                <span>
                  Login with
                  {' '}
                  <strong>Facebook</strong>
                </span>
              </a>

              <a href="https://nhaxinh.com/wp-login.php?loginSocial=google" className="button social-button large google-plus circle" data-plugin="nsl" data-action="connect" data-redirect="current" data-provider="google" data-popupwidth="600" data-popupheight="600">
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
                        <span className="password-input">
                          <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autoComplete="current-password" />
                          <span className="show-password-input" />
                        </span>
                      </p>

                      <div className="g-recaptcha" id="g-recaptcha" data-sitekey="6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj" data-callback="submitEnable" data-expired-callback="submitDisable">
                        <div style={{ width: '304px', height: '78px' }}>
                          <div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-63zdrsp1a3o5" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj&amp;co=aHR0cHM6Ly9uaGF4aW5oLmNvbTo0NDM.&amp;hl=en&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;size=normal&amp;cb=a78pqe1hon1e" /></div>
                          <textarea
                            id="g-recaptcha-response"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: '250px',
                              height: '40px',
                              border: '1px solid rgb(193, 193, 193)',
                              margin: '10px 25px',
                              padding: '0px',
                              resize: 'none',
                              display: 'none',
                            }}
                          />
                        </div>
                      </div>

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
                        <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="fc47e4984a" />
                        <input type="hidden" name="_wp_http_referer" value="/tai-khoan/edit-account/" />

                        <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Đăng nhập" disabled="disabled">Đăng nhập</button>
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

                    <form method="post" className="woocommerce-form woocommerce-form-register register">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Địa chỉ email&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" value="" />
                      </p>

                      <p>Mật khẩu mới sẽ được gửi tới email của bạn.</p>

                      <div className="g-recaptcha" id="g-recaptcha" data-sitekey="6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj" data-callback="submitEnable" data-expired-callback="submitDisable">
                        <div style={{ width: '304px', height: '78px' }}>
                          <div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-c63ni0cd10b1" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LczGWscAAAAAMCKCCd_T-bWUZTOO5qALwgjPjuj&amp;co=aHR0cHM6Ly9uaGF4aW5oLmNvbTo0NDM.&amp;hl=en&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;size=normal&amp;cb=wetjmfki1feh" /></div>
                          <textarea
                            id="g-recaptcha-response-1"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: '250px',
                              height: '40px',
                              border: '1px solid rgb(193, 193, 193)',
                              margin: '10px 25px',
                              padding: '0px',
                              resize: 'none',
                              display: 'none',
                            }}
                          />
                        </div>
                        <iframe title="re" style={{ display: 'none' }} />
                      </div>

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
                          Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ
                          trợ trải nghiệm của bạn trên toàn bộ trang web
                          này, để quản lý quyền truy cập vào tài khoản
                          của bạn và cho các mục đích khác được mô tả
                          trong chính sách bảo mật của chúng tôi.
                        </p>
                      </div>
                      <p className="woocommerce-form-row form-row">
                        <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="182a25f1fe" />
                        <input type="hidden" name="_wp_http_referer" value="/tai-khoan/edit-account/" />

                        <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Đăng ký" disabled="disabled">Đăng ký</button>
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
