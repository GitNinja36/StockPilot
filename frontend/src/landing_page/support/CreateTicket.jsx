import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h5 className="fs-5 text-muted">To create a ticket, select a relevant topic</h5>
        <div className="col-4 p-5">
          <h4 className="">
                Account Opening
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Getting Started</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Online</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Offline</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Charges</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Company, Partnership and HUF</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Non Resident Indian (NRI)</Link>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <h4 className="">
          Your Zerodha Account 
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Login credentials</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Your Profile</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Account modification and segment addition</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >CMR & DP ID</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Nomination</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Transfer and conversion of shares</Link>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <h4 className="">
          Trading and Markets
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Trading FAQs</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Kite</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Margins</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Product and order types</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Corporate actions</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Kite features</Link>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <h4 className="">
          Funds
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Fund withdrawal</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Adding funds</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Adding bank accounts</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >eMandates</Link>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <h4 className="">
          Console
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >IPO</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Portfolio</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Funds statement</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Profile</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Reports</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Referral program</Link>
          </div>
        </div>
        <div className="col-4 p-5">
          <h4 className="">
          Coin
          </h4>
          <div className="p-3 small">
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Understanding mutual funds and Coin</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Coin app</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Funds statement</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Coin web</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >Transactions and reports</Link><br />
            <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }} >National Pension Scheme (NPS)</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;