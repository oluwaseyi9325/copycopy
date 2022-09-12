import React from "react";
import Image from "next/image";

function SignLeftBanner() {
  return (
    <div className="col-5 signBack px-4 py-4 ">
      <div className="ml-5">
        <Image src={require("../../asset/logSign.png")} />
      </div>

      <div className="ml-5 mt-5 pr-5 animate__animated animate__fadeInLeft">
        <div className="text-white mt-5 pt-5">
          <h1 className="mt-3">
            Your <span style={{ color: "#FF9438" }}>copywriting career</span>{" "}
            starts <br />
            here.
          </h1>
        </div>
        <div style={{ height: "140px" }}></div>

      </div>
    </div>
  );
}

export default SignLeftBanner;
