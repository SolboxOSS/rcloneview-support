import React from "react"; // ✅ 꼭 포함할 것

import useBaseUrl from "@docusaurus/useBaseUrl";
import "../css/navbar.css";

export default function CustomNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="newNav_container">
          {/* Logo */}
          <a href="/index.html" className="navbar-brand">
            <img alt="RcloneView Logo" src={useBaseUrl("/img/logo_allWhite.svg")} className="logo_white" style={{ marginTop: 8 }} />
          </a>

          {/* Toggle Button for mobile */}
          <button className="navbar-toggler" aria-label="Toggle navigation">
            <div style={{ display: "flex", alignItems: "center" }}>
              Menu
              <i className="fas fa-bars text-[26px] ml-2" />
            </div>
          </button>

          {/* Navigation Links */}
          <div className="navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/src/pricing.html">
                  Plus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/src/download.html">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support/">
                  Support
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="https://forum.rcloneview.com/" target="_blank">
                  Forum
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
