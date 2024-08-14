import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="bg-pink-500 text-white py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">베리의 비전</h2>
        <div className="flex space-x-8">
          <div className="w-1/2 bg-gray-200 p-4">
            {/* 비전 이미지 또는 콘텐츠 */}
          </div>
          <div className="w-1/2">
            <p>
              Figma ipsum component variant main layer. Editor arrow content
              device layout object vertical create. Plugin vertical select
              horizontal selection bold connection stroke overflow background.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-16 mb-8">베리의 가치</h2>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <p>
              Figma ipsum component variant main layer. Editor arrow content
              device layout object vertical create.
            </p>
          </div>
          <div className="w-1/2 bg-gray-200 p-4">
            {/* 가치 이미지 또는 콘텐츠 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
