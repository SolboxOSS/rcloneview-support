import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF9012] h-10 py-0 font-poppins tracking-wide shadow-lg">
      <div className="max-w-screen-xl mx-auto w-fit md:w-full flex items-center justify-between ">
        {/* Logo */}
        <a href="/index.html" className="flex items-center ">
          <img
            alt="RcloneView Logo"
            src={useBaseUrl('/img/logo_allWhite.svg')}
            className="h-8"
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-white focus:outline-none bg-transparent border-none shadow-none"
          aria-label="Toggle navigation"
        >
          <span className="font-bold text-sm tracking-wide font-poppins leading-none">MENU</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6 tracking-wide font-poppins">
          <a href="/src/pricing.html" className="text-white font-medium">Plus</a>
          <a href="/src/download.html" className="text-white font-medium">Download</a>
          <a href="/support/" className="text-white font-medium">Support</a>
          <a
            href="https://forum.rcloneview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium"
          >
            Forum
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu with spacing and padding tweaks */}
      {/* 	•	pt-3: 상단 여백 조절 (기본 0.75rem ≈ 12px)
          	•	space-y-3: 항목 간 간격 (기본 0.75rem ≈ 12px)
          	•	pb-4: 마지막 항목 아래 여백 (1rem ≈ 16px)
          	•	pl-2: 왼쪽 들여쓰기 (0.5rem ≈ 8px) 
      */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        } md:hidden bg-[#FF9012] pl-4 px-4 pt-2 pb-4 space-y-3`}
      >
          <ul className="list-none flex flex-col md:flex-row md:items-center md:ml-auto py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6 pl-0 tracking-wide font-poppins ">          
          <li>
            <a href="/src/pricing.html" className="text-white font-medium">Plus</a>
          </li>
          <li>
            <a href="/src/download.html" className="text-white font-medium">Download</a>
          </li>
          <li>
            <a href="/support/" className="text-white font-medium">Support</a>
          </li>
          <li>
            <a href="https://forum.rcloneview.com/" target="_blank" rel="noopener noreferrer"
              className="text-white font-medium">
              Forum
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}