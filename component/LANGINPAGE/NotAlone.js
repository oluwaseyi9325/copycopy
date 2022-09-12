import Image from "next/image";
import React from "react";

function NotAlone() {
  return (
    <div className="mt-5 mb-5" style={{ backgroundColor: "#2036AE" }}>
      <div className="py-5 container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-7 text-white">
            <div className="mt-4">
              <h2>You are not alone</h2>
              <div>
                <p className="mt-4">
                  The major challenge with copywriting courses out there is that
                  they don’t provide support even after the course, but with
                  CopyUp’s premium community you can always get your questions
                  answered and your works reviewed.
                </p>
                <p>
                  Also, there are in-house sessions held every week on various
                  segments like writing copy that convert, getting clients via
                  our job board, affiliate systems, and every other vital parts
                  of your copy career. These sections are top tier masterclasses
                  restricted to members only.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-7">
            <Image src={require("../../asset/notAloneImage.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotAlone;
