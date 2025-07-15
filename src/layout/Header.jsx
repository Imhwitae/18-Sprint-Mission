import { Link, useNavigate } from 'react-router';
import logo_img from '../assets/images/logo_sm.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="logo">
          <div className="logo-img">
            <Link to="/">
              <img src={logo_img} alt="로고" />
            </Link>
          </div>
          <button
            class="login-btn"
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </button>
        </div>
      </header>
    </>
  );
}
