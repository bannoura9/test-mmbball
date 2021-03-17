import React from "react";

const recentlyAdded = ({ videos }) => {
  return (
    <div class="container dashOpacity mb-5">
      <div id="video-wrapper" class="card mb-1">
        <div class="video-container">
          {videos.map((video, i) => (
            <div key={i} className="video">
              <iframe
                width="100%"
                height="280"
                src={`https://www.youtube.com/embed/${video.resourceId.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default recentlyAdded;
