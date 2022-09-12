import React from "react";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const { asPath } = useRouter();
  const [getRoute, setGetRoute] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);
  return (
    <div className="pt-3 pb-lg-2 pb-md-0 bg-white shadow border sticky-top">
      <div className="row px-4">
        <h4
          className="col-8"
          style={{ color: "#2036ae", textTransform: "capitalize" }}
        >
          {getRoute.slice(6)}
        </h4>

        <div className="col-4 text-right">
          <div className="row">
            <input
              style={{ borderRadius: "20px", backgroundColor: "#f3f3f3" }}
              className="form-control  d-none d-lg-block col-10 mb-2 d-md-none d-sm-none"
              placeholder="Search  CopyUp"
              size="2"
            />

            <span className="project-sort-by dropleft text-right col-lg-2 col-md-10 mt-1">
              <span
                className=""
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <Image src={require("../../asset/pro_pic.png")} className=" " />
              </span>
              <div
                className="dropdown-menu rounded-lg text-center border shadow mobileNavImg"
                aria-labelledby="dropdownMenuLink"
              >
                <Link href="/user/profile">
                  <a className="dropdown-item">My Profile</a>
                </Link>
                <Link href="/user/setting">
                  <a className="dropdown-item">Account Setting</a>
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="/user/setting">
                  <a className="dropdown-item">Help Center</a>
                </Link>
                <Link href="/user/setting">
                  <a className="dropdown-item">Contact Us</a>
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="/user/signin">
                  <a className="dropdown-item">Log Out</a>
                </Link>
              </div>
            </span>

            <div className=""></div>
          </div>
        </div>
      </div>
      <div className=" d-sm-block d-lg-none">
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
