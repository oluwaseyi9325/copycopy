import React from "react";

function JobsForYou() {
  return (
    <section className="px-3 py-3">
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-9">
          Telios Technologies Limited
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 text-right">
          <small>2hr ago</small>
        </div>
      </div>

      <h2 className="mt-2">Copywriter</h2>

      <div className="row mt-3">
        <div className="col-lg-11 col-sm-9 row">
          <div className="col-lg-4 col-md-6">
            <i className="bi bi-geo-alt-fill"></i> Ikeja Lagos
          </div>
          <div className="col-lg-4 col-md-6">
            <i className="bi bi-calendar-event-fill"></i> Onile Onsite
          </div>

          <div className="col-lg-4 col-md-5">
            <i className="bi bi-currency-dollar"></i> #80K - #100K
          </div>
        </div>
        <div
          className="col-lg-1 col-sm-3 text-right h5 "
          style={{ color: "#2036ae" }}
        >
          Save
        </div>
      </div>
    </section>
  );
}

export default JobsForYou;
