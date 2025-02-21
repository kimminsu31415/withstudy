import React, { useState } from "react";
import TestTool from "../components/TestTool";
import UserCamera from "../components/UserCamera";

function Test4() {
  // 유튜브 링크 관리 (최대 3개)
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  // 유튜브 링크 입력 모달 표시 여부
  const [showInput, setShowInput] = useState(false);
  // 입력한 링크 값
  const [inputLink, setInputLink] = useState("");
  // 카메라 on/off 상태 관리
  const [cameraOn, setCameraOn] = useState(false);
  // 배경색 관리 (기본값: #222222)
  const [bgColor, setBgColor] = useState("#222222");
  // 컬러 피커 표시 여부
  const [showColorPicker, setShowColorPicker] = useState(false);

  // 유튜브 URL을 embed URL로 변환하는 헬퍼 함수
  const getYoutubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      // 일반 링크: https://www.youtube.com/watch?v=VIDEO_ID
      if (urlObj.hostname.includes("youtube.com")) {
        const videoId = urlObj.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
      // 짧은 링크: https://youtu.be/VIDEO_ID
      if (urlObj.hostname === "youtu.be") {
        const videoId = urlObj.pathname.slice(1);
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {
      console.error("Invalid URL.", e);
    }
    return url;
  };

  // "영상 추가" 버튼 클릭 시 모달 열기
  const openInputModal = () => {
    if (youtubeLinks.length < 3) {
      setShowInput(true);
    } else {
      alert("You can add up to 3 videos only.");
    }
  };

  // 모달 확인 버튼
  const handleOk = () => {
    if (inputLink.trim() === "") {
      alert("Please enter a YouTube link.");
      return;
    }
    const embedLink = getYoutubeEmbedUrl(inputLink);
    setYoutubeLinks([...youtubeLinks, embedLink]);
    setInputLink("");
    setShowInput(false);
  };

  // 모달 취소 버튼
  const handleCancel = () => {
    setInputLink("");
    setShowInput(false);
  };

  // 카메라 토글 함수
  const toggleCamera = () => {
    setCameraOn((prev) => !prev);
  };

  // 컬러 피커 표시 토글 함수
  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev);
  };

  // 배경색 변경 함수
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  // 영상 영역의 레이아웃 
  const totalVideos = 1 + youtubeLinks.length;
  const containerClass =
    totalVideos >= 3
      ? "grid grid-cols-2 gap-5"
      : "flex w-full justify-center gap-5";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative flex min-h-screen w-full text-white"
    >
      {/* 메인 콘텐츠 영역 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center desktop:px-20 desktop:pb-10">
        <div className="flex max-h-screen w-full flex-col gap-5">
          <div className={containerClass}>
            <div className="flex aspect-video w-full items-center justify-center bg-[#0c0c0c]">
              {cameraOn ? <UserCamera /> : "me"}
            </div>
            {youtubeLinks.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video w-full items-center justify-center bg-[#3F3F3F]"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={video}
                  title={`youtube-video-${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 컬러 피커 UI (TestTool 위에 위치) */}
      {showColorPicker && (
        <div className="absolute bottom-20 left-0 right-0 mx-auto w-64 max-w-[calc(100%-80px)]">
          <div className="flex justify-center rounded bg-white p-4">
            {/* 각 원형 버튼은 클릭 시 배경색 변경 */}
            <div
              onClick={() => changeBackgroundColor("#FC8472")}
              className="mx-2 h-10 w-10 cursor-pointer rounded-full bg-[#FC8472]"
            ></div>
            <div
              onClick={() => changeBackgroundColor("#344D2A")}
              className="mx-2 h-10 w-10 cursor-pointer rounded-full bg-[#344D2A]"
            ></div>
            <div
              onClick={() => changeBackgroundColor("#5B67A2")}
              className="mx-2 h-10 w-10 cursor-pointer rounded-full bg-[#5B67A2]"
            ></div>
            <div
              onClick={() => changeBackgroundColor("#222222")}
              className="mx-2 h-10 w-10 cursor-pointer rounded-full bg-[#222222]"
            ></div>
          </div>
        </div>
      )}

      {/* 하단 Toolbar */}
      <TestTool
        onAddVideo={openInputModal}
        cameraOn={cameraOn}
        toggleCamera={toggleCamera}
        toggleColorPicker={toggleColorPicker}
      />

      {/* 유튜브 링크 입력 모달 */}
      {showInput && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[300px] rounded bg-white p-4">
            <h2 className="mb-2 text-black">Enter YouTube Link</h2>
            <input
              type="text"
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              className="mb-4 w-full rounded border border-gray-300 p-2 text-black"
              placeholder="https://www.youtube.com/watch?v=..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="rounded bg-gray-300 px-4 py-2 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleOk}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test4;
