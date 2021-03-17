import axios from "axios";
// import { data } from "jquery";
import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import upcomingWorkoutsIcon from "../assets/icons/upcoming-workouts-dash.png";
// import API from '../utils/api'
import UpcomingWorkoutsCard from "./modules/upcoming-workouts-card";


function UpcomingWorkouts() {

  // defines and handles schedule and number of workouts
  const [numberWorkouts, setNumberWorkouts] = useState()
  const [schedule, setSchedule] = useState([]);
  // handles Modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // retrieves user info from db
  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (email) {
      (async () => {
        try {
          const { data } = await axios.get(`/users?email=${email}`);
          // const { data } = await axios.get(`/users?email=example3@gmail.com`);
          const scheduleMap = data.workouts.map((data) => {
            return {
              address: data.address,
              date: data.date,
              location: data.location,
              time: data.time
            }
          })
          setSchedule(scheduleMap);
          setNumberWorkouts(data.workouts.length)
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, []);
  // handles canceling a workout
  function cancelWorkout(id) {
    // api call to Google Calendar and to db
    // API.deleteWorkouts(id)
    console.log(`deleting workout with id: ${id}`)
  }
  return (
    <div className="container dashOpacity">
      <div id="upcomingWorkouts" className="card mb-1 mt-1">
        <div className="mt-4">
          <img id="upcomingWorkoutsIcon" src={upcomingWorkoutsIcon} alt="" />
          <h4 className="card-title fs-3">Upcoming Workouts</h4>
          <h6 className="card-subtitle mb-3 text-black-50">
            You have {numberWorkouts} upcoming workouts!
          </h6>
        </div>
        {schedule.map(session => {
          return (
            <UpcomingWorkoutsCard
              key={schedule.indexOf(session)}
              date={session.date}
              time={session.time}
              location={session.location}
              address={session.address}
              cancelWorkout={cancelWorkout}
              handleShow={handleShow}
            />
          )
        })
        }
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Are you sure you want to cancel this workout?</Modal.Title>
          </Modal.Header>

          <div className="">
            <button className="btn" data-bs-dismiss="modal" onClick={handleClose} type="button">Yes</button>
          </div>
          <div className="">
            <button className="btn" data-bs-dismiss="modal" onClick={handleClose} type="button">No</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default UpcomingWorkouts;