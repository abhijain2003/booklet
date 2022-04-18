import React from "react";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div>
      <div className="About">
        <div className="innerAbout">
          <div id="logo">
            <h1>
              Book<span>et</span>
            </h1>
          </div>
          <div id="knowUs">
            <h2>Know us</h2>
            <a href="#">About</a>
            <a href="#">Project Details</a>
          </div>
          <div id="security">
            <h2>Security</h2>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
          <div id="contact">
            <h2>Contact Developer</h2>
            <a className="mailLink" href="mailto:abhijain5403@gmail.com">
              mail me
            </a>
          </div>
          <div id="social">
            <h2>Socials</h2>
            <a href="https://twitter.com/abhiwd">
              <Twitter style={{ color: "blue" }} /> abhiwd
            </a>
            <a href="https://www.instagram.com/abhijain.5/">
              <Instagram style={{ color: "#fb3958" }} /> abhiwd
            </a>
            <a href="https://www.linkedin.com/in/abhi-jain-1b42421ba/">
              <LinkedIn style={{ color: "#0077b5" }} /> Abhi Jain
            </a>
          </div>
        </div>
      </div>
      <div className="license">
          <p>All Rights are reserved @2022</p>
          <p>Made with 💖 by Abhi Jain</p>
      </div>
    </div>
  );
}

export default Footer;