import React from "react";
import TestTool from "../components/TestTool";

function Test4() {
  // 동영상 목록 (테스트: 3개인 경우)
  const videos = ["Me", "1번 동영상", "2번 동영상"];
  // 3번 동영상을 추가하고 싶다면 아래처럼 넣으면 됩니다.
  // const videos = ["1번 동영상", "2번 동영상", "3번 동영상"];

  // 동영상 목록을 2개씩 묶어 행(row) 배열로 만듭니다.
  const videoRows = [];
  for (let i = 0; i < videos.length; i += 2) {
    videoRows.push(videos.slice(i, i + 2));
  }

  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인 콘텐츠 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center desktop:px-36">
        {/* 영상 영역: 각 행을 flex 컨테이너로 구성 */}
        <div className="flex max-h-screen w-full flex-col gap-5 desktop:gap-10">
          {videoRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full justify-center gap-5 desktop:gap-10"
            >
              {row.map((video, index) => (
                <div
                  key={index}
                  className="flex aspect-video max-w-[calc(50%)] flex-1 items-center justify-center bg-gray-500"
                >
                  {video}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 하단 Toolbar */}
      <TestTool />
    </div>
  );
}

export default Test4;
