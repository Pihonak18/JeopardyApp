import React from "react";

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
            <button>
              <a href="/game">Save player</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
