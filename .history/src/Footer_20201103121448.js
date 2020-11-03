import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <div className="row"> */}
          {/* Column1 */}
          {/* <div className="col">
          <ul className="list-unstyled">
              <li></li>
            </ul>
            <h4>Code &amp; Candor, LLC</h4>
            
          </div> */}
          {/* Column2 */}
          {/* <div className="col"> */}
            {/* <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
            </ul> */}
          {/* </div> */}
          {/* Column3 */}
          {/* <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
            </ul>
          </div> */}
        </div>
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