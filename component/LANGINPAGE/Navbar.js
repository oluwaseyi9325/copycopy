import React from "react";
// import logo from "../../asset/logo.png";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="mb-5 ">
      <nav
        className="navbar animate__animated animate__fadeInDown mb-5 shadow-lg navbar-expand-md fixed-top navbar-white py-2"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <span className="navbar-brand mt-4">
            <a href="/"><Image className="logoNav" src={require("../../asset/logo.png")} /></a>
          </span>
          <span className="mt-4">
            <Link href="/sign-up">
            <a
            style={{ backgroundColor: "#2036AE", borderRadius: "10px" }}
            className="btn btn-lg text-white d-lg-none d-md-none d-sm-block mr-3 mb-4"
          >
            Get Started
          </a>
            </Link>
            <b className="pb-3">
              <i
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#2036AE",
                  fontSize: "34px",
                  borderRadius: "10px",
                  marginTop: "-20px !important",
                }}
                className="bi bi-list text-md  px-2 py-1  navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              ></i>
            </b>
          </span>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav m-auto">
              <li
                className="nav-btn ml-5 text-center mt-2 mb-2"
                style={{ marginLeft: "30px", color: "#2036AE" }}
              >
                <b>Support</b>
              </li>

              <li
                className="nav-btn ml-5 text-center mt-2 mb-2"
                style={{ marginLeft: "30px", color: "#2036AE" }}
              >
                <b>About us</b>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li
                className="nav-btn ml-5 text-center mt-4 mb-3"
                style={{ marginLeft: "30px", color: "#2036AE" }}
              >
                <b>
                  <Link href="/signin">
                    <a style={{ textDecoration: "none", color: "#2036AE" }}>
                      Sign in
                    </a>
                  </Link>
                </b>
              </li>

              <li
                id="hideButtonStarted"
                className="nav-btn ml-5 text-center mt-2 mb-2 "
                style={{ marginLeft: "30px" }}
              >
                <b>
                <Link href="/sign-up">
                <a
                style={{ backgroundColor: "#2036AE", borderRadius: "10px" }}
                className="btn btn-lg text-white"
              >
                Get Started
              </a>
                </Link>
                </b>
              </li>

              <li
                className="nav-btn  text-center mt-2 mb-2 d-sm-block d-lg-none d-md-none "
                
              >
                <b>
                  <Link href="/sign-up">
                  <a
                  style={{ backgroundColor: "#2036AE", borderRadius: "10px" }}
                  className="btn btn-md text-white btn-block"
                >
                  Create a free account
                </a>
                  </Link>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
