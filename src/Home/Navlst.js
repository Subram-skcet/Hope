import React from "react";
import "./Navlst.css";
function Nav() {
  return (
    <div className="tot">
      <div>
        <h5 className="hk">Company</h5>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Records</li>
        </ul>
      </div>
      <div>
        <h5 className="hk">Communities</h5>
        <ul>
          <li>For Artist</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Inverters</li>
          <li>Vendors</li>
        </ul>
      </div>
      <div>
        <h5 className="hk">Useful links</h5>
        <ul>
          <li>Support</li>
          <li>Free Mobile App</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
