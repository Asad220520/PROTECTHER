import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer text-white flex flex-col">
          <b className="pb-4 text-xl">logo</b>
          {/* <img src="" alt="logo" /> */}
          <div className="flex gap-7 ">
            <span className="flex gap-1 flex-col">
              <p>TM 38 Degrees | 2022</p>
              <p>Limited by Guarantee Registered Company No.</p>
              <p>06642193 in England and Wales Registered</p>
              <p>office: Moor Place</p>
              <p>1 Fore St Ave</p>
              <p>London</p>
              <p>EC2Y 9DT</p>
            </span>
            <span className="pr-10 pt-7 flex gap-1 flex-col">
              <p>Campaigns</p>
              <p>Latest News</p>
              <p>Contact us</p>
              <p>Privacy Policy</p>
            </span>
            <span className="pt-7 flex gap-1 flex-col">
              <p>Donations Policy</p>
              <p>Careers</p>
              <p>Start a petition</p>
              <p>Terms of Service</p>
            </span>
          </div>
          <a className="pt-6" href="#">
            Built by 89up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
