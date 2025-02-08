import React, { useState } from "react";

function App() {
  // 초기 상태: Video 1, Video 2 포함
  const [videos, setVideos] = useState([1, 2]);

  // 동영상 추가 버튼 클릭 (최대 4개까지)
  const addVideo = () => {
    if (videos.length < 4) {
      setVideos([...videos, videos.length + 1]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {/* 동영상 추가 버튼 */}
      <button
        onClick={addVideo}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        동영상 추가
      </button>

      {/* 영상 그리드 컨테이너 */}
      <div className="grid w-full max-w-4xl gap-4">
        {/* 영상이 2개 이하일 때 1x2 배열 */}
        {videos.length <= 2 && (
          <div className="grid grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video flex-1 items-center justify-center bg-black text-white"
              >
                Video {video}
              </div>
            ))}
          </div>
        )}

        {/* 영상이 3개일 때, 가운데 정렬 */}
        {videos.length === 3 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {videos.slice(0, 2).map((video, index) => (
              <div
                key={index}
                className="flex aspect-video flex-1 items-center justify-center bg-black text-white"
              >
                Video {video}
              </div>
            ))}
            {/* 가운데 정렬을 위한 빈 div */}
            <div className="col-span-2 flex justify-center">
              <div className="flex aspect-video max-w-[50%] flex-1 items-center justify-center bg-black text-white">
                Video {videos[2]}
              </div>
            </div>
          </div>
        )}

        {/* 영상이 4개일 때 2x2 배열 */}
        {videos.length === 4 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video flex-1 items-center justify-center bg-black text-white"
              >
                Video {video}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 하단 Toolbar */}
      <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-[calc(100%-80px)]">
        <div className="flex h-14 items-center justify-center rounded-lg bg-black px-4">
          <div className="flex gap-8 text-white">
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

export default App;
