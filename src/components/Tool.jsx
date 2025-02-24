// src/components/Tool.jsx
import React, { useState } from "react";
import { Tooltip } from "react-tooltip"; // 화면공유 툴팁 용도
import "react-tooltip/dist/react-tooltip.css"; // 툴팁 CSS
import DraggableModal from "./DraggableModal"; // 드래그 모달 (Tailwind 버전)

function Tool({ setVideoUrl }) {
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");

  // 타이머 모달 열고 닫기(토글)
  const toggleTimerModal = () => {
    setIsTimerModalOpen((prev) => !prev);
  };

  // 디데이 모달 열고 닫기(토글)
  const toggleDdayModal = () => {
    setIsDdayModalOpen((prev) => !prev);
  };

  // 유튜브 "watch?v=" 형태 → embed 형태로 변환하는 함수
  const convertToEmbedUrl = (link) => {
    // 예: link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    // 결과: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    try {
      const url = new URL(link);
      if (
        url.hostname.includes("youtube.com") ||
        url.hostname.includes("youtu.be")
      ) {
        // 파라미터 v=VIDEO_ID
        // or youtu.be/VIDEO_ID
        // 단순히 watch?v= -> embed/
        if (url.searchParams.has("v")) {
          // watch?v=VIDEO_ID
          const vid = url.searchParams.get("v");
          return `https://www.youtube.com/embed/${vid}`;
        } else {
          // youtu.be/VIDEO_ID
          // path : /dQw4w9WgXcQ
          const path = url.pathname; // "/dQw4w9WgXcQ"
          return `https://www.youtube.com/embed${path}`;
        }
      }
      // fallback
      return link;
    } catch (error) {
      // 잘못된 URL
      return link;
    }
  };

  const handlePlayVideo = () => {
    if (youtubeLink.trim() === "") return;

    // "https://www.youtube.com/watch?v=..." -> "https://www.youtube.com/embed/..."
    const embedUrl = convertToEmbedUrl(youtubeLink);
    setVideoUrl(embedUrl);
  };

  const handleClearVideo = () => {
    setVideoUrl(null);
    setYoutubeLink("");
  };
  return (
    <div className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-black p-2">
      {/* 유튜브 링크 입력창 */}
      <input
        type="text"
        placeholder="유튜브 링크를 입력하세요"
        className="w-64 rounded px-2 py-1 text-black"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
      />

      <button
        onClick={handlePlayVideo}
        className="cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
      >
        영상 재생
      </button>

      <span className="h-6 w-px bg-white" />

      <button
        onClick={handleClearVideo}
        className="cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
      >
        영상 제거
      </button>

      <span className="h-6 w-px bg-white" />

      {/* 타이머 버튼 */}
      <button
        onClick={toggleTimerModal}
        data-tooltip-id="timer-tip"
        data-tooltip-content="타이머"
        className={
          isTimerModalOpen
            ? "cursor-pointer rounded border-none bg-transparent px-4 py-2 text-red-500 transition-colors duration-200"
            : "cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
        }
      >
        타이머
      </button>

      <span className="h-6 w-px bg-white" />

      {/* D-day 버튼 */}
      <button
        onClick={toggleDdayModal}
        data-tooltip-id="dday-tip"
        data-tooltip-content="디데이 설정"
        className={
          isDdayModalOpen
            ? "cursor-pointer rounded border-none bg-transparent px-4 py-2 text-red-500 transition-colors duration-200"
            : "cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
        }
      >
        D-day
      </button>

      <span className="h-6 w-px bg-white" />

      {/* 화면공유 버튼 */}
      <div className="relative">
        <button
          data-tooltip-id="screen-share-tip"
          data-tooltip-content="👉 화면 공유하기"
          className="cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
        >
          화면공유
        </button>
      </div>
      <Tooltip
        id="screen-share-tip"
        place="bottom"
        type="dark"
        effect="solid"
      />

      <span className="h-6 w-px bg-white" />

      {/* 화면공유 취소 버튼 */}
      <button
        data-tooltip-id="cancel-share-tip"
        data-tooltip-content="🚀 공유 취소"
        className="cursor-pointer rounded border-none bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:text-[#fbbf24]"
      >
        공유 취소
      </button>
      <Tooltip id="cancel-share-tip" place="top" type="dark" effect="solid" />

      {/* 타이머 모달 */}
      <DraggableModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        title="타이머 설정"
      >
        <p>타이머 설정을 여기에 추가하.</p>
      </DraggableModal>

      {/* 디데이 모달 */}
      <DraggableModal
        isOpen={isDdayModalOpen}
        onClose={() => setIsDdayModalOpen(false)}
        title="디데이 설정"
      >
        <p>디데이 설정을 여기에 추가하세요.</p>
      </DraggableModal>
    </div>
  );
}

export default Tool;
