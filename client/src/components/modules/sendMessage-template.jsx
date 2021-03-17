import React from "react";

// emailjs
import emailjs, { init } from "emailjs-com";
init("user_x92sj8PaE0nwlBwMVb3Zu");

export const Modal1 = ({ handleClose, show, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  // service_id references the email service used
  const SERVICE_ID = "service_rbv1bv3";
  // template_id is the template for the message
  const TEMPLATE_ID = "send_message";
  // user_id is unique for user
  const USER_ID = "user_x92sj8PaE0nwlBwMVb3Zu";

  // handles form submit to send message
  function sendMessage(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (res) => {
        console.log(res.text);
      },
      (err) => {
        console.log(err.text);
      }
    );
  }

  return (
    <div>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          New Message
        </h5>
      </div>
      <div className="modal-body">
        <form className="contact-form" onSubmit={sendMessage}>
          <div className="mb-3">
            <input type="hidden" name="contact_number" />
            <label
              for="user-name"
              name="user_name"
              className="col-form-label mb-1"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Name:
            </label>
            <input
              type="text"
              name="contact_number"
              className="form-control mb-2"
              id="recipient-name"
            ></input>
            <label
              for="user-email"
              name="user_email"
              className="col-form-label mb-1"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Email:
            </label>
            <input
              type="text"
              name="contact_number"
              className="form-control mb-2"
              id="recipient-name"
            ></input>
            <div className="mb-3">
              <label
                for="message-text"
                className="col-form-label mb-1"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                Message:
              </label>
              <textarea
                className="form-control mb-4"
                name="message"
                id="message-text"
              ></textarea>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <input
              type="submit"
              value="Send"
              onClick={handleClose}
              className="btn"
              style={{
                backgroundColor: "#e41a37",
                color: "white",
                fontFamily: '"Roboto", sans-serif',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
