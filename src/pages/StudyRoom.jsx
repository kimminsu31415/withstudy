// src/pages/StudyRoom.jsx
import React from "react";
import Tool from "../components/Tool";

function StudyRoom() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#222222] p-8 text-center font-sans">
      <div>
        <p className="bg-red-600 text-white">메인 콘텐츠 영역</p>
      </div>

      <Tool />
    </div>
  );
}

export default StudyRoom;
