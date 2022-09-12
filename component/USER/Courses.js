import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Courses() {
  return (
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
        <div className="col-5">
       
        </div>
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
          <a className="text-muted ">
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
  )
}

export default Courses