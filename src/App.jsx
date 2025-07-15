import { Route, Routes } from 'react-router';
import Home from './pages/Home';
// import './style/style.css';
import Login from './pages/auth/Login';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {/* 메인 화면 */}
          <Route index path="/" element={<Home />} />
        </Route>

        {/* 로그인, 회원가입 */}
        <Route path="login" element={<Login />} />
        {/* <Route path="signup" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
