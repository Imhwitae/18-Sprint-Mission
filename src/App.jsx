import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import MainLayout from './layout/MainLayout';
import Signup from './pages/auth/Signup';
import AuthLayout from './layout/AuthLayout';
import ItemsLayout from './layout/ItemsLayout';

function App() {
  return (
    <>
      <Routes>
        {/* 메인 화면 */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* 로그인, 회원가입 */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* 중고 마켓 */}
        <Route path="items" element={<ItemsLayout />} />
      </Routes>
    </>
  );
}

export default App;
