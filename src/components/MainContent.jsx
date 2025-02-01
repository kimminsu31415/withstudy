// src/components/MainContent.jsx
import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

function MainContent({ videoUrl }) {
  return (
    <div className="desktop:text-3xl tablet:text-2xl mobile:text-xl flex h-full w-full items-center justify-center bg-red-600 text-white">
      {videoUrl ? (
        <YouTubeEmbed url={videoUrl} />
      ) : (
        <p>메인 콘텐츠 영역 (영상 없음)</p>
      )}
    </div>
  );
}

export default MainContent;
