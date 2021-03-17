import React from "react";

function UpcomingWorkoutsCard(props) {
    return (
        <div className="card-body">
            <div>
                <h5>{props.date}</h5>
                <div className="mt-3">
                    <p className="card-text text-black-50">
                        <strong>Time: </strong> {props.time}
                        <br />
                        <strong>Location: </strong> {props.location}
                        <br />
                        <strong>Address: </strong> {props.address}
                    </p>
                    <button
                        id="dashCancelBtn1"
                        type="button"
                        className="btn dashCancelBtn mt-2"
                        data-bs-target="#Modal"
                        data-bs-title="Are you sure you want to cancel this workout?"
                        onClick={props.cancelWorkout}
                        onClick={props.handleShow}
                    >
                        Cancel
              </button>
                    <hr className="mt-4" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingWorkoutsCard;