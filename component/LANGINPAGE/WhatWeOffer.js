import React from "react";

function WhatWeOffer() {
  return (
    <div className="mt-5 container-fluid" style={{ backgroundColor: " #F5F5F5" }}>
      <div className="row py-5">
        <div className="col-lg-9 col-md-10 col-sm-12 mx-auto">
          <h3 className="ml-3 text-muted">What we offer</h3>
          <div className="row">
            <div className="col-lg-6  col-md-6 col-sm-7">
              <div className="m-4">
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-3">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-mortarboard-fill text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4>The Best Courses</h4>
                      <div>
                        Direct access to get the best copywriting courses for
                        yourself. Save yourself the stress of looking for good
                        courses yourself.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-3">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-bag-check-fill text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4>Robust Job Board</h4>
                      <div>
                        New copywriting job opportunities brought directly to
                        you. You can apply for them in just seconds using your
                        CopyUp profile.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-3">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-laptop-fill text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4>Online Coaching</h4>
                      <div>
                        Via your mail, you get top tier copywriting tutorials
                        and tips daily and attend premium sessions only
                        available to our members. .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6  col-md-6 col-sm-7">
              <div className="m-4">
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-4">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-shop text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4 className="mt-2">Affiliate Marketing</h4>
                      <div className="mt-4">
                        Sell courses for a commission, make tangible money by
                        robust affiliate system.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-3">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-book-half text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4>e-Books</h4>
                      <div>
                        The best copywriting books, most of which are way better
                        than a lot of copywriting courses out there.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row shadow  bg-white py-3 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-2 mt-3">
                    <i
                      style={{
                        backgroundColor: "#E9EBF7",
                        color: "#2036AE",
                        fontSize: "24px",
                      }}
                      className="bi bi-people-fill text-md  px-3 py-2 rounded"
                    ></i>
                  </div>
                  <div className="col-10">
                    <div className="ml-3">
                      <h4>Networking</h4>
                      <div>
                        Access to other budding Copywriters like you. Connect
                        with them and maximize your connections!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <button
              className="btn  text-white btn-lg"
              style={{ backgroundColor: "#2036AE" }}
            >
              {" "}
              Join CopyUp{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
