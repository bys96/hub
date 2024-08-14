import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage"; // 새로 추가된 서비스 페이지

const RoutesSetup: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service" element={<ServicePage />} />{" "}
        {/* 서비스 페이지 라우트 추가 */}
      </Routes>
    </Router>
  );
};

export default RoutesSetup;
