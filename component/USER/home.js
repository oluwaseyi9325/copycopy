import React from "react";
import Link from "next/link";
import Image from "next/image";
import JobsForYou from "./JobsForYou";
import Jobs from "./Jobs";
import Courses from "./Courses";
function Home() {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-lg-9 col-md-12">
          <div>
            <section>
              <div className="row ml-0 mr-2 ">
                <div className="col-lg-4 mt-3 col-md-4 col-sm-6 px-4 w-md-25">
                  <section
                    className="row p-lg-3  text-center  bg-white ml-1"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="col-lg-2 col-md-12 mt-4">
                      <i
                        style={{ fontSize: "30px", color: "#FF9438" }}
                        className="bi bi-arrow-repeat py-2 px-2"
                      ></i>
                    </div>
                    <div className="col-lg-10">
                      <p>Ongoing Courses</p>
                      <h1 className="text-center">20</h1>
                    </div>
                  </section>
                </div>

                <div className="col-lg-4  mt-3 col-md-4 col-sm-6 px-4">
                  <section
                    className="row p-lg-3  bg-white ml-1 text-center"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="col-lg-2 col-md-12 mt-4">
                      <i
                        style={{ fontSize: "30px", color: "#34A853" }}
                        className="bi bi-check-circle-fill py-2 px-2"
                      ></i>
                    </div>
                    <div className="col-lg-10 ">
                      <p>
                        <small>Completed Courses</small>
                      </p>
                      <h1 className="text-center">4</h1>
                    </div>
                  </section>
                </div>

                <div className="col-lg-4 mt-3 col-md-4 col-sm-4 px-4">
                  <section
                    className="row p-lg-3 text-center bg-white ml-1"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="col-lg-2 col-md-12 mt-4">
                      <i
                        style={{ fontSize: "30px", color: "#2036ae" }}
                        className="bi bi-person-plus-fill py-2 px-2"
                      ></i>
                    </div>
                    <div className="col-lg-10">
                      <p>Affiliate sale</p>
                      <h1 className="text-center">10</h1>
                    </div>
                  </section>
                </div>
              </div>
            </section>

            <section>
              <h4 className="mt-5 mx-3">
                <b>Continue Learning</b>
              </h4>
              <div className="row">
                {[1, 2].map((val, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-6 p-4 col-md-6 col-sm-6  box"
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
                          className="text-center   card-text mr-0"
                          style={{ marginTop: "-35px" }}
                        >
                          <section className="row">
                            <div className="col-5"></div>
                            <div className="col-7  text-right h6 pr-4">
                              <span
                                className=" p-1 rounded-lg shadow-lg"
                                style={{ backgroundColor: "white" }}
                              >
                                <b>#23,500</b>
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
                          <div className="mb-2 h6">John Mitchell</div>

                          <div className="">
                            <span>
                              <i className="bi bi-book-half h6"></i> 6 modules
                            </span>
                            <span className="ml-5">
                              <i className="bi bi-clock-fill h6"></i> 6 hours
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="row text-muted">
                              <div className="col-6 h6">
                                <small>Progress</small>
                              </div>
                              <div className="col-6 h6 text-right">
                                <small>50%</small>
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{
                                  width: "50%",
                                  backgroundColor: "#2036ae",
                                }}
                              >
                                50%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <section>
                  <div className="px-3 mt-4">
                    <div className="row px-4">
                      <div
                        className="col-9 h4"
                        style={{ fontFamily: "verdana" }}
                      >
                        Jobs For You
                      </div>
                      <div className="col-3 text-right h6">View all</div>
                    </div>

                    <div className="row px-4">
                      {[1, 2].map((val, i) => {
                        return (
                          <div
                            className="bg-white text-muted mt-3 col-12 px-3"
                            style={{ borderRadius: "20px" }}
                          >
                            <JobsForYou />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>

          <p></p>
        </div>

        <div className="col-lg-3 col-md-12 d-none d-sm-block">
          <h6>New Courses for you</h6>

          <div className="row">
            {[1, 2, 3].map((val) => {
              return (
                <div className="mt-3 col-lg-12 col-md-4">
                  <Courses />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
