import { Link, useNavigate } from 'react-router';

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <div className="logo-img">
            <Link to="/">
              <div className="logo-img"></div>
            </Link>
          </div>
          <Link to="login">
            <button className="login-btn">로그인</button>
          </Link>
        </div>
      </header>
    </>
  );
}
