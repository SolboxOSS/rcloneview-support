document.addEventListener("DOMContentLoaded", function () {
    // 모든 이미지 중 클래스가 image-zoom인 이미지만 선택
    const images = document.querySelectorAll(".image-zoom");
  
    images.forEach(img => {
      img.addEventListener("click", function () {
        // 오버레이 생성
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 10000;
        overlay.style.cursor = "zoom-out";
  
        // 확대 이미지 생성
        const largeImg = document.createElement("img");
        largeImg.src = img.src;
        largeImg.style.maxWidth = "90%";
        largeImg.style.maxHeight = "90%";
        largeImg.style.borderRadius = "8px";
        largeImg.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  
        // 오버레이에 이미지 추가
        overlay.appendChild(largeImg);
  
        // 클릭하면 오버레이 제거
        overlay.addEventListener("click", function () {
          document.body.removeChild(overlay);
        });
  
        document.body.appendChild(overlay);
      });
    });
  });