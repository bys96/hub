import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 bg-white shadow-md z-50">
      <Link to="/" className="text-2xl font-bold text-red-500">
        라즈베리
      </Link>
      <div className="space-x-4">
        <button className="text-sm text-gray-600">로그인</button>
        <button className="text-sm text-gray-600">회원가입</button>
      </div>
    </header>
  );
};

export default Header;
