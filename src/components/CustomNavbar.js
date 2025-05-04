import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './CustomNavbar.module.css';


export default function CustomNavbar() {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top`} id="mainNav">
      <div className="newNav_container">
        <a className="navbar-brand" href="/index.html">
          <img alt="RcloneView Logo" className="logo_white" src="/assets/new/logo_allWhite.svg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/src/pricing.html">Plus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/src/download.html">Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://forum.rcloneview.com/" target="_blank" rel="noopener noreferrer">Forum</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}