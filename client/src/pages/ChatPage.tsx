import React from "react";
import ChatRoom from "../components/ChatRoom";
import RoomInfo from "../components/RoomInfo";

const ChatPage: React.FC = () => {
  return (
    <div>
      <ChatRoom />
      {/* <div>
        <RoomInfo
          title="주제"
          creator={{ name: "기획자", job: "기획자" }}
          participants={6}
          maxParticipants={6}
          openTime="2024-08-15 10:00"
          closeTime="2024-08-15 10:30"
          keywords={["#콜택시", "#반차"]}
        />
      </div> */}
    </div>
  );
};

export default ChatPage;
