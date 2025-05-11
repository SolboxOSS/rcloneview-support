//import React from 'react';
import React, { useState } from 'react'; // ✅ 꼭 포함할 것
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './CustomNavbar.module.css';


export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false); // ✅ 꼭 필요!
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF9012] font-poppins shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/index.html" className="flex items-center">
          <img
            alt="RcloneView Logo"
            src={useBaseUrl('/img/logo_allWhite.svg')}
            className="h-8"
          />
        </a>

        {/* Toggle Button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className="flex items-center">
            Menu
            <i className="fas fa-bars text-[26px] ml-2" />
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
          <a href="/src/pricing.html" className="text-white hover:text-yellow-100 font-medium">Plus</a>
          <a href="/src/download.html" className="text-white hover:text-yellow-100 font-medium">Download</a>
          <a href="/support/" className="text-white hover:text-yellow-100 font-medium">Support</a>
          <a
            href="https://forum.rcloneview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-100 font-medium"
          >
            Forum
          </a>
        </div>
      </div>
    </nav>
  );
}