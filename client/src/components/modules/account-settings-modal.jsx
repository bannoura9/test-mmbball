import React from "react";

export const AccountModal = ({ handleClose, show, children }) => {
  return (
    <form className="p-4">
      <h2 className="mb-3">Account Settings</h2>
      <div class="form-group">
        <label
          for="recipient-name"
          class="col-form-label mb-1"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          Change Email
        </label>
        <br />
        <button
          type="button"
          class="btn"
          style={{
            backgroundColor: "#e41a37",
            color: "white",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Update
        </button>
      </div>
      <div class="form-group mt-3">
        <label
          for="recipient-name"
          class="col-form-label mb-1"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          Change Password
        </label>
        <br />
        <button
          type="button"
          class="btn"
          style={{
            backgroundColor: "#e41a37",
            color: "white",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Update
        </button>
      </div>
      <div class="form-group mt-3">
        <label
          for="recipient-name"
          class="col-form-label mb-1"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          Delete Account
        </label>
        <br />
        <button
          type="button"
          class="btn"
          style={{
            backgroundColor: "#e41a37",
            color: "white",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
};
