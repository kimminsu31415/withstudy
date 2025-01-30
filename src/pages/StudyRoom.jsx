// src/pages/StudyRoom.jsx
import React, { useState } from "react";
import MainContent from "../components/MainContent";
import Tool from "../components/Tool";

function StudyRoom() {
  // 영상 URL을 저장할 상태. 없으면 null
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div className="flex h-screen flex-col bg-[#222222] text-center font-Pretendard">
      {/* 메인 콘텐츠 (flex-1로 툴 제외한 남은 공간 채우기) */}
      <div className="flex-1">
        <MainContent videoUrl={videoUrl} />
      </div>

      {/* 하단 툴 */}
      <Tool setVideoUrl={setVideoUrl} />
    </div>
  );
}

export default StudyRoom;
