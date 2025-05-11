window.addEventListener("load", function () {
    const images = document.querySelectorAll(".image-zoom");
  
    images.forEach((img) => {
      img.style.cursor = "zoom-in";
  
      img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.setAttribute('style', `
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
        largeImg.setAttribute('style', `
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
  });