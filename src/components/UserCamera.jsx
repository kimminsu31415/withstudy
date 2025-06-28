// test4에서 사용하는 유저 카메라 컴포넌트

import React, { useRef, useEffect } from "react";

function UserCamera() {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("카메라 접근 중 오류 발생:", err);
      }
    }
    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

export default UserCamera;
