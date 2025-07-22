import { Link } from 'react-router';
import '../../styles/auth.css';
import ic_kakao from '../../assets/icons/ic_kakao.png';
import ic_google from '../../assets/icons/ic_google.png';
import visibleEye_off from '../../assets/icons/eyes_off.png';
import visibleEye_on from '../../assets/icons/eyes_on.png';
import { useEffect, useState } from 'react';

/**
 * 회원가입 화면
 */
export default function Signup() {
  /**
   * 회원가입 양식 정보를 담고 있는 객체
   * 이메일, 닉네임, 비밀번호, 비밀번호 확인
   */
  const [signupForm, setSignupForm] = useState({
    email: '',
    nickname: '',
    pw: '',
    checkPw: '',
  });

  /**
   * 비밀번호 보이기 / 가리기 상태
   */
  const [visible, setVisible] = useState({
    pw: false,
    checkPw: false,
  });

  /**
   * id 별로 비밀번호 가리기 여부를 변경한다.
   * @param {string} id
   */
  const onClickVisible = (id) => {
    setVisible((prevState) => ({
      ...prevState,
      [id]: !visible[id],
    }));
  };

  return (
    <>
      <main>
        <div className="auth-main-container">
          <div className="container">
            <div className="auth-logo">
              <Link to="/">
                <div className="auth-logo-img"></div>
              </Link>
            </div>

            <form id="signup-form" action="">
              <div className="input-container">
                <div id="email-box" className="email-box">
                  <label htmlFor="email" className="basic-p">
                    이메일
                  </label>
                  <input
                    id="email"
                    className="input-box email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>

                <div id="nickname-box" className="nickname-box">
                  <label htmlFor="nickname" className="basic-p">
                    닉네임
                  </label>
                  <input
                    id="nickname"
                    className="input-box nickname"
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                  />
                </div>

                <div id="pw-box" className="pw-box">
                  <label htmlFor="pw" className="basic-p pw-label">
                    비밀번호
                  </label>
                  <input
                    id="pw"
                    className="input-box pw"
                    name="pw"
                    type={visible.pw ? 'text' : 'password'}
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <div className="auth-visible-icon">
                    <img
                      id="pw"
                      src={visible.pw ? visibleEye_on : visibleEye_off}
                      alt="visible-icon"
                      onClick={(e) => {
                        onClickVisible(e.target.id);
                      }}
                    />
                  </div>
                </div>

                <div id="pw-check-box" className="pw-box">
                  <label htmlFor="pw-check" className="basic-p pw-label">
                    비밀번호 확인
                  </label>
                  <input
                    id="pw-check"
                    className="input-box pw pw-check"
                    name="pw-check"
                    type={visible.checkPw ? 'text' : 'password'}
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                  />
                  <div className="auth-visible-icon">
                    <img
                      id="checkPw"
                      src={visible.checkPw ? visibleEye_on : visibleEye_off}
                      alt="visible-icon"
                      onClick={(e) => {
                        onClickVisible(e.target.id);
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="auth-btn" type="button">
                회원가입
              </button>
            </form>

            <div className="social-login-container">
              <p className="">간편 로그인하기</p>
              <div className="sns-icon-box">
                <a href="https://www.google.com/">
                  <img
                    src={ic_google}
                    alt="ic-google"
                    width="42px"
                    height="42px"
                  />
                </a>
                <a href="https://www.kakaocorp.com/page/">
                  <img
                    src={ic_kakao}
                    alt="ic-kakao"
                    width="42px"
                    height="42px"
                  />
                </a>
              </div>
            </div>

            <p className="link-signup">
              이미 회원이신가요?&nbsp; <Link to="/login">로그인</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
