import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="conatiner">
      <h4 className="text-muted p-5 text-center mt-5 mb-5 ">
        Want to know more about our technology stack? Check out the{" "}
        <Link to="/" className="text-decoration-none">
          Zerodha.tech
        </Link>{" "}
        blog.
      </h4>
      <div className="row">
        <div className="text-muted p-5 text-center mb-5">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        {/* <div className="d-flex flex-column justify-content-around align-items-center mb-3">
          <div>
            <div>
              <img src="media/images/zerodhaFundhouse.png" className="" />
            </div>
            <div>
              <p className="small">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div>
          <button
            className="p-2 btn btn-primary fs-5 mt-4"
            style={{ width: "25%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Universe;
