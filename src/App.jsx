import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import MainLayout from './layout/MainLayout';
import Signup from './pages/auth/Signup';
import AuthLayout from './layout/AuthLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {/* 메인 화면 */}
          <Route index path="/" element={<Home />} />
        </Route>

        {/* 로그인, 회원가입 */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
