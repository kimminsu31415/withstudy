import React from "react";

function Test() {
  // 동영상 목록 (테스트: 3개인 경우)
  const videos = ["1번 동영상", "2번 동영상", "3번 동영상", "4번 동영상"];
  // 4번 동영상을 추가하고 싶다면 아래처럼 넣으면 됩니다.
  // const videos = ["1번 동영상", "2번 동영상", "3번 동영상", "4번 동영상"];

  // 동영상 목록을 2개씩 묶어 행(row) 배열로 만듭니다.
  const videoRows = [];
  for (let i = 0; i < videos.length; i += 2) {
    videoRows.push(videos.slice(i, i + 2));
  }

  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인 콘텐츠 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center bg-slate-500">
        {/* 영상 영역: 각 행을 flex 컨테이너로 구성 */}
        <div className="flex w-full flex-col gap-5 bg-red-300">
          {videoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-full justify-center gap-5">
              {row.map((video, index) => (
                <div
                  key={index}
                  className="flex aspect-video max-w-[calc(50%)] flex-1 items-center justify-center bg-slate-300"
                >
                  {video}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 하단 Toolbar */}
      <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-[calc(100%-80px)]">
        <div className="flex h-14 items-center justify-center rounded-lg bg-black px-4">
          <div className="flex gap-8">
            <button>
              <p>비디오 ON</p>
            </button>
            <button>
              <p>영상 추가</p>
            </button>
          </div>
          <button className="absolute right-3 rounded-md bg-red-600 px-2 py-1">
            <p>나가기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
