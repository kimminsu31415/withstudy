// src/components/Tool.jsx
import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Tool.css';

function Tool() {
  return (
    <div className="tool-container">
      {/* 타이머 버튼 */}
      <button
        className="upgrade-button"
        data-tooltip-id="upgrade-tip"
        data-tooltip-content="타이머"
      >
        <div className="button-content">타이머</div>{' '}
      </button>

      <span className="separator"></span>

      {/* D-day 버튼 */}
      <button
        className="upgrade-button"
        data-tooltip-id="upgrade-tip"
        data-tooltip-content="디데이 설정"
      >
        <div className="button-content">D-day</div>{' '}
      </button>

      <span className="separator"></span>

      {/* 화면공유 버튼 */}
      <div className="user-metrics-btn">
        <button
          className="user-metrics-button"
          data-tooltip-id="user-streak-tip"
          data-tooltip-content="👉 화면 공유하기"
        >
          <div className="button-content">
            <span className="metric-count">화면공유</span>{' '}
          </div>
        </button>
        <Tooltip
          id="user-streak-tip"
          place="bottom"
          type="dark"
          effect="solid"
        />
      </div>

      <span className="separator"></span>

      {/* 화면공유 취소 버튼 */}
      <button
        className="upgrade-button"
        data-tooltip-id="upgrade-tip"
        data-tooltip-content="🚀 공유 취소"
      >
        <div className="button-content">공유 취소</div>{' '}
      </button>
      <Tooltip id="upgrade-tip" place="top" type="dark" effect="solid" />
    </div>
  );
}

export default Tool;
