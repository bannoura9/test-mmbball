import React from 'react'

function BookWorkoutCard(props) {
    return (
        <>
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
                    onClick={props.handleShow}
                >Book</button>
                <hr className="mt-4" />
            </div>
        </>
    )
}

export default BookWorkoutCard;



