import React, { Component } from "react";
import VideoFilterModal from "./video-filter-modal";
import videoIcon from "../../assets/icons/video-library-dash.png";
import filterIcon from "../../assets/icons/search-filter.png";

class VideoLibraryHeader extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const isHomepage = window.location.pathname === "/";
    const { filter } = this.props;

    return (
      <div className="mt-4 mb-4">
        <div style={{ marginBottom: "-5px" }}>
          <img
            style={{ display: "inline-block" }}
            id="documentsListIcon"
            src={videoIcon}
            alt=""
          />
          <h4 style={{transform: "translateY(10px)"}} className="card-title fs-3">
            {isHomepage ? "Recently Added" : "Video Library"}
          </h4>
        </div>
        <span
          style={{
            display: "inline-block",
            float: "right",
            marginRight: "20px",
            marginTop: "-32px",
          }}
        >
          <button
            style={{ border: "none", backgroundColor: "white" }}
            type="button"
            onClick={this.showModal}
          >
            <img src={filterIcon} alt="" height="32" width="32" />
          </button>
        </span>
        <VideoFilterModal show={this.state.show} handleClose={this.hideModal}>
          <div className="card-body">
            <select value={filter} onChange={this.props.filterVideos}>
              <option value="">All Categories</option>
              {this.props.playlists.map((p, i) => (
                <option key={i} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </VideoFilterModal>
      </div>
    );
  }
}

export default VideoLibraryHeader;
