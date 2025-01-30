// src/components/YouTubeEmbed.jsx
import React from "react";

function YouTubeEmbed({ url }) {
  return (
    <div className="aspect-video w-[640px] max-w-full bg-black">
      {/* iframe 내비둬도 되고, style 원하는 대로 */}
      <iframe
        className="h-full w-full"
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
