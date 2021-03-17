import React from "react";
import weeklyNewsIcon from "../../assets/icons/announcement.png";

const WeeklyNews = () => {
  return (
    <div className="container dashOpacity">
      <div id="weeklyNews" className="card mb-1">
        <div className="mt-4">
          <img id="weeklyNewsIcon" src={weeklyNewsIcon} alt="" />
          <h4 className="card-title fs-3">Weekly News</h4>
          <h6 className="card-subtitle text-black-50">Week of March 15th</h6>
        </div>
        <div className="card-body mt-3">
          <p className="card-text text-black-50">
            PLAYER SPOTLIGHT: Congratulations to Grace Moyers on being name
            Co-MVP of the Northern Colorado 4A League. Grace averaged 22 points,
            5 assists, and 3 steals per game this season.
            <br />
            <br />
            WEATHER: Due to multiple storm warnings this week, missed remote
            workouts will be excused. Please message Coach Mychal to reschedule
            your workouts if weather is an issue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyNews;
