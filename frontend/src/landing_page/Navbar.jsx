import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"white"}}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="StockPilot"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 small">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link " to="/support">
                  Support
                </Link>
              </li>
            </ul>
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
