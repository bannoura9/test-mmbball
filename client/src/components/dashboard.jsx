import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Welcome from "./modules/welcome";
import WeeklyNews from "./modules/weekly-news";
import SkillOfTheWeek from "./modules/skill-of-the-week";
import UpcomingWorkouts from "./modules/upcoming-workouts-dashboard";
import VideoLibrary from "./video-library";

const Dashboard = () => {
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const { data } = await axios.post("/users", user);
          sessionStorage.setItem("email", data.email);
        } catch (err) {
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Welcome />
      <WeeklyNews />
      <SkillOfTheWeek />
      <UpcomingWorkouts />
      <VideoLibrary isHomepage />
    </div>
  );
};

export default Dashboard;
