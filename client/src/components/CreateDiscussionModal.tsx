import React, { useState } from "react";

interface CreateDiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDiscussionModal: React.FC<CreateDiscussionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState("브레인스토밍챗");
  const [participants, setParticipants] = useState(4);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:30");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && keywordInput.trim() !== "") {
      e.preventDefault();
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-xl font-bold mb-6">만들기</h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">주제</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="주제를 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            브레인스토밍챗 / 칸반보드
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedType("브레인스토밍챗")}
              className={`px-4 py-2 rounded-lg ${
                selectedType === "브레인스토밍챗"
                  ? "bg-gray-300"
                  : "bg-gray-100"
              }`}
            >
              브레인스토밍챗
            </button>
            <button
              onClick={() => setSelectedType("칸반보드")}
              className={`px-4 py-2 rounded-lg ${
                selectedType === "칸반보드" ? "bg-gray-300" : "bg-gray-100"
              }`}
            >
              칸반보드
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">인원</label>
          <input
            type="number"
            min="2"
            max="10"
            value={participants}
            onChange={(e) => setParticipants(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">제한시간</label>
          <div className="flex space-x-2">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <span className="self-center">~</span>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">키워드</label>
          <input
            type="text"
            value={keywordInput}
            onChange={handleKeywordChange}
            onKeyDown={handleKeywordKeyDown}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="#키워드"
          />
          <div className="mt-2 space-x-2">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 border border-gray-400 text-gray-600 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer"
                onClick={() => removeKeyword(index)}
              >
                #{keyword} &times;
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            만들기
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussionModal;
