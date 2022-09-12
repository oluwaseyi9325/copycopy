import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingBanner() {
  return (
    <div className="container mb-5">
      <div style={{ height: "50px" }}></div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-7 mt-5 animate__animated animate__fadeInLeft">
            <div id="welMessage_1" className="mt-2">
              Welcome to the first ever{" "}
              <span style={{ color: "#FF9438" }}>Copywriting</span> platform in
              Nigeria
            </div>
            <div id="welMessage_2" className="mt-4">
              Get well-paying copywriting clients without stress and learn
              copywriting on the go!
            </div>
            <div className="mt-4">
                <Link href="/sign-up">
                <a className="btn btn-lg btn-create">
                Create a free account
              </a>
                </Link>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 col-sm-7 text-right animate__animated animate__fadeInRight ">
            <Image
              src={require("../asset/banner.png")}
              width={600}
              className="bannerBack"
            />
          </div>
        </div>
      </div>

      {/*<div className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-7 col-sm-7 mt-5'>
         <div id='welMessage_1'>
         Welcome to the first ever <span style={{color:"#FF9438"}}>Copywriting</span> platform in Nigeria
         </div>
         <div id='welMessage_2' className='mt-2'>
         Get well-paying copywriting clients without stress and learn copywriting on the go!
         </div>
         <div className='mt-2'>
          <button className='btn btn-lg btn-create' >Create a free account</button>
        </div>
      </div>

        

      <div className='col-lg-6 col-md-7 col-sm-7 text-right  mt-5'>
        <Image src={require("../asset/Capture.png")} width={900} height={800} />
      </div>
  </div>
  </div>*/}
    </div>
  );
}

export default LandingBanner;
