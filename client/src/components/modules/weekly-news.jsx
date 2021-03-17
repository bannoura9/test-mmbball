import React from "react";
import weeklyNewsIcon from "../../assets/icons/announcement.png";

const WeeklyNews = () => {
  return (
    <div className="container dashOpacity">
      <div id="weeklyNews" className="card mb-1">
        <div className="mt-4">
          <img id="weeklyNewsIcon" src={weeklyNewsIcon} alt="" />
          <h4 className="card-title fs-3">Weekly News</h4>
          <h6 className="card-subtitle text-black-50">Monday, March 2nd</h6>
        </div>
        <div className="card-body mt-3">
          <p className="card-text text-black-50">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
            <br />
            <br />
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyNews;
