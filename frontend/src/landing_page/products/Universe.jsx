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
        <div className="d-flex flex-row justify-content-evenly mb-3 text-muted small">
          <div className="p-3"></div>
          <div className="text-center">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ height: "4rem"}}
            />
            <p className="small p-3 m-2 ">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="text-center">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ height: "3rem", marginTop:"1px" }}
            />
            <p className="small p-3 m-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="text-center pb-3">
            <img
              src="media/images/tijori.svg"
              style={{ height: "4rem" }}
            />
            <p className="small p-3 m-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="p-3"></div>
        </div>
        <div className="p-3"></div>
        <div className="d-flex flex-row justify-content-evenly mb-3 text-muted small">
          <div className="p-3"></div>
          <div className="text-center">
            <img src="media/images/streakLogo.png" style={{ height: "4rem" }} />
            <p className="small p-3 m-2">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="text-center">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ height: "4rem" }}
            />
            <p className="small p-3 m-2">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="text-center">
            <img src="media/images/dittoLogo.png" style={{ height: "3rem" }} />
            <p className="small p-3 m-2">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <div className="p-3"></div>
        </div>
        <div className="text-center pb-5 pt-5">
          <button
            className="p-2 btn btn-primary fs-5 mt-4 "
            style={{ width: "25%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
