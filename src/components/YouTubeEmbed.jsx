// src/components/YouTubeEmbed.jsx
import React from "react";

function YouTubeEmbed({ url }) {
  return (
    <div className="w-[640px] max-w-full aspect-video bg-black">
      <iframe
        className="w-full h-full"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    </div>
  );
}

export default YouTubeEmbed;
