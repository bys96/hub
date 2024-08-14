import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/service"); // 서비스 페이지로 이동
  };

  return (
    <section className="text-center my-16">
      <h1 className="text-3xl font-bold">
        아이디어를 현실로 바꾸는 실시간 협업 플랫폼
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        모두와 함께 하는 브레인스토밍
      </p>
      <button
        onClick={handleStartClick}
        className="mt-8 px-6 py-3 bg-red-500 text-white text-lg rounded"
      >
        바로 시작하기
      </button>
      <div
        className="mt-16 bg-gray-300 mx-auto"
        style={{ width: "900px", height: "544px" }}
      >
        {/* 여기에 이미지나 기타 콘텐츠를 추가할 수 있습니다 */}
      </div>
    </section>
  );
};

export default Hero;
