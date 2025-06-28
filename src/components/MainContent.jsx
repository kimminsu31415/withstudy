// src/components/MainContent.jsx
// 따로 사용하는 곳 없음

import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

function MainContent({ videoUrl }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#222222] text-white mobile:text-xl tablet:text-2xl desktop:text-3xl">
      {videoUrl ? (
        <YouTubeEmbed url={videoUrl} />
      ) : (
        <p>메인 콘텐츠 영역 (영상 없음)</p>
      )}
    </div>
  );
}

export default MainContent;
