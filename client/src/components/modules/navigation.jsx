import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Modal1 } from "./sendMessage-template";
import { AccountModal } from "./account-settings-modal";
import { withAuth0 } from "@auth0/auth0-react";
import Logo from "../../assets/logo/mm-shield.png";
import signOutIcon from "../../assets/icons/sign-out.png";
import Scroll from "./scroll";
import dashboardIcon from "../../assets/icons/home.png";
import upcomingWorkoutsIcon from "../../assets/icons/upcoming-workout.png";
import bookWorkoutIcon from "../../assets/icons/book-workout-menu.png";
import videoIcon from "../../assets/icons/video-library-menu.png";
import documentsIcon from "../../assets/icons/documents-menu.png";
// import BackToTop from "./back-to-top";

class Nav extends Component {
  //nav state
  state = {
    sideNavOpen: false,
  };
  //Modal constructor/state
  constructor() {
    super();
    this.state = {
      show1: false,
      show2: false,
    };
    this.showModal1 = this.showModal1.bind(this);
    this.hideModal1 = this.hideModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
  }
  //modal functions
  showModal1 = () => {
    this.setState({ show1: true });
  };

  hideModal1 = () => {
    this.setState({ show1: false });
  };

  showModal2 = () => {
    this.setState({ show2: true });
  };

  hideModal2 = () => {
    this.setState({ show2: false });
  };

  //navbar functions
  openNav = () => {
    document.getElementById("sideNav").style.width = "320px";
    document.getElementById("slideContentRight").style.marginLeft = "320px";
    this.setState({ sideNavOpen: true });
  };

  closeNav = () => {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("slideContentRight").style.marginLeft = "0";
    this.setState({ sideNavOpen: false });
  };

  //logout function through auth0
  logoutWithRedirect = () =>
    this.props.auth0.logout({
      returnTo: window.location.origin,
    });

  render() {
    //const for user from auth0
    const { user } = this.props.auth0;
    //const for overlay for nav bar
    const overlayClasses =
      "overlayBase fill " +
      (this.state.sideNavOpen ? "overlay" : "overlay-hide");

    return (
      <div id="dashboardContainer">
        <div className={overlayClasses} onClick={this.closeNav} />
        <div id="slideContentRight">
          <nav
            id="navbar"
            className="navbar navbar-dark"
            style={{ backgroundColor: "#E41A37" }}
          >
            <div
              style={{ width: "200px" }}
              className="container mx-auto position-absolute top-50 start-50 translate-middle"
            >
              <a style={{ width: "100%" }} className="" href="/">
                <img
                  id="navbarLogo"
                  src={Logo}
                  alt="Mychal Martinez Basketball Logo"
                  width="40"
                  height="40"
                />
              </a>
            </div>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-3">
              <span id="hamburgerBtn" onClick={this.openNav}>
                &#9776;
              </span>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y">
              <button id="signOutBtn">
                <img
                  src={signOutIcon}
                  id="qsLogoutBtn"
                  onClick={this.logoutWithRedirect}
                  alt="signOutIcon"
                ></img>
              </button>
            </div>
          </nav>
          <Scroll showBelow={250} />
          <div id="sideNav" className="sidenav">
            <button
              onClick={this.closeNav}
              type="button"
              className="close closebtn"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div id="sidenaveProfile" className="sidenavProfile">
              <img
                id="sidenavProfileImg"
                src={user?.picture}
                alt="UserProfile"
              />
              <p id="sidenaveProfUser">{user?.name}</p>
            </div>
            <div>
              <ul>
                <li>
                  <img
                    src={dashboardIcon}
                    height="30"
                    width="30"
                    style={{ display: "inline-block" }}
                    alt="dashboardIcon"
                  />
                  <a href="/" style={{ display: "inline-block" }}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <img
                    src={upcomingWorkoutsIcon}
                    height="30"
                    width="30"
                    style={{ display: "inline-block" }}
                    alt="upcomingWorkoutsIcon"
                  />
                  <a
                    href="/upcoming-workouts"
                    style={{ display: "inline-block" }}
                  >
                    Upcoming Workouts
                  </a>
                </li>
                <li>
                  <img
                    src={bookWorkoutIcon}
                    height="30"
                    width="30"
                    style={{ display: "inline-block" }}
                    alt="bookWorkoutIcon"
                  />
                  <a href="/book-a-workout" style={{ display: "inline-block" }}>
                    Book a Workout
                  </a>
                </li>
                <li>
                  <img
                    src={videoIcon}
                    height="30"
                    width="30"
                    style={{ display: "inline-block" }}
                    alt="videoIcon"
                  />
                  <a href="/video-library" style={{ display: "inline-block" }}>
                    Video Library
                  </a>
                </li>
                <li>
                  <img
                    src={documentsIcon}
                    height="30"
                    width="30"
                    style={{ display: "inline-block" }}
                    alt="documentsIcon"
                  />
                  <a href="/documents" style={{ display: "inline-block" }}>
                    Documents
                  </a>
                </li>
                <li style={{ marginTop: "20px" }}>
                  <Modal show={this.state.show1}>
                    <Modal1 handleClose={this.hideModal1} />
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={this.hideModal1}
                    >
                      Close
                    </button>
                  </Modal>
                  <Link
                    to="#"
                    // href="/#"
                    // className="cursor-pointer"
                    // data-bs-target="#Modal"
                    // data-bs-title="Send a Message"
                    onClick={this.showModal1}
                  >
                    Send Message
                  </Link>
                </li>
                <li>
                  <Modal show={this.state.show2}>
                    <AccountModal />
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={this.hideModal2}
                    >
                      Close
                    </button>
                  </Modal>
                  <Link
                    to="#"
                    // href="#"
                    // className="cursor-pointer"
                    // data-bs-target="#Modal"
                    // data-bs-title="Account Settings"
                    onClick={this.showModal2}
                  >
                    Account Settings
                  </Link>
                </li>
                <li id="qsLogoutBtn" onClick={this.logoutWithRedirect}>
                  <Link to="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(Nav);
