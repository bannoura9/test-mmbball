import React from "react";
import skillOfTheWeekImg from "../../assets/icons/feature.png";

const skillOfTheWeek = () => {
  return (
    <div className="container dashOpacity">
      <div id="skillWeek" className="card mb-1">
        <div className="mt-4">
          <img id="rec-videos-icon" src={skillOfTheWeekImg} alt="" />
          <h4 className="card-title fs-3">Skill of the Week</h4>
          <h6 className="card-subtitle mb-3 text-black-50">
            Week of March 15th
          </h6>
        </div>
        <div className="video-container ">
          <div className="video">
            <iframe
              title="Video of the Week"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xUxQR5bwBC8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="card-body mb-2">
          <h5>Drift Cut</h5>
          <p className="card-text text-black-50">
            The Drift Cut is a common Perimeter Cut used to stretch the defense and create space horizontally on dribble drives.
            It is also an important cut as it relates to providing an "outlet pass" for ball handlers that 
            get stuck along the baseline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default skillOfTheWeek;
