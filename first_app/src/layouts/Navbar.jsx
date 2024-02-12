import React from "react";
import "../styles/layouts/navbar.css";
import styles from "../styles/layouts/navbar.module.css";

function navbar() {
  return (
    <div className="{styles.container}">
      <div>
        <h1>Logo</h1>
      </div>
      <ul className="{styles.ulstyles}">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default navbar;
