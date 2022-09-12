import Image from "next/image";
import React from "react";

function NeedCopy() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-10 col-md-12 mx-auto">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <Image
                src={require("../../asset/needCopy.png")}
                width={""}
                height={""}
              />
            </div>
            <div className="col-lg-7 col-md-7 pl-4">
              <div>
                <h3>You need to CopyUp if...</h3>
                <div>
                  <div className="row mt-4">
                    <div className="col-1 mt-3">
                      <i
                        style={{ backgroundColor: "#E9EBF7", color: "#2036AE" }}
                        className="bi  bi-check-lg  px-1 py-1 rounded"
                      ></i>
                    </div>
                    <div
                      className="col-10 text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                      You are a young Nigerian in need of a profitable stream of
                      income.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-2">
                    <div className="col-1 mt-3">
                      <i
                        style={{ backgroundColor: "#E9EBF7", color: "#2036AE" }}
                        className="bi  bi-check-lg  px-1 py-1 rounded"
                      ></i>
                    </div>
                    <div
                      className="col-10 text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                      You have a well-paying skill/business but it’s sincerely
                      not enough.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-2">
                    <div className="col-1 mt-3">
                      <i
                        style={{ backgroundColor: "#E9EBF7", color: "#2036AE" }}
                        className="bi  bi-check-lg  px-1 py-1 rounded"
                      ></i>
                    </div>
                    <div
                      className="col-10 text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                      You have heard of Copywriting before (maybe even gotten a
                      bad course), but you cannot make head nor tail of it.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-2">
                    <div className="col-1 mt-3">
                      <i
                        style={{ backgroundColor: "#E9EBF7", color: "#2036AE" }}
                        className="bi  bi-check-lg  px-1 py-1 rounded"
                      ></i>
                    </div>
                    <div
                      className="col-10 text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                      You need a community of copywriters that are always there
                      to guide you at every step.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-2">
                    <div className="col-1 mt-3">
                      <i
                        style={{ backgroundColor: "#E9EBF7", color: "#2036AE" }}
                        className="bi  bi-check-lg  px-1 py-1 rounded"
                      ></i>
                    </div>
                    <div
                      className="col-10 text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                      You have gotten to a point in your life where you must get
                      results to prove that those who never believed in you were
                      wrong.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedCopy;
