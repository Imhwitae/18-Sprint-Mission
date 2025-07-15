import { Route, Routes } from 'react-router';

export default function PagesRouter() {
  return (
    <>
      <Routes>
        {/* 메인 화면 */}
        <Route index element={<Home />} />

        {/* 로그인, 회원가입 */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
