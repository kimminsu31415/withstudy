import React, { useState } from "react";
import TestTool from "../components/TestTool";

function Test4() {
  // youtube 링크들을 배열로 관리 (최대 3개)
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  // 모달 창(링크 입력창) 노출 여부 관리
  const [showInput, setShowInput] = useState(false);
  // 입력한 링크 값을 관리
  const [inputLink, setInputLink] = useState("");

  // 유튜브 URL을 embed URL로 변환하는 헬퍼 함수
  const getYoutubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      // 일반적인 youtube 링크: https://www.youtube.com/watch?v=VIDEO_ID
      if (urlObj.hostname.includes("youtube.com")) {
        const videoId = urlObj.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
      // 짧은 링크 형식: https://youtu.be/VIDEO_ID
      if (urlObj.hostname === "youtu.be") {
        const videoId = urlObj.pathname.slice(1);
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {
      console.error("유효하지 않은 URL입니다.", e);
    }
    // 변환에 실패하면 원본을 그대로 반환 (혹은 다른 처리를 할 수 있음)
    return url;
  };

  // "영상 추가" 버튼 클릭 시 호출되는 함수 : 모달을 열어줌
  const openInputModal = () => {
    if (youtubeLinks.length < 3) {
      setShowInput(true);
    } else {
      alert("최대 3개의 영상만 추가할 수 있습니다.");
    }
  };

  // 모달의 확인 버튼 클릭 시 호출되는 함수
  const handleOk = () => {
    if (inputLink.trim() === "") {
      alert("유튜브 링크를 입력하세요.");
      return;
    }
    const embedLink = getYoutubeEmbedUrl(inputLink);
    setYoutubeLinks([...youtubeLinks, embedLink]);
    setInputLink("");
    setShowInput(false);
  };

  // 모달의 취소 버튼 클릭 시 호출되는 함수
  const handleCancel = () => {
    setInputLink("");
    setShowInput(false);
  };

  // 항상 첫 번째는 'me' (사용자 카메라 화면)이며, 그 뒤로 입력된 유튜브 영상들이 추가됨
  const videos = ["me", ...youtubeLinks];

  // 영상의 총 개수가 3개 이상(즉, 'me' 포함 3개 이상)이면 grid 레이아웃, 그렇지 않으면 flex 레이아웃 사용
  const containerClass =
    videos.length >= 3
      ? "grid grid-cols-2 gap-5 "
      : "flex w-full justify-center gap-5 ";

  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인 콘텐츠 영역 */}
      <div className="mx-auto flex w-full max-w-[calc(100%-80px)] flex-col items-center justify-center desktop:px-20 desktop:pb-10">
        {/* 영상 영역 */}
        <div className="flex max-h-screen w-full flex-col gap-5">
          <div className={containerClass}>
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex aspect-video w-full items-center justify-center bg-[#3F3F3F]"
              >
                {video === "me" ? (
                  // 'me' div는 카메라 화면 (여기서는 단순 텍스트 처리)
                  "me"
                ) : (
                  // 입력된 유튜브 링크에 따른 iframe embed
                  <iframe
                    width="100%"
                    height="100%"
                    src={video}
                    title={`youtube-video-${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 Toolbar에 onAddVideo prop 전달 */}
      <TestTool onAddVideo={openInputModal} />

      {/* 유튜브 링크 입력 모달 */}
      {showInput && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[300px] rounded bg-white p-4">
            <h2 className="mb-2 text-black">유튜브 링크 입력</h2>
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
                취소
              </button>
              <button
                onClick={handleOk}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test4;
