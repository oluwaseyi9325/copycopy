import React from "react";
import Home from "../../component/USER/home";
import Sidebar from "../../component/USER/Sidebar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNav from "../../component/USER/MobileNav";
import Header from "../../component/USER/Header";
import AccountSetting from "../../component/USER/AccountSetting";
import EarnBig from "../../component/USER/EarnBig";
import BottomNav from "../../component/USER/BottomNav";

function Affiliate() {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#F3F3F3" }}>
      <div className="row">
        <Sidebar />

        <div className="col colomn">
          <Header />

          <div className="row ">
            <section className="col-lg-8 col-md-9 mt-5">
              <div className="row ml-0 mr-2 ">
                <div className="col-lg-6 mt-3 col-md-4 col-sm-6 px-4 w-md-25">
                  <section
                    className="row p-lg-3  text-center  bg-white ml-1"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="col-lg-2 col-md-12 mt-4">
                      <i
                        style={{ fontSize: "30px", color: "#34A853" }}
                        className="bi bi-wallet-fill py-2 px-2"
                      ></i>
                    </div>
                    <div className="col-lg-10">
                      <p>Amount Earned</p>
                      <h1 className="text-center">#345000</h1>
                    </div>
                  </section>
                </div>

                <div className="col-lg-6  mt-3 col-md-4 col-sm-6 px-4">
                  <section
                    className="row p-lg-3  bg-white ml-1 text-center"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="col-lg-2 col-md-12 mt-4">
                      <i
                        style={{ fontSize: "30px", color: "#2038ae" }}
                        className="bi bi-person-plus-fill py-2 px-2"
                      ></i>
                    </div>
                    <div className="col-lg-10 ">
                      <p>
                        <small>Affiliates Sales</small>
                      </p>
                      <h1 className="text-center">32</h1>
                    </div>
                  </section>
                </div>
              </div>
            </section>

            <section className="col-lg-4 col-md-5 mt-5">
              <EarnBig />
            </section>
          </div>
        </div>
      </div>

      <div style={{ height: "200px" }}></div>

      <div>
        <BottomNav />
      </div>
    </div>
  );
}

export default Affiliate;
