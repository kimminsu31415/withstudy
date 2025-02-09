import React from "react";

function TestTool() {
  const toggleFullScreen = () => {
    // 현재 전체화면 모드가 아니라면 전체화면 요청
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `전체 화면 모드 활성화 중 오류 발생: ${err.message} (${err.name})`,
        );
      });
    } else {
      // 이미 전체화면 모드라면 전체화면 종료 요청
      document.exitFullscreen();
    }
  };

  return (
    <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-[calc(100%-80px)]">
      <div className="flex h-14 items-center justify-center rounded-lg bg-black px-4">
        <div className="flex gap-8 text-white">
          <button className="hover:text-orange-400">
            <p>비디오 ON</p>
          </button>
          <button className="hover:text-orange-400">
            <p>영상 추가</p>
          </button>
        </div>
        <button
          onClick={toggleFullScreen}
          className="absolute right-3 rounded-md bg-red-600 px-2 py-1 text-white hover:bg-red-700"
        >
          <p>꽉 채우기</p>
        </button>
      </div>
    </div>
  );
}

export default TestTool;
