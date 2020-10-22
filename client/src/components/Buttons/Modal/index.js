import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Please input usernames</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text"></input>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
            <Link type="button" class="btn btn-secondary" data-dismiss="modal">
              Play!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
