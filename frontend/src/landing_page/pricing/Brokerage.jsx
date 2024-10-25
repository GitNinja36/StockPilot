import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="conatiner pb-5">
      <div className="row p-5 mt-5 text-center border-top mb-5">
        <div className="col-8 p-4 mt-5">
          <Link className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculater</h3>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
              className="text-muted mt-5"
            >
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </Link>
        </div>
        <div className="col-4 p-4 mt-5">
          <Link className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
