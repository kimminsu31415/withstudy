// src/components/Tool.jsx
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Tool.css';
import DraggableModal from './DraggableModal';

function Tool() {
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);

  // 모달 열고 닫기(토글) - 타이머
  const toggleTimerModal = () => {
    setIsTimerModalOpen((prev) => !prev);
  };

  // 모달 열고 닫기(토글) - 디데이
  const toggleDdayModal = () => {
    setIsDdayModalOpen((prev) => !prev);
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
        onClick={toggleTimerModal}
      >
        <div className="button-content">타이머</div>
      </button>

      <span className="separator"></span>

      {/* D-day 버튼 */}
      <button
        className={
          isDdayModalOpen ? 'upgrade-button timer-active' : 'upgrade-button'
        }
        data-tooltip-id="dday-tip"
        data-tooltip-content="디데이 설정"
        onClick={toggleDdayModal}
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

      {/* 타이머 모달 */}
      <DraggableModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        title="타이머 설정"
      >
        <p>타이머 설정을 여기에 추가하세요.</p>
        {/* 필요한 추가 내용, 폼 등을 넣어도 됨 */}
      </DraggableModal>

      {/* 디데이 모달 */}
      <DraggableModal
        isOpen={isDdayModalOpen}
        onClose={() => setIsDdayModalOpen(false)}
        title="디데이 설정"
      >
        <p>디데이 설정을 여기에 추가하세요.</p>
        {/* D-day 관련 폼이나 내용 */}
      </DraggableModal>
    </div>
  );
}

export default Tool;
