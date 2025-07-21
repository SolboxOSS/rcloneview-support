import React from "react"; // ✅ 꼭 포함할 것

import useBaseUrl from "@docusaurus/useBaseUrl";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

import "../css/navbar.css";

export default function CustomNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md" id="mainNav">
        <div className="newNav_container">
          {/* Logo */}
          <a href="/index.html" className="navbar-brand" style={{ display: "flex", alignItems: "center" }}>
            <img alt="RcloneView Logo" src={useBaseUrl("/img/logo_allWhite.svg")} className="logo_white" />
          </a>

          {/* 🔍 DocSearch 모바일용 – MENU 버튼 왼쪽 
          <div className="block sm:hidden mr-2" id="mobile-docsearch">
            <DocSearch
              appId="UGRR3WR5TO"
              indexName="rcloneview-support"
              apiKey="1bb2a6e53b0388ab8305806bd89350e2"
              placeholder=""
              translations={{
                button: {
                  buttonText: '',
                  buttonAriaLabel: 'Search',
                },
              }}
            />
          </div>
          */}

          {/* Toggle Button for mobile */}
          <button className="navbar-toggler" aria-label="Toggle navigation">
            <div style={{ display: "flex", alignItems: "center" }}>
              Menu
              <i className="fas fa-bars text-[26px] ml-2" />
            </div>
          </button>

          {/* Navigation Links */}
          <div className="navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-md-0">
              {/* 🔍 DocSearch 버튼 – Plus 앞에 위치 */}
              <li className="nav-item">
                <div className="docsearch-desktop-only">
                  <DocSearch appId="UGRR3WR5TO" indexName="rcloneview-support" apiKey="1bb2a6e53b0388ab8305806bd89350e2" />
                </div>
              </li>

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
