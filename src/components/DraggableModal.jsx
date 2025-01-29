// src/components/DraggableModal.jsx
import React, { useState, useEffect } from "react";

function snapToGrid(value) {
  const gridSize = 50; // 50px 격자로 스냅
  return Math.round(value / gridSize) * gridSize;
}

function DraggableModal({ isOpen, onClose, title, children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState(null); // relative mouse offset from top-left of modal

  // 모달이 열릴 때 중앙에 배치
  useEffect(() => {
    if (isOpen) {
      const centerX = window.innerWidth / 2 - 200; // assuming width=400
      const centerY = window.innerHeight / 2 - 150; // assuming height=300
      setModalPosition({ x: centerX, y: centerY });
    }
  }, [isOpen]);

  // 드래그 시작
  const onMouseDown = (e) => {
    if (e.button !== 0) return; // only left-click
    const rect = e.currentTarget.getBoundingClientRect();
    setIsDragging(true);
    setRel({
      x: e.pageX - rect.left,
      y: e.pageY - rect.top,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  // 드래그 중
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.pageX - rel.x;
    const newY = e.pageY - rel.y;
    // 드래그 중에는 그냥 부드럽게 이동 (no snapping)
    setModalPosition({ x: newX, y: newY });
    e.stopPropagation();
    e.preventDefault();
  };

  // 드래그 종료
  const onMouseUp = () => {
    setIsDragging(false);
    // 모달 위치를 50px 격자로 스냅
    setModalPosition((prev) => ({
      x: snapToGrid(prev.x),
      y: snapToGrid(prev.y),
    }));
  };

  // 마우스 이벤트 등록/해제
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
        style={{ top: modalPosition.y, left: modalPosition.x }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 (드래그 핸들) */}
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
        {/* 내용 */}
        <div className="overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export default DraggableModal;
