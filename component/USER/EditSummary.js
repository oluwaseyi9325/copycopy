import React from "react";

function EditSummary() {
  return (
    <div
      className="modal fade"
      id="editSummary"
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
                 <div>
                  <div>About You</div>
                 
                    <small className="text-muted pt-0">Provide a brief description for your profile.</small>
                 </div>
                <textarea rows='4'
                  className="form-control"
                  placeholder="Type summary that describe you here"
                />
              </div>
              <div className="mt-3">
               <div>
               <div>Experience</div>
                <div><small className="text-muted">Total years of work experience.</small></div>
               </div>
                <input className="form-control" placeholder="4" />
              </div>
              <div className="mt-3">
                <label>Company Name (or School)</label>
                <input
                  className="form-control"
                  placeholder="Enter your institution details"
                />
              </div>
              <div className="mt-3">
                 <div>
                 <div>Language</div>
                <div><small className="text-muted">What languages can you speak?</small></div>
                 </div>
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

export default EditSummary;
