import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import './style/style.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 메인 화면 */}

        <Route index element={<Home />} />
      </Routes>
      <Footer />

      <Routes>
        {/* 로그인, 회원가입 */}
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="signup" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
