import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function BottomNav() {
  const { asPath } = useRouter();
  const routes = useRouter();
  const [getRoute, setGetRoute] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);

  return (
    <div className="fixed-bottom bg-white d-sm-block  d-lg-none">
      <div className="px-3 py-3 row">
        <div className="col-2">
          <Link href="/user/home" id="navAs">
            <a id="navAs">
              <div
                className="text-center"
                id={getRoute === "/user/home" ? "MobileNavText" : ""}
              >
                <div className="text-center">
                  <i className="bi bi-house-door-fill text-center ml-2"></i>
                </div>
                <div>
                  <b>Home</b>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-2">
          <Link href="/user/courses" id="navAs">
            <a id="navAs">
              <div
                className="text-center"
                id={getRoute === "/user/courses" ? "MobileNavText" : ""}
              >
                <div className="text-center">
                  <i className="bi bi-book-half ml-2 text-center"></i>
                </div>
                <div>
                  <b>Courses</b>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-2 ml-3">
          <Link href="/user/jobs" id="navAs">
            <a id="navAs">
              <div
                className="text-center"
                id={getRoute === "/user/jobs" ? "MobileNavText" : ""}
              >
                <div className="text-center">
                  <i className="bi bi-box2 ml-2 text-center"></i>
                </div>
                <div>
                  <b>Jobs</b>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-2">
          <Link href="/user/saved" id="navAs">
            <a id="navAs">
              <div
                className="text-center"
                id={getRoute === "/user/saved" ? "MobileNavText" : ""}
              >
                <div className="text-center">
                  <i className="bi bi-save-fill  ml-2 text-center"></i>
                </div>
                <div>
                  <b>Saved</b>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-2">
          <Link href="/user/affiliates" id="navAs">
            <a id="navAs">
              <div
                className="text-center"
                id={getRoute === "/user/affiliates" ? "MobileNavText" : ""}
              >
                <div className="text-center">
                  <i className="bi bi-stars ml-4 text-center"></i>
                </div>
                <div>
                  <b>Affiliates</b>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
