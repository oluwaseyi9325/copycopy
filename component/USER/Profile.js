import Image from "next/image";
import React from "react";
import EditLink from "./EditLink";
import EditNames from "./EditNames";
import EditSummary from "./EditSummary";

function Profile() {
  return (
    <div className="col-lg-8 col-md-9 mt-5">
      <div className="bg-white" style={{ borderRadius: "10px" }}>
        <section className="row p-3">
          <div className="col-lg-2 col-md-12 mt-3 pl-5">
            <Image src={require("../../asset/pro_pic.png")} />
          </div>
          <div className="col-lg-7 col-md-4 text-left">
            <h3>Joseph Gbadamosi</h3>
            <div className="text-muted">CopyWriter/UX</div>
            <div className="text-muted">Lagos</div>
          </div>
          <div className="col-lg-3 text-right">
            <i
              className="bi bi-pencil-square editIcon"
              data-toggle="modal"
              data-target="#editName"
            ></i>
          </div>
        </section>
      </div>

      <section className="mt-4 bg-white" style={{ borderRadius: "10px" }}>
        <div className="row p-3">
          <div className="col-lg-11 col-md-4 text-left">
            <h3>Summary</h3>
            <div className="text-muted">
              Skilled copywriter with 4 years of experience working in
              advertising. Committed to producing exceptional and creative types
              of content, including articles, internet content, advertisements,
              commercials, brochures, and publications. Experienced in a variety
              of writing styles and determined to strive for the best. Dedicated
              team player who enjoys working with others to develop innovative
              ideas. Seasoned professional with the goal of going beyond what is
              expected.
            </div>
            <div className=" row">
              <span className="col-lg-6 mt-2">
                <i className="bi bi-calendar-event-fill h6"></i> 4 years of
                experience
              </span>
              <span className="col-lg-6 mt-2">
                <i className="bi bi-chat-left-dots-fill h6"></i> Fluent in
                English and French
              </span>
            </div>
          </div>
          <div className="col-lg-1 text-right">
            <i className="bi bi-pencil-square editIcon" data-toggle="modal"
              data-target="#editSummary"></i>
          </div>
        </div>
      </section>

      <section className="mt-4 bg-white" style={{ borderRadius: "10px" }}>
        <aside className="p-3">
          <div className="row ">
            <div className="col-lg-11 col-md-8 col-sm-8 text-left">
              <h4>Portfolio Links</h4>
              <div className="mt-3">
                <div className="row">
                  <div className="col-lg-6 col-md-12 row">
                    <div className="col-6  mt-3">
                      <button className="btn btn-outline-dark ">
                        <i className="bi bi-linkedin"></i> Linkedin
                      </button>
                    </div>
                    <div className="col-6 mt-3 text-right">
                      <button className="btn btn-outline-dark ">
                        <i className="bi bi-facebook"></i> Facebook
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 row">
                    <div className="col-6  mt-3">
                      <button className="btn btn-outline-dark ">
                        <i className="bi bi-twitter"></i> Twitter
                      </button>
                    </div>
                    <div className="col-6  mt-3 text-right">
                      <button className="btn btn-outline-dark ">
                        <i className="bi bi-browser-chrome"></i> Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-4 col-sm-4 text-right">
              <i className="bi bi-pencil-square editIcon" data-toggle="modal"
              data-target="#editLink"></i>
            </div>
          </div>
        </aside>
      </section>

      <EditNames />
      <EditSummary/>
      <EditLink />
    </div>
  );
}

export default Profile;
