import React, { useState, useEffect } from "react";

function TestTool({ onAddVideo, cameraOn, toggleCamera, toggleColorPicker }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // 풀 스크린 상태 변경 감지
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error entering full screen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error exiting full screen mode: ${err.message} (${err.name})`,
        );
      });
    }
  };

  return (
    <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-[calc(100%-80px)]">
      <div className="flex h-14 items-center justify-center rounded-lg bg-black px-4">
        <div className="flex gap-8 text-white">
          <button onClick={toggleCamera} className="hover:text-orange-400">
            <p>{cameraOn ? "Video OFF" : "Video ON"}</p>
          </button>
          <button onClick={onAddVideo} className="hover:text-orange-400">
            <p>Add Video</p>
          </button>
          <button onClick={toggleColorPicker} className="hover:text-orange-400">
            <p>Color Change</p>
          </button>
        </div>
        <button
          onClick={toggleFullScreen}
          className="absolute right-3 rounded-md bg-[#3381FF] px-3 py-1 text-white hover:bg-[#163EAD]"
        >
          <p>{isFullScreen ? "Exit Full Screen" : "Full Screen"}</p>
        </button>
      </div>
    </div>
  );
}

export default TestTool;
