import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Code &amp; Candor | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;