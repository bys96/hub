import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center">
      <p>라즈베리</p>
      <p>사업자 등록번호: 773-82-00001 | 주소: 서울시 강남구 백설 160호</p>
      <p>© 라즈베리 2024. All rights reserved.</p>
      <div className="mt-4">
        <a href="/terms" className="text-sm text-gray-600">
          이용약관
        </a>{" "}
        |
        <a href="/privacy" className="text-sm text-gray-600">
          개인정보 처리방침
        </a>
      </div>
    </footer>
  );
};

export default Footer;
