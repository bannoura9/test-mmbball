import { Modal } from 'bootstrap';
import React, { Component, useState } from 'react';




export const Modal2 = ({ handleClose, show, children }) => {
  

    return(
      <form>
        <H1>Are you sure you want to cancel this workout?</H1>
        <div className="">
          <button className="btn" data-bs-dismiss="modal" type="button">Yes</button>
        </div>
        <div className="">
          <button className="btn" data-bs-dismiss="modal" type="button">No</button>
        </div>
      </form>
        
    
    )
}