import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  ServicePage,
  ChatPage,
  KanbanPage,
  MyPage,
  LoginPage,
} from "../pages";
// 페이지들을 불러옵니다

const RoutesSetup: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<ServicePage />} />{" "}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/room/chat" element={<ChatPage />} />
        <Route path="/room/kanban" element={<KanbanPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesSetup;
