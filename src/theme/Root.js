import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Promise.all([
        import('glightbox').then((mod) => mod.default),
        import('glightbox/dist/css/glightbox.min.css'),
      ]).then(([GLightbox]) => {
        const initializeGlightbox = () => {
          // 이미지만 선택하도록 수정 (비디오 제외)
          const images = document.querySelectorAll(".theme-doc-markdown img");

          images.forEach(img => {
            if (!img.closest('a.glightbox')) {
              const wrapper = document.createElement('a');
              wrapper.href = img.src;
              wrapper.classList.add('glightbox');
              img.parentNode.insertBefore(wrapper, img);
              wrapper.appendChild(img);
            }
          });

          if (window.lightboxInstance) {
            window.lightboxInstance.destroy();
          }

          window.lightboxInstance = GLightbox({
            selector: '.glightbox',
            loop: true,
            autoplayVideos: true,
            zoomable: false,
            closeOnSlideClick: true,
          });

          window.lightboxInstance.on('open', () => {
            const container = document.querySelector('.gcontainer');
            if (container) {
              container.addEventListener('click', function(event) {
                const image = event.target.closest('.gslide-image img');
                if (image) {
                  window.lightboxInstance.close();
                }
              });
            }
          });
        };

        initializeGlightbox();
      });
    }
  }, [location.pathname]);

  return <>{children}</>;
}