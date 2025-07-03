import React, { useEffect } from "react";

export default function NavbarScript() {
  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector("#mainNav");
      if (!navbarCollapsible) return;

      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    navbarShrink();
    window.addEventListener("scroll", navbarShrink);

    const mainNav = document.querySelector("#mainNav");
    if (mainNav && window.bootstrap?.ScrollSpy) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74,
      });
    }

    const navbarToggler = document.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));

    responsiveNavItems.forEach(navItem => {
      navItem.addEventListener("click", () => {
        if (getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });

    // ✅ 추가: 토글 버튼 클릭 시 navbar 메뉴 열기/닫기
    navbarToggler?.addEventListener("click", () => {
      const navCollapse = document.querySelector("#navbarResponsive");
      navCollapse?.classList.toggle("show");
    });

    return () => {
      window.removeEventListener("scroll", navbarShrink);
    };
  }, []);

  return null;
}
