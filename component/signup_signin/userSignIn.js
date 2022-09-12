import Image from "next/image";
import React from "react";
import SignLeftBanner from "./signLeftBanner";
import Link from "next/link";
// import swal from "sweetalert";

function userSignIn() {
  return (
    <div className="row bb ">
      <SignLeftBanner />

      <div className="col-lg-7 col-md-7 mx-md-auto col-sm-10   py-4 pl-5 pr-3  ">
        <div className="signNav p-3">
          <div className="signImgLog ">
            <a href="/">
              <Image src={require("../../asset/logo.png")} />
            </a>
          </div>
          <nav className="text-right signBtn  ">
            <div>
              <span className="dontHave ">
                <i className="text-muted"> Don’t have an account?... </i>
              </span>{" "}
              <Link href="/sign-up">
                <a className="btn btn-md rounded-lg btn-outline-dark ">
                  Sign Up
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-9 mx-auto ">
              <div className=" mt-5">
                <div>
                  <h3>Hi, welcome back.</h3>
                  <p className="text-muted">Please enter your details</p>
                </div>
                <div className="mt-3">
                  <label style={{ color: "#808080" }}>Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mt-3">
                  <label style={{ color: "#808080" }}>Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-2" style={{ color: "#2036AE" }}>
                  <b
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Forgot password...?
                  </b>
                </div>

                <button
                  style={{ backgroundColor: "#2036AE" }}
                  className="btn btn-md btn-block rounded-lg text-white mt-3"
                >
                  Sign in
                </button>

                <button className="btn btn-md rounded-lg btn-block btn-outline-dark">
                  <i className="bi bi-google "></i> Sign in with google
                </button>
              </div>

              <div
                className="modal rounded-lg shadow-lg animate__animated animate__fadeIn fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-sm modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Forgot password?
                      </h5>
                    </div>
                    <div className="modal-body">
                      <div className="mt-2 text-muted">
                        <small>
                          Enter the email address you used to create your CopyUp
                          account. We’ll send you a password reset email.
                        </small>
                      </div>

                      <div className="mt-3">
                        <label style={{ color: "#808080" }}>Email</label>
                        <input
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <button
                        style={{ backgroundColor: "#2036AE" }}
                        className="btn btn-md btn-block rounded-lg text-white mt-3"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-dismiss="modal"
                      >
                        Continue
                      </button>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn  btn-sm btn-secondary text-white"
                        data-dismiss="modal"
                      >
                        Cancel Process
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal rounded-lg shadow-lg animate__animated animate__fadeIn fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-sm modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <div
                        className="text-center"
                        style={{ marginTop: "-60px" }}
                      >
                        <i
                          className="bi bi-check-circle-fill"
                          style={{
                            color: "#2036AE",
                            fontSize: "70px",
                            marginTop: "-50px",
                          }}
                        ></i>
                      </div>

                      <div className="text-center">
                        <h3>Check your email</h3>
                      </div>

                      <div className="mt-2 text-muted">
                        <small>
                          {" "}
                          We sent a password reset link to you. Please make sure
                          to check your spam and trash if you can't find the
                          email.
                        </small>
                      </div>

                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        style={{ backgroundColor: "#2036AE" }}
                        className="btn btn-md btn-block rounded-lg text-white mt-3"
                        target="_blank"
                      >
                        Open email app
                      </a>
                      <div className="mt-2">
                        <small>
                          {" "}
                          <span className="text-muted">
                            Didn’t get the email?
                          </span>{" "}
                          <span style={{ color: "#2036AE" }}>
                            <b>Click to resend</b>
                          </span>
                        </small>
                      </div>
                      <div className="mt-3">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          style={{ color: "#2036AE", cursor: "pointer" }}
                        >
                          <b>Back to log in</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*forget password modal*/}
    </div>
  );
}

export default userSignIn;
