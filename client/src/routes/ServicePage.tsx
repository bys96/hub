import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToggleButtons from "../components/ToggleButtons";
import DiscussionCard from "../components/DiscussionCard";
import CreateDiscussionModal from "../components/CreateDiscussionModal";

const ServicePage: React.FC = () => {
  const [selectedView, setSelectedView] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (view: string) => {
    setSelectedView(view);
  };

  const renderCards = () => {
    const brainstormingCards = [
      {
        subject: "낮술은 해로운가?",
        status: "브레인스토밍챗",
        host: "애주가대학생",
        time: "09:00~09:10",
        keywords: ["의학", "심심", "학생"],
        participants: "인원 0/10",
      },
      {
        subject: "밤술은 괜찮은가?",
        status: "브레인스토밍챗",
        host: "야행성대학생",
        time: "21:00~21:10",
        keywords: ["심리", "심심", "학생"],
        participants: "인원 5/10",
      },
    ];

    const kanbanCards = [
      {
        subject: "낮술의 효과",
        status: "칸반보드",
        host: "낮술전문가",
        time: "13:00~13:10",
        keywords: ["의학", "사회", "연구"],
        participants: "인원 3/10",
      },
      {
        subject: "밤술의 부작용",
        status: "칸반보드",
        host: "야행성연구원",
        time: "22:00~22:10",
        keywords: ["의학", "심리", "학생"],
        participants: "인원 8/10",
      },
    ];

    let combinedCards: any[] = [];

    if (selectedView === "전체") {
      combinedCards = [...brainstormingCards, ...kanbanCards];
    } else if (selectedView === "브레인스토밍챗") {
      combinedCards = brainstormingCards;
    } else if (selectedView === "칸반보드") {
      combinedCards = kanbanCards;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {combinedCards.map((card, index) => (
          <DiscussionCard
            key={index}
            subject={card.subject}
            status={card.status}
            host={card.host}
            time={card.time}
            keywords={card.keywords}
            participants={card.participants}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <section className="container mx-auto p-6">
          <div className="flex justify-between mb-4">
            <ToggleButtons onToggle={handleToggle} />
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              만들기
            </button>
          </div>
          {renderCards()}
        </section>
      </main>
      <Footer />

      <CreateDiscussionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ServicePage;
