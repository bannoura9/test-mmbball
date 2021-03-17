import React, { useEffect, useState } from "react";
import axios from "axios";
import upcomingWorkoutsIcon from "../assets/icons/upcoming-workouts-dash.png";
import Modal from 'react-bootstrap/Modal'
import BookWorkoutCard from "./modules/book-workout-card";
import { data } from "jquery";


const BookAWorkout = () => {
  const email = sessionStorage.getItem("email");
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState({
    email: email
  })
  const [bookings, setBookings] = useState([])
  const [selectedSession, setSelectedSession] = useState()
  useEffect(() => {
    if (email) {
      (async () => {
        try {
          const { data } = await axios.get(`/users?email=${email}`);
          // const { data } = await axios.get(`/users?email=example3@gmail.com`);
          setUser(data);
        } catch (err) { }
      })();
    }
  }, []);
  useEffect(async () => {
    const { data } = await axios.get(`/bookings`);
    setBookings(data);
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBookYes = async () => {
    handleClose();
    await axios.post(`/events`, {
      session: selectedSession,
      user: user
    });
    await axios.put(`/users`, {
      session: selectedSession,
      user: user
    });
  }
  const handleBookNo = () => {
    handleClose();
  }
  return (
    <div className="container dashOpacity">
      <div id="upcomingWorkouts" className="card mb-1 mt-1">
        <div className="mt-4">
          <img
            alt="upcomingWorkoutsIcon"
            id="upcomingWorkoutsIcon"
            src={upcomingWorkoutsIcon}
          />
          <h4 className="card-title fs-3">Book a workout</h4>
          <h6 className="card-subtitle mb-3 text-black-50">
            {bookings.length} upcoming workouts!
          </h6>
        </div>
        <div className="card-body">
          {bookings.map(session => {
            const handleCardSelection = () => {
              setSelectedSession(session);
              handleShow();
            }
            return (
              <BookWorkoutCard
                key={bookings.indexOf(session)}
                dateTime={session.dateTime}
                date={session.date}
                time={session.time}
                location={session.location}
                address={session.address}
                // cancelWorkout={cancelWorkout}
                handleShow={handleCardSelection}
              />
            )
          })}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Are you sure you want to book this workout?</Modal.Title>
            </Modal.Header>

            <div className="">
              <button className="btn" data-bs-dismiss="modal" onClick={handleBookYes} type="button">Yes</button>
            </div>
            <div className="">
              <button className="btn" data-bs-dismiss="modal" onClick={handleBookNo} type="button">No</button>
            </div>
          </Modal>

          <div style={{ backgroundColor: "white" }}>
            {user ? (
              <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <img src={user.picture} />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookAWorkout;
