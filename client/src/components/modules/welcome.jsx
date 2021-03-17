import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
  const { user } = useAuth0();
  return (
    <div id="welMsg" className="m-2 mt-4 mb-4 dashOpacity">
      <div className="welDiv">
        <div>
          <img id='welImg' src={user?.picture} alt=""></img>
          <h1 id="welMsgH1" className="mt-3">
            Welcome, {user?.given_name}!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
