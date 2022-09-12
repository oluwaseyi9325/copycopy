import React from "react";

function EditLink() {
  return (
    <div
      className="modal fade"
      id="editLink"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  " role="document">
        <div className="modal-content" style={{ borderRadius: "20px" }}>
          <div className="modal-body ">
            <div className="text-right">
              <i style={{cursor:"pointer"}} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </i>
            </div>

            <section>
              
            <div className="mt-4">
                 <label>Linkedin</label>
            <div class="input-group "> 
             <input type="text" class="form-control" placeholder="https://www.linkedin.com/in/*****" />
             <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i className="bi bi-linkedin"></i></span>
            </div>
            </div>
            </div>

            <div className="mt-3">
                 <label>Reddit</label>
            <div class="input-group "> 
             <input type="text" class="form-control" placeholder="https://redditcom/****" />
             <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i className="bi bi-reddit"></i></span>
            </div>
            </div>
            </div>

            <div className="mt-3">
                 <label>Twitter</label>
            <div class="input-group "> 
             <input type="text" class="form-control" placeholder="https://twitter.com/****" />
             <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i className="bi bi-twitter"></i></span>
            </div>
            </div>
            </div>

            <div className="mt-3">
                 <label>Website</label>
            <div class="input-group "> 
             <input type="text" class="form-control" placeholder="https://coyup.com" />
             <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i className="bi bi-browser-chrome"></i></span>
            </div>
            </div>
            </div>


            
    
            </section>
          </div>
          <div className="py-3 text-right px-3">
            <button
              type="button"
              className="btn editCancelBtn px-4"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn px-4 ml-4 editSavedBtn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLink;
