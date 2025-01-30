// src/components/MainContent.jsx
import React from "react";

function MainContent() {
  return (
    <div className="desktop:text-3xl tablet:text-2xl mobile:text-xl flex h-full w-full items-center justify-center bg-red-600 text-white">
      메인 콘텐츠 영역
    </div>
  );
}

export default MainContent;
