import React, { useState } from "react";
import EarnBig from "./EarnBig";
import EditDetails from "./EditDetails";
import Notification from "./Notification";
import Payment from "./Payment";

function AccountSetting() {
  const [edit, setEdit] = useState(true);
  const [pay, setPay] = useState(false);
  const [noti, setNoti] = useState(false);
  const [textAccount, setAccountText] = useState("text-primary");
  const [textNoti, setNotiText] = useState("");
  const [textPay, setPayText] = useState("");
  const editBtn = () => {
    setEdit(true);
    setPay(false);
    setNoti(false);
    setAccountText("text-primary");
    setPayText("");
    setNotiText("");
  };
  const payBtn = () => {
    setEdit(false);
    setPay(true);
    setNoti(false);
    setAccountText("");
    setPayText("text-primary");
    setNotiText("");
  };
  const notiBtn = () => {
    setEdit(false);
    setPay(false);
    setNoti(true);
    setAccountText("");
    setPayText("");
    setNotiText("text-primary");
  };
  return (
    <div className="row ">
      <div className="col-lg-8 col-md-10 py-5">
        <div>
          <nav aria-label="breadcrumb" className="breadCrumb">
            <ol className="breadcrumb">
              <li
                style={{ cursor: "pointer" }}
                className={`breadcrumb-item ${textAccount}`}
                onClick={() => editBtn()}
              >
                Account
              </li>

              <li
                onClick={() => notiBtn()}
                style={{ cursor: "pointer" }}
                className={`breadcrumb-item ${textNoti}`}
              >
                Notification
              </li>

              <li
                style={{ cursor: "pointer" }}
                onClick={() => payBtn()}
                className={`breadcrumb-item ${textPay}`}
                aria-current="page"
              >
                Payment Method
              </li>
            </ol>
          </nav>
          {edit && <EditDetails />}
          {pay && <Payment />}
          {noti && <Notification />}
        </div>
      </div>
      <div className="col-lg-4 col-md-4 py-5">
        <EarnBig />
      </div>

      <div style={{ height: "900px" }}></div>
    </div>
  );
}

export default AccountSetting;
