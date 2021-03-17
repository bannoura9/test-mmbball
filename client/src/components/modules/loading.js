import React from "react";
import loading from "../../assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img height="100px" width="100px" src={loading} alt="Loading" />
  </div>
);

export default Loading;
