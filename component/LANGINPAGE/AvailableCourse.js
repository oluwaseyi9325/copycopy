import React from "react";
import Image from "next/image";
import Link from "next/link";
import ViewCouse from "./ViewCouse"
import Courses from "../USER/Courses"


function AvailableCourse() {
  return (
    <div className="container ">

          
        




      <div className="container">
        <div className="ml-3 mt-5">
           <h3>Available courses</h3>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className="row ml-">
                {[1, 2, 3].map((val, i) => {
                  return (
                    <div
                      key={i}
                      className="col-lg-4 p-4 col-md-6 col-sm-9  box"
                    >
                     <Courses />
                  
                    </div>
                  );
                })}
              </div>

           
            </div>
         
         
          </div>
      
        </div>
       
         <div className="">
        
          
         <ViewCouse />
          

         </div>

      </div>
    </div>
  );
}

export default AvailableCourse;
