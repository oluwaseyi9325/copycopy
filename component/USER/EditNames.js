import React from "react";

function EditNames() {
  return (
    <div
      className="modal fade"
      id="editName"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog   " role="document">
        <div className="modal-content " style={{ borderRadius: "20px" }}>
          <div className="modal-body ">
            <div className="text-right">
              <i style={{cursor:"pointer"}} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </i>
            </div>

            <section>
              <div className="mt-4">
                <label>Full Name</label>
                <input
                  className="form-control"
                  placeholder="Joseph Gbadamosi"
                />
              </div>
              <div className="mt-3">
                <label>Job Title</label>
                <input className="form-control" placeholder="Copywriter/UX" />
              </div>
              <div className="mt-3">
                <label>Company Name (or School)</label>
                <input
                  className="form-control"
                  placeholder="Enter your institution details"
                />
              </div>
              <div className="mt-3">
                <label>Your Location</label>
                <input className="form-control" placeholder="Lagos" />
              </div>
            </section>
          </div>
          <div className="py-3 text-right px-3">
            <button
              type="button"
              className="btn px-4 editCancelBtn"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn px-4 editSavedBtn ml-4">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNames;
