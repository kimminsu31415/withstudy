// src/components/TimerModal.jsx
import React, { useState, useEffect } from 'react';
import './TimerModal.css';

function TimerModal({ isOpen, onClose }) {
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState(null); // relative position of mouse to modal

  useEffect(() => {
    if (isOpen) {
      // Center the modal
      const centerX = window.innerWidth / 2 - 200; // assuming modal width is 400px
      const centerY = window.innerHeight / 2 - 150; // assuming modal height is 300px
      setModalPosition({ x: centerX, y: centerY });
    }
  }, [isOpen]);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const rect = e.target.getBoundingClientRect();
    setIsDragging(true);
    setRel({
      x: e.pageX - rect.left,
      y: e.pageY - rect.top,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setModalPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  // ESC 키로 모달 닫기 기능 (선택 사항)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 타이머 시작 로직 추가
    alert(`타이머가 n분으로 설정되었습니다.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        style={{ top: modalPosition.y, left: modalPosition.x }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="modal-header" onMouseDown={onMouseDown}>
          <h2>타이머 설정</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {/* 여기에 타이머 설정 내용을 추가하세요 */}
          <p>타이머 설정을 여기에 추가하세요.</p>
        </div>
      </div>
    </div>
  );
}

export default TimerModal;
