import React from "react";
import Image from "next/image";
import Link from "next/link";

function ViewCouse() {
  return (
    <div>
      <div className="text-center mt-3">
        <button
          style={{ backgroundColor: "#2036AE" }}
          className="btn  text-white"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          Click to Explore
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Available Courses
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row ml-">
                {[1, 2, 3, 4, 5, 6].map((val, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-6 p-4 col-md-6 col-sm-7  box"
                    >
                      <div
                        className="card card-sm shadow card-width"
                        style={{ borderRadius: "20px" }}
                      >
                        <Image
                          className="card-img-top"
                          src={require("../../asset/img1.png")}
                          width={200}
                          height={160}
                        />
                        <div
                          className="text-center text-muted  card-text mr-0"
                          style={{ marginTop: "-30px" }}
                        >
                          <section className="row">
                            <div className="col-5">
                              <span
                                className=" p-2"
                                style={{ backgroundColor: "whitesmoke" }}
                              >
                                <i className="bi bi-hand-thumbs-up"></i> Like
                                <span className="badge badge-info">10</span>
                              </span>
                            </div>
                            <div className="col-7 ">
                              <span
                                className=" p-2"
                                style={{ backgroundColor: "whitesmoke" }}
                              >
                                <i className="bi bi-chat-left"></i>
                                <span> Comment</span>
                                <span className="badge badge-info">10</span>
                              </span>
                            </div>
                          </section>
                        </div>

                        <div className="card-body mt-1">
                          <h5 className="card-title">
                            The Strategy of Content Marketing
                          </h5>
                          <p className="card-text ">
                            <Link href="/">
                              <a className="text-muted">
                                Learn the core strategies content marketers use
                                to acquire and retain customers profitably.
                              </a>
                            </Link>
                          </p>
                          <div>John Mitchell</div>

                          <div className="">
                            <span>
                              <i className="bi bi-book-half"></i> 6 modules
                            </span>
                            <span className="ml-2">
                              <i className="bi bi-clock-fill"></i> 6 hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCouse;
