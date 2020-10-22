import React from "react";

function Modal() {
  return (
    <div className="wrapper">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Play!
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add your player names!
              </h5>
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
              <input type="text" placeholder="player1"></input>
              <input type="text" placeholder="player2"></input>
              <input type="text" placeholder="player3"></input>
            </div>
            <div class="modal-footer">
              <Link type="button" class="btn btn-primary">
                Start Game!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
