// src/pages/StudyRoom.jsx
import React from "react";
import MainContent from "../components/MainContent";
import Tool from "../components/Tool";

function StudyRoom() {
  return (
    // 1) 화면 전체를 flex col로 구성
    <div className="flex h-screen flex-col bg-[#222222] text-center font-Pretendard">
      {/* 2) 메인 콘텐츠: flex-1로 남은 공간을 전부 차지 */}
      <div className="flex-1">
        <MainContent />
      </div>

      {/* 3) Tool: 아래쪽에 위치 (flex-col의 마지막) */}
      <div>
        <Tool />
      </div>
    </div>
  );
}

export default StudyRoom;
