// src/components/Tool.jsx
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Tool.css';
import TimerModal from './TimerModal';

function Tool() {
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);

  // 모달 열고 닫기(토글)
  const toggleTimerModal = () => {
    setIsTimerModalOpen((prev) => !prev);
  };

  const closeTimerModal = () => {
    setIsTimerModalOpen(false);
  };

  return (
    <div className="tool-container">
      {/* 타이머 버튼 */}
      <button
        className={
          isTimerModalOpen ? 'upgrade-button timer-active' : 'upgrade-button'
        }
        data-tooltip-id="timer-tip"
        data-tooltip-content="타이머"
        onClick={toggleTimerModal} // 버튼 클릭 시 모달 열리고 닫힘
      >
        <div className="button-content">타이머</div>
      </button>

      <span className="separator"></span>

      {/* D-day 버튼 */}
      <button
        className="upgrade-button"
        data-tooltip-id="dday-tip"
        data-tooltip-content="디데이 설정"
      >
        <div className="button-content">D-day</div>
      </button>

      <span className="separator"></span>

      {/* 화면공유 버튼 */}
      <div className="user-metrics-btn">
        <button
          className="user-metrics-button"
          data-tooltip-id="screen-share-tip"
          data-tooltip-content="👉 화면 공유하기"
        >
          <div className="button-content">
            <span className="metric-count">화면공유</span>
          </div>
        </button>
        <Tooltip
          id="screen-share-tip"
          place="bottom"
          type="dark"
          effect="solid"
        />
      </div>

      <span className="separator"></span>

      {/* 화면공유 취소 버튼 */}
      <button
        className="upgrade-button"
        data-tooltip-id="cancel-share-tip"
        data-tooltip-content="🚀 공유 취소"
      >
        <div className="button-content">공유 취소</div>
      </button>
      <Tooltip id="cancel-share-tip" place="top" type="dark" effect="solid" />

      {/* TimerModal 컴포넌트 추가 */}
      <TimerModal isOpen={isTimerModalOpen} onClose={closeTimerModal} />
    </div>
  );
}

export default Tool;
