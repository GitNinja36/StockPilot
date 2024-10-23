import React from 'react';
import {Link} from "react-router-dom";

function Team() {
    return ( 
        <div className="mb-5">
        <h2 className="text-center">People</h2>
        <div className="profile-card pt-5 pb-5 mb-3 p-5 d-flex flex-row mb-3 align-items-center">
          <div className=" profile-image-container p-5 d-flex flex-column mb-3" >
            <img
              src="media/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              class="profile-image p-2"
            />
            <h3 className="pt-3 text-center">Nithin Kamath</h3>
            <p className="text-center small">Founder, CEO</p>
          </div>
          <div className="profile-details p-5 mb-5 ">
            <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
                Playing basketball is his zen.
            </p>
            <p>
                Connect on <Link to="/" className="text-decoration-none">Homepage</Link> /  <Link to="/" className="text-decoration-none">TradingQnA</Link> /  <Link to="/" className="text-decoration-none">Twitter</Link>
            </p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center mb-3 ">
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Nikhil.jpg"
                alt="Nikhil"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Nikhil Kamath</h4>
            <p className="text-center small">Co-founder & CFO</p>
          </div>
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Kailash.jpg"
                alt="Kailash"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Dr. Kailash Nadh</h4>
            <p className="text-center small">CTO</p>
          </div>
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Venu.jpg"
                alt="Venu"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Venu Madhav</h4>
            <p className="text-center small">COO</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center mb-3 ">
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Hanan.jpg"
                alt="Hanan"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Hanan Delvi</h4>
            <p className="text-center small">CCO</p>
          </div>
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Seema.jpg"
                alt="Seema"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Seema Patil</h4>
            <p className="text-center small">Director</p>
          </div>
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/karthik.jpg"
                alt="karthik"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Karthik Rangappa</h4>
            <p className="text-center small">Chief of Education</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center mb-3 ">
          <div className="d-flex flex-column mb-3">
            <img 
                src="media/images/Austin.jpg"
                alt="Austin Prakesh"
                class="team-profile-image p-2"
            />
            <h4 className="text-center pt-2">Austin Prakesh</h4>
            <p className="text-center small">Director Strategy</p>
          </div>
        </div>
      </div>
    );
}

export default Team;