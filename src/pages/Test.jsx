import React, { useState } from "react";

function App() {
  // 유튜브 영상 상태: 초기에는 Video 1 (즉, 1개의 영상)
  const [youtubeVideos, setYoutubeVideos] = useState([1]);

  // 영상 추가 버튼 클릭 (총 4칸 중 "Me" 셀은 고정, 즉 최대 3개의 유튜브 영상)
  const addVideo = () => {
    if (youtubeVideos.length < 3) {
      setYoutubeVideos([...youtubeVideos, youtubeVideos.length + 1]);
    }
  };

  // 전체 셀의 개수는 유튜브 영상 개수 + 1("Me" 셀)
  const totalCells = youtubeVideos.length + 1;

  // 유튜브 링크를 입력받기 위한 상태
  const [youtubeLink, setYoutubeLink] = useState("");

  // 입력 폼 제출 핸들러
  const handleAddLink = (e) => {
    e.preventDefault();
    // 현재 입력된 유튜브 링크 처리 (예: 상태 업데이트, API 호출 등)
    console.log("추가할 유튜브 링크:", youtubeLink);
    // 입력 후 초기화
    setYoutubeLink("");
  };

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {/* 영상 그리드 컨테이너 */}
      <div className="grid w-full max-w-4xl gap-4">
        {totalCells === 2 && (
          <div className="grid grid-cols-2 gap-4 bg-red-200">
            {/* 첫 번째 셀: 사용자 화면(Me) */}
            <div className="flex aspect-video items-center justify-center bg-black text-white">
              Me
            </div>
            {/* 두 번째 셀: 첫 번째 유튜브 영상 */}
            <div className="flex aspect-video items-center justify-center bg-black text-white">
              Video {youtubeVideos[0]}
            </div>
          </div>
        )}

        {totalCells === 3 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex aspect-video items-center justify-center bg-black text-white">
              Me
            </div>
            <div className="flex aspect-video items-center justify-center bg-black text-white">
              Video {youtubeVideos[0]}
            </div>
            {/* 가운데 정렬을 위한 셀 */}
            <div className="col-span-2 flex justify-center">
              <div className="flex aspect-video max-w-[50%] items-center justify-center bg-black text-white">
                Video {youtubeVideos[1]}
              </div>
            </div>
          </div>
        )}

        {totalCells === 4 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="flex aspect-video items-center justify-center bg-black text-white">
              Me
            </div>
            {youtubeVideos.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video items-center justify-center bg-black text-white"
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
            <button className="hover:text-orange-400">
              <p>비디오 ON</p>
            </button>
            <button onClick={addVideo} className="hover:text-orange-400">
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
    </div>
  );
}

export default App;
