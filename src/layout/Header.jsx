import { Link } from 'react-router';

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          {/* <a href="/">
            <div class="logo_img"></div>
          </a> */}
          <Link to={'/'} />
          <button class="login_btn">
            <a href="login.html">로그인</a>
          </button>
        </div>
      </header>
    </>
  );
}
