import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Solution from "../components/Solution";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton"; // 추가된 부분

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {" "}
        {/* Header의 높이만큼 padding-top 추가 */}
        <Hero />
        <Vision />
        <Solution />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* 맨 위로 버튼 추가 */}
    </div>
  );
};

export default LandingPage;
