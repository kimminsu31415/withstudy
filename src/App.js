// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudyRoom from "./pages/StudyRoom";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studyroom" element={<StudyRoom />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h2>404 - 페이지를 찾을 수 없습니다.</h2>
              <a href="/">홈으로 돌아가기</a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
