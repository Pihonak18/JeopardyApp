import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
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
            <input type="text"></input>
            <Link to={{ pathname: `/game`, query: { playerName: "player" } }}>
              Save player
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
