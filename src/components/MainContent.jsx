// src/components/MainContent.jsx
import React from "react";
import YouTubeEmbed from "./YouTubeEmbed"; // 별도의 유튜브 iframe 컴포넌트

function MainContent({ videoUrl }) {
  return (
    <div className="desktop:text-3xl tablet:text-2xl mobile:text-xl flex h-full w-full items-center justify-center bg-red-600 text-white">
      {/* 만약 videoUrl이 있으면 유튜브 영상 표시, 없으면 기본 영역 */}
      {videoUrl ? (
        <YouTubeEmbed url={videoUrl} />
      ) : (
        <p>메인 콘텐츠 영역 (영상 없음)</p>
      )}
    </div>
  );
}

export default MainContent;
