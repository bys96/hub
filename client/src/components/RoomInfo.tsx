import React from "react";
import { useNavigate } from "react-router-dom";

interface RoomInfoProps {
  title: string;
  creator: {
    name: string;
    job: string;
  };
  participants: number;
  maxParticipants: number;
  openTime: string;
  closeTime: string;
  keywords: string[];
}

const RoomInfo: React.FC<RoomInfoProps> = ({
  title,
  creator,
  participants,
  maxParticipants,
  openTime,
  closeTime,
  keywords,
}) => {
  const navigate = useNavigate();

  const handleLeaveRoom = () => {
    const confirmed = window.confirm("채팅방을 나가시겠습니까?");
    if (confirmed) {
      navigate("/main");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4 border border-black">
      <div className="flex items-center justify-between">
        {/* 주제 및 제안자 정보 */}
        <div className="flex items-center w-1/3">
          <div className="mr-4">
            <h2 className="text-xl font-bold">주제</h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>

        {/* 참여자 및 시간 정보 */}
        <div className="flex flex-col items-center w-1/3 text-center">
          <div className="text-sm text-gray-500 mb-2">
            참여자: {participants}/{maxParticipants}
          </div>
          <div className="text-sm text-gray-500">개설시간: {openTime}</div>
          <div className="text-sm text-gray-500">종료시간: {closeTime}</div>
        </div>

        {/* 키워드 정보 */}
        <div className="flex flex-wrap w-1/3 justify-start">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2 text-sm"
            >
              #{keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="flex mt-4">
        {/* 제안자 정보 */}
        <div className="flex items-center w-1/3">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <div className="text-lg font-bold">{creator.name}</div>
            <div className="text-sm text-blue-500">{creator.job}</div>
          </div>
        </div>

        {/* 타이머 정보 */}
        <div className="flex flex-col items-center w-1/3 text-center">
          <div className="text-xl text-gray-500">남은 시간: 여기에타이머</div>
        </div>

        {/* 나가기 버튼 */}
        <div className="flex items-center w-1/3 justify-end">
          <button
            onClick={handleLeaveRoom}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
