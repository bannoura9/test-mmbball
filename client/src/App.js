import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Nav from "./components/modules/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/modules/loading.js";
import history from "./utils/history";
import Dashboard from "./components/dashboard";
import UpcomingWorkouts from "./components/upcoming-workouts";
import BookAWorkout from "./components/book-a-workout";
import VideoLibrary from "./components/video-library";
import Docs from "./components/documents";
import FooterPage from "./components/modules/footer"

import "./App.css";

const App = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <Router history={history}>
      {isAuthenticated && (
        <div id="app" className="d-flex flex-column h-100">
          <Nav />
          <div className="flex-grow-1 mt-1">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/upcoming-workouts" component={UpcomingWorkouts} />
              <Route exact path="/book-a-workout" component={BookAWorkout} />
              <Route exact path="/video-library" component={VideoLibrary} />
              <Route exact path="/documents" component={Docs} />
            </Switch>
          </div>
          <FooterPage />
        </div>
      )}
    </Router>
  );
};

export default App;
