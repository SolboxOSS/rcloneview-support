import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer py-4" style={{ background: "#fff", fontFamily: "Poppins" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="col-lg-6 text-lg-start" style={{ color: "#6c757d" }}>
              Copyright &copy; Bdrive lnc. All rights reserved.
            </div>
            <div className="col-lg-5 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="https://rcloneview.com/src/about-us.html" style={{ color: "#6c757d" }}>
                About Us
              </a>
              <a className="link-dark text-decoration-none me-3" href="https://rcloneview.com/src/privacy_policy.html" style={{ color: "#6c757d" }}>
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none me-3" href="https://rcloneview.com/src/eula.html" style={{ color: "#6c757d" }}>
                EULA
              </a>
              <a className="link-dark text-decoration-none" href="https://forum.rclone.org/" target="_blank" style={{ color: "#6c757d" }}>
                Rclone Forum
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
