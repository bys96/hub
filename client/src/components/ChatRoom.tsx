import React, { useState, useEffect, useRef } from "react";
import RoomInfo from "./RoomInfo";
import MemberList from "./MemberList";
import ChatKeyword from "./ChatKeyword";

const ChatRoom: React.FC = () => {
  // 현재 사용자의 ID와 정보를 고정합니다. 이 예제에서는 ID가 1인 기획자를 설정했습니다.
  const currentUser = {
    id: 1, // 현재 사용자의 ID
    user: "기획자",
    job: "기획자",
    color: "text-blue-500",
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "기획자",
      job: "기획자",
      color: "text-blue-500",
      message: "집에 가고싶은...",
    },
    {
      id: 2,
      user: "택시기사",
      job: "택시기사",
      color: "text-yellow-500",
      message: "충암 같은 택시...",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [keywords, setKeywords] = useState<{ [key: string]: number }>({});
  const [highlightedMessageIndex, setHighlightedMessageIndex] = useState<
    number | null
  >(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const maxChars = 80;

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: currentUser.id, // 항상 현재 사용자의 ID를 사용
      user: currentUser.user,
      job: currentUser.job,
      color: currentUser.color,
      message: newMessage,
    };

    // 해시태그를 추출하면서 중복된 #을 방지
    const hashtagPattern = /#[^\s#]+/g;
    const newKeywords = newMessage.match(hashtagPattern) || [];

    const updatedKeywords = { ...keywords };
    newKeywords.forEach((keyword) => {
      const cleanedKeyword = keyword.replace(/^#+/, "#"); // 첫 번째 #만 남기고 나머지는 제거
      updatedKeywords[cleanedKeyword] = messages.length;
    });

    setKeywords(updatedKeywords);
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const scrollToMessage = (keyword: string) => {
    const messageIndex = keywords[keyword];
    if (messageRefs.current[messageIndex]) {
      messageRefs.current[messageIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setHighlightedMessageIndex(messageIndex); // 메시지를 강조 표시
      setTimeout(() => {
        setHighlightedMessageIndex(null); // 일정 시간 후 강조 표시 제거
      }, 2000); // 2초 후 강조 표시 제거
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const keepFocus = () => {
      inputRef.current?.focus();
    };

    keepFocus();
    document.addEventListener("click", keepFocus);

    return () => {
      document.removeEventListener("click", keepFocus);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col w-full p-4 bg-gray-100">
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => {
              const showProfile =
                index === 0 || messages[index - 1].id !== msg.id;

              return (
                <div
                  key={index}
                  ref={(el) => (messageRefs.current[index] = el)}
                  className={`flex items-start mb-2 ${
                    highlightedMessageIndex === index
                      ? "bg-yellow-100 border border-yellow-300"
                      : ""
                  }`}
                >
                  {showProfile && (
                    <div className="flex items-center mr-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                  <div className="flex flex-col">
                    {showProfile && (
                      <div className="flex items-center mb-1">
                        <span className={`font-bold text-lg ${msg.color} mr-2`}>
                          {msg.user}
                        </span>
                        <span className="text-sm text-gray-500">{msg.job}</span>
                      </div>
                    )}
                    <div className={`${showProfile ? "" : "ml-14"}`}>
                      <p className="text-gray-700">{msg.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center border-t p-4 bg-white">
            <textarea
              placeholder="내용을 입력해주세요."
              className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-700 resize-none overflow-hidden"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              ref={inputRef}
              rows={1}
              maxLength={maxChars}
            />
            <span className="ml-2 text-sm text-gray-500">
              {newMessage.length} / {maxChars}
            </span>
            <button
              onClick={handleSendMessage}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              전송
            </button>
          </div>
        </div>

        <div className="flex flex-col w-96 p-4 border border-gray-300">
          <div className="h-4/5 overflow-y-auto border-b border-gray-300">
            <MemberList />
          </div>
          <div className="flex-1 overflow-y-auto pt-4 border-t border-gray-300">
            <ChatKeyword
              keywords={Object.keys(keywords)}
              onKeywordClick={scrollToMessage}
            />
          </div>
        </div>
      </div>

      <div className="w-full p-4">
        <RoomInfo
          title="주제"
          creator={{ name: "기획자", job: "기획자" }}
          participants={6}
          maxParticipants={6}
          openTime="2024-08-15 10:00"
          closeTime="2024-08-15 10:30"
          keywords={["콜택시", "반차"]}
        />
      </div>
    </div>
  );
};

export default ChatRoom;
