import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modal() {
  const [playerName, setPlayerName] = useState("");
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-warning"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
      >
        Create Player!
      </button>

      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <input
              type="text"
              onChange={(event) => {
                console.log(event.target.value);
                setPlayerName(event.target.value);
              }}
            ></input>
            <Link to={{ pathname: `/game`, playerName }}>Save player</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
