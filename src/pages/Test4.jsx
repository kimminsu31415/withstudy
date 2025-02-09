import React from "react";
import TestTool from "../components/TestTool";

function Test4() {
  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인 콘텐츠 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center desktop:px-36">
        {/* 영상 영역: 각 행을 flex 컨테이너로 구성 */}
        <div className="flex max-h-screen w-full flex-col gap-5 bg-blue-200">
          <div className="flex w-full justify-center gap-5 bg-red-200">
            <div className="flex aspect-video max-w-full flex-1 items-center justify-center bg-[#3F3F3F]">
              me
            </div>
          </div>
        </div>
      </div>

      {/* 하단 Toolbar */}
      <TestTool />
    </div>
  );
}

export default Test4;
