import React, { useState } from "react";
import TestTool from "../components/TestTool";

function Test4() {
  // 추가 영상(div)의 개수를 state로 관리 (최대 3개)
  const [videoCount, setVideoCount] = useState(0);

  // "영상 추가" 버튼 클릭 시 호출되는 함수
  const addVideo = () => {
    // videoCount가 3 미만일 때만 추가 (최대 3개)
    if (videoCount < 3) {
      setVideoCount(videoCount + 1);
    }
  };

  // 항상 첫 번째 영상은 'me'이며, 그 뒤로 추가 영상들이 순서대로 추가됨
  const videos = [
    "me",
    ...Array.from({ length: videoCount }, (_, i) => `영상 ${i + 1}`),
  ];

  // 영상의 총 개수가 3개 이상이면 grid 레이아웃 (2열), 그렇지 않으면 flex 레이아웃 사용
  const containerClass =
    videos.length >= 3
      ? "grid grid-cols-2 gap-5 bg-red-200"
      : "flex w-full justify-center gap-5 bg-red-200";

  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인 콘텐츠 영역 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center desktop:px-36">
        {/* 영상 영역 */}
        <div className="flex max-h-screen w-full flex-col gap-5 bg-blue-200">
          <div className={containerClass}>
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video w-full items-center justify-center bg-[#3F3F3F]"
              >
                {video}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 Toolbar: onAddVideo prop을 전달 */}
      <TestTool onAddVideo={addVideo} />
    </div>
  );
}

export default Test4;
