import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function MobileNav() {
  const { asPath } = useRouter();
  const routes = useRouter();
  const [getRoute, setGetRoute] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);

  const ch = () => {
    if (window.confirm("Are you sire")) {
      routes.push("/signin");
    } else {
      routes.push(`${getRoute}`);
    }
  };

  return (
    <div>
      <div className="colomn sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark" id="nav-all">
          <div className="collapse navbar-collapse" id="royalnav">
            <ul className="navbar-nav ml-auto ">
              <nav
                className=" mt-1 border px-1"
                style={{ borderRadius: "5px" }}
              >
                <div className="row pt-2 pb-1 px-1 h6">
                  <div className="col-4">
                    <Link href="/user/home" id="navAs">
                      <a id="navAs">
                        <div
                          className=""
                          id={getRoute === "/user/home" ? "MobileNavText" : ""}
                        >
                          <i className="bi bi-house-door-fill"></i> Home
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div className="col-5">
                    <Link href="/user/courses" id="navAs">
                      <a id="navAs">
                        <div
                          className=""
                          id={
                            getRoute === "/user/courses" ? "MobileNavText" : ""
                          }
                        >
                          <i className="bi bi-book-half "></i> Courses
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div className="col-3  text-right" id="navAs">
                    <Link href="/user/jobs">
                      <a id="navAs">
                        <div
                          className=""
                          id={getRoute === "/user/jobs" ? "MobileNavText" : ""}
                        >
                          <i className="bi bi-box2"> </i> Job
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="row pt-2 pb-1 px-1 h6">
                  <div className="col-4">
                    <div
                      className=""
                      id={getRoute === "/user/saved" ? "MobileNavText" : ""}
                    >
                      <i className="bi bi-save-fill "></i> Saved
                    </div>
                  </div>

                  <div className="col-5">
                    <Link href="/user/affiliates" id="navAs">
                      <a id="navAs">
                        <div
                          className=""
                          id={
                            getRoute === "/user/affiliates"
                              ? "MobileNavText"
                              : ""
                          }
                        >
                          <i className="bi bi-stars "></i> Affiliates
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div className="col-3 text-right">
                    <small
                      style={{ fontSize: "10px" }}
                      className="text-warning btn btn-sm btn-outline-warning"
                    >
                      <small
                        style={{ cursor: "pointer" }}
                        onClick={() => ch()}
                        className="text-warning"
                      >
                        Log out
                      </small>
                    </small>
                  </div>
                </div>
              </nav>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNav;
