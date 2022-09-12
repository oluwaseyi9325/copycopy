import React from "react";

function LeftnavBar() {
  return (
    <div className="bg-white col-2 text-center">
      <div>
        <button className="btn btn-lg mr-5 userNavBtn">
          <div className="row">
            <div className="col-6">
              <i className="bi bi-house-door-fill "></i>
            </div>
            <div className="col-6">Home</div>
          </div>
        </button>

        <button className="btn btn-lg userNavBtn">
          <div className="row">
            <div className="col-6">
              <i className="bi bi-house-door-fill "></i>
            </div>
            <div className="col-6">Home</div>
          </div>
        </button>

        <div className="btn btn-lg ml-1 btn-info  userNavBtn">
          <div className="row pl-3 pr-5">
            <div className="col-6 ">
              <i className="bi bi-house-door-fill "></i>
            </div>
            <div className="col-6">Home</div>
          </div>
        </div>

        <button className="btn btn-lg  userNavBtn">
          <div className="row">
            <div className="col-6">
              <i className="bi bi-house-door-fill "></i>
            </div>
            <div className="col-6">Home</div>
          </div>
        </button>

        <button className="btn btn-lg mr-5 userNavBtn">
          <div className="row">
            <div className="col-6">
              <i className="bi bi-house-door-fill "></i>
            </div>
            <div className="col-6">Home</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default LeftnavBar;
