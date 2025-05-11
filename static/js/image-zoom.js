function setupImageZoom() {
    const images = document.querySelectorAll(".theme-doc-markdown img");
  
    images.forEach((img) => {
      if (img.getAttribute("data-zoom-enabled")) return; // 중복 실행 방지
  
      img.style.cursor = "zoom-in";
      img.setAttribute("data-zoom-enabled", "true"); // 중복 실행 방지용 플래그 추가
  
      img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.setAttribute("style", `
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: zoom-out;
        `);
  
        const largeImg = document.createElement("img");
        largeImg.src = img.src;
        largeImg.alt = img.alt || "Expanded image";
        largeImg.setAttribute("style", `
          max-width: 90%;
          max-height: 90%;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `);
  
        overlay.appendChild(largeImg);
  
        overlay.addEventListener("click", () => {
          document.body.removeChild(overlay);
        });
  
        document.body.appendChild(overlay);
      });
    });
  }
  
  // 최초 페이지 로딩시 실행
  window.addEventListener("load", setupImageZoom);
  
  // Docusaurus 페이지 이동시 이벤트 처리
  window.addEventListener("popstate", function () {
    setTimeout(setupImageZoom, 200);
  });
  
  // 페이지 내부 링크 클릭 이벤트 처리 (가장 안정적인 추가 방법)
  document.addEventListener("click", function (event) {
    const target = event.target.closest("a");
    if (target && target.getAttribute("href") && !target.getAttribute("href").startsWith("http")) {
      setTimeout(setupImageZoom, 200);
    }
  });