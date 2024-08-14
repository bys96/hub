import React from "react";
import RoutesSetup from "./routes/RoutesSetup"; // 이전에 AppRouter로 불렸던 라우팅 파일

const App: React.FC = () => {
  return (
    <div className="App">
      <RoutesSetup />
    </div>
  );
};

export default App;
