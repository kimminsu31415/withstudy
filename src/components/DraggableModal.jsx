// src/components/DraggableModal.jsx
import React, { useState, useEffect } from "react";

function DraggableModal({ isOpen, onClose, title, children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState(null); // relative position of mouse to modal

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 화면 가운데로 배치
      const centerX = window.innerWidth / 2 - 200; // 모달 너비가 400px이라고 가정
      const centerY = window.innerHeight / 2 - 150; // 모달 높이가 300px이라고 가정
      setModalPosition({ x: centerX, y: centerY });
    }
  }, [isOpen]);

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // 좌클릭이 아니면 무시
    const rect = e.currentTarget.getBoundingClientRect();
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
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // 모달 오버레이 (Tailwind)
    <div className="pointer-events-none fixed left-0 top-0 z-[1000] h-full w-full">
      {/* 모달 박스 */}
      <div
        className="pointer-events-auto absolute h-[300px] w-[400px] rounded-lg bg-white shadow-lg"
        style={{
          top: modalPosition.y,
          left: modalPosition.x,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div
          className="flex cursor-grab items-center justify-between border-b border-gray-300 bg-gray-100 p-3"
          onMouseDown={onMouseDown}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="cursor-pointer border-none bg-transparent text-2xl leading-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export default DraggableModal;
