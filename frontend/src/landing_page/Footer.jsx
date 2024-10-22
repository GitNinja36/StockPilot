import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="bg-light text-muted pt-4">
      <div className="container d-flex justify-content-around flex-row">
        <div className="p-4">
          <div>
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              className="mb-2"
              style={{ height: "22px" }}
            />
          </div>
          <div className="small mt-2">
            <p>
              © 2010 - 2024, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
          </div>

          <div className="d-flex flex-column mb-">
            <div className="mt-3 pb-2 border-bottom">
              <Link to="/" className="text-muted mx-2 ">
                <i className="fab fa-x-twitter fs-6"></i>
              </Link>
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-facebook fs-6"></i>
              </Link>
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-instagram fs-6"></i>
              </Link>
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-linkedin fs-6"></i>
              </Link>
            </div>
            <div className=" mt-2">
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-youtube fs-6"></i>
              </Link>
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-whatsapp fs-6"></i>
              </Link>
              <Link to="/" className="text-muted mx-2">
                <i className="fab fa-telegram fs-6"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-2 ">
          <h5 className="footer-text pb-2 ">
            <Link to="/" className="footer-link">
              Company
            </Link>
          </h5>
          <ul className="list-unstyled ">
            <li className="footer-item">
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/product" className="footer-link">
                Products
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/pricing" className="footer-link">
                Pricing
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Referral programme
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Careers
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Zerodha.tech
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Press & media
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Zerodha Cares (CSR)
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h5 className="footer-text pb-2">
            <Link href="#" className="footer-link">
              Support
            </Link>
          </h5>
          <ul className="list-unstyled ">
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Contact us
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Support portal
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Z-Connect blog
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                List of charges
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Downloads & resources
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Videos
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Market overview
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                How to file a complaint?
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Status of your complaints
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h5 className="footer-text pb-2">
            <Link href="#" className="footer-link">
              Account
            </Link>
          </h5>
          <ul className="list-unstyled">
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Open an account
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-link">
                Fund transfer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="conatiner">
        <div className="p-5 small">
            <p>
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <p>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
        </div>

        <div className="container d-flex flex-row mb-3 d-flex justify-content-evenly">
            <div className=" ">
                <Link to="/" className="footer-link small">
                    <p>NSE</p>
                </Link>
            </div>
            <div className="">
                <Link to="/" className="footer-link small">
                    <p>BSE</p>
                </Link>
            </div>
            <div className=" ">
                <Link to="/" className="footer-link small">
                    <p>MCX</p>
                </Link>
            </div>
            <div className=" ">
                <Link to="/" className="footer-link small">
                    <p>Terms & conditions</p>
                </Link>
            </div>
            <div className=" ">
                <Link to="/" className="footer-link small">
                    <p>Policies & procedures</p>
                </Link>
            </div>
            <div className="">
                <Link to="/" className="footer-link small">
                    <p>Privacy policy</p>
                </Link>
            </div>
            <div className="">
                <Link to="/" className="footer-link small">
                    <p>Disclosure</p>
                </Link>
            </div>
            <div className=" ">
                <Link to="/" className="footer-link small">
                    <p>For investor's attention</p>
                </Link>
            </div>
            <div className="">
                <Link to="/" className="footer-link small">
                    <p>Investor charter</p>
                </Link>
            </div>
        </div>

      </div>

 
    </div>
  );
}

export default Footer;
