import '../../style/login_style.css';
import ic_kakao from '../../assets/icons/ic_kakao.png';
import ic_google from '../../assets/icons/ic_google.png';
import { Link } from 'react-router';

export default function Login() {
  return (
    <>
      <main>
        <div className="auth-main-container">
          <div className="container">
            <div className="login-logo">
              <Link to="/">
                <div className="login-logo-img"></div>
              </Link>
            </div>
            <form id="form" className="form-box" action="">
              <div className="input-container">
                <div id="email-box" className="email-box">
                  <label className="basic-p" htmlFor="email">
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
                <label htmlFor="pw" className="basic-p">
                  비밀번호
                </label>
                <div id="pw-box" className="pw-box">
                  <input
                    id="pw"
                    className="input-box pw"
                    name="pw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <div id="eyes" className="eyes"></div>
                </div>
              </div>
              <button id="login-btn" className="auth-login-btn" type="button">
                로그인
              </button>
            </form>
            <div className="social-login-container">
              <p className="basic-p">간편 로그인하기</p>
              <div className="sns-icon-box">
                <a href="https://www.google.com/">
                  <img
                    src={ic_google}
                    alt="ic_google"
                    width="42px"
                    height="42px"
                  />
                </a>
                <a href="https://www.kakaocorp.com/page/">
                  <img
                    src={ic_kakao}
                    alt="ic_kakao"
                    width="42px"
                    height="42px"
                  />
                </a>
              </div>
            </div>
            <p className="link-join">
              판다마켓이 처음이신가요?&nbsp; <Link to="signup">회원가입</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
