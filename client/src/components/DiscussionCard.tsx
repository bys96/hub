import React from "react";

interface DiscussionCardProps {
  subject: string;
  status: string;
  host: string;
  time: string;
  keywords: string[];
  participants: string;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({
  subject,
  status,
  host,
  time,
  keywords,
  participants,
}) => {
  return (
    <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl">{subject}</h3>
        <span className="text-lg font-semibold">{status}</span>
      </div>
      <div className="mb-4">
        <p>호스트: {host}</p>
        <p>{time}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-block bg-white border border-gray-400 text-gray-600 rounded-full px-3 py-1 text-sm font-semibold"
            >
              #{keyword}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-600">{participants}</span>
      </div>
    </div>
  );
};

export default DiscussionCard;
