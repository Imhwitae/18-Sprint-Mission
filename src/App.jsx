import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import MainLayout from './layout/MainLayout';
import Signup from './pages/auth/Signup';

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
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
