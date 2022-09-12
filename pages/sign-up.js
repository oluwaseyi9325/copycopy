import Image from "next/image";
import React from "react";
import Link from "next/link";
import SignLeftBanner from "../component/signup_signin/signLeftBanner";
function signup() {
  return (
    <div>
     
    <div className="row bb">
      <SignLeftBanner />

      <div className="col-lg-7 col-md-7 mx-md-auto col-sm-10   py-4 pl-5 pr-3">
        <div className="signNav p-3">
          <div className="signImgLog ">
            <Image src={require("../asset/logo.png")} />
          </div>
          <nav className="text-right signBtn  ">
            <div>
              <span className="dontHave">
                <i className="text-muted"> Already have an account?... </i>
              </span>{" "}
              <Link href="/signin">
                <a className="btn btn-md rounded-lg btn-outline-dark ">
                  Sign in
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-9 mx-auto">
              <div className=" mt-4">
                <div>
                  <h3>Craete an account.</h3>
                  <p className="text-muted">Please enter your details</p>
                </div>
                <div className="mt-2 ">
                  <label style={{ color: "#808080" }}>Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mt-2">
                  <label style={{ color: "#808080" }}>Password</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-1" style={{ color: "#808080" }}>
                  <small> Must be at least 8 characters.</small>
                </div>

                <button
                  style={{ backgroundColor: "#2036AE" }}
                  className="btn btn-md btn-block rounded-lg text-white mt-3"
                >
                  Create account
                </button>

                <button className="btn btn-md rounded-lg btn-block btn-outline-dark">
                  <i className="bi bi-google"></i> Sign up with google
                </button>

                <div
                  style={{ color: "#808080", fontSize: "13px" }}
                  className="mt-2"
                >
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply. <br />
                  <br />
                  By clicking “Create my account”, I agree to CopyUp’s Terms of
                  Service & Privacy Policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default signup
