// src/components/Tool.jsx
import React, { useState } from "react";
import { Tooltip } from "react-tooltip"; // 화면공유 툴팁 용도
import "react-tooltip/dist/react-tooltip.css"; // 툴팁 CSS
import DraggableModal from "./DraggableModal"; // 드래그 모달 (Tailwind 버전)

function Tool() {
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);

  // 타이머 모달 열고 닫기(토글)
  const toggleTimerModal = () => {
    setIsTimerModalOpen((prev) => !prev);
  };

  // 디데이 모달 열고 닫기(토글)
  const toggleDdayModal = () => {
    setIsDdayModalOpen((prev) => !prev);
  };

  return (
    <div className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-black p-2">
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
