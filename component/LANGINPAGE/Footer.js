import React from "react";
// import footerImg from "../../asset/footerImg.png";
import Image from "next/image";

function Footer() {
  return (
    // the footer Component
    <div className="mt-5" style={{ backgroundColor: " #F5F5F5" }}>
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-7">
            <div>
              <Image src={require("../../asset/footerImg.png")} />
              <div className="text-muted mt-3" style={{ letterSpacing: "30px" }}>

                <a href="/"
                target="_blank"
                 style={{textDecoration:"none",color:"grey"}}>
                 <i className="bi bi-linkedin"></i></a>

                <a href="https://twitter.com/Copyup5"
                style={{textDecoration:"none",color:"grey"}}
                 target="_blank">
                 <i className="bi bi-twitter"></i></a>

                <a href="/"
                style={{textDecoration:"none",color:"grey"}}
                target="_blank"
                ><i className="bi bi-facebook"></i></a>

               <a href="/"
               style={{textDecoration:"none",color:"grey"}}
               target="_blank"
               ><i className="bi bi-youtube"></i></a>

               <a href="/"
               style={{textDecoration:"none",color:"grey"}}
               target="_blank"
               > <i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-7">
            <div className="text-right text-muted mt-3">
              <div>
                <span className="ml-4">About us</span>
                <span className="ml-4">Support</span>
                <span className="ml-4">Privacy</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-2 text-muted">
          <div className="col-6">@ 2022 CopyUp</div>
          <div className="col-6 text-right">All Right Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
