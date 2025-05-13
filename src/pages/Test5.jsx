// src/pages/Test5.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMicrophone, FaVideo, FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Test5() {
  const navigate = useNavigate();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [isScreenShareActive, setIsScreenShareActive] = useState(false);

  const handleCameraToggle = () => {
    setIsCameraActive((prev) => !prev);
  };

  const handleMicrophoneToggle = () => {
    setIsMicrophoneActive((prev) => !prev);
  };

  const handleScreenShareToggle = () => {
    setIsScreenShareActive((prev) => !prev);
  };

  const handleStopSharing = () => {
    setIsCameraActive(false);
    setIsMicrophoneActive(false);
    setIsScreenShareActive(false);
  };

  const handleDelete = () => {
    setIsCameraActive(false);
    setIsMicrophoneActive(false);
    setIsScreenShareActive(false);
  };

  const handleShareCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia();
      setIsScreenShareActive(true);
      setScreenShareStream(stream);
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
  };

  const handleStopScreenShare = () => {
    if (screenShareStream) {
      screenShareStream.getTracks().forEach((track) => track.stop());
      setIsScreenShareActive(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-[#222222] text-center font-Pretendard"></div>
  );
}

export default Test5;
