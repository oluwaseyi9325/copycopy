import Image from "next/image";
import React from "react";
// import getStartedImg from "../../asset/getStartedImg.png";

function GetStarted() {
  return (
    <div className="mt-5 container-fluid">
      <div className="row">
        <div
          className="col-lg-9 col-md-12 col-sm-8 px-3 py-2 mx-auto"
          style={{ backgroundColor: "#2036AE", borderRadius: "30px" }}
        >
          <div className="row p-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-white mt-4">
                <h2>
                  <b>Ready to get started?</b>
                </h2>
                <div
                  className="mt-3"
                  style={{ fontWeight: "400px", fontSize: "25px" }}
                >
                  Create an account and instantly start growing your copywriting
                  career with abundant resources available on CopyUp...
                </div>
                <button
                  className="btn btn-lg mt-4"
                  style={{
                    color: "#2036AE",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none pt-3 d-sm-none d-md-block d-lg-block">
              <Image src={require("../../asset/getStartedImg.png")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
