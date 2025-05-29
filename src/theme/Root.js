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
          const mediaElements = document.querySelectorAll(".theme-doc-markdown img, .theme-doc-markdown video");

          mediaElements.forEach(media => {
            if (!media.closest('a.glightbox')) {
              const wrapper = document.createElement('a');
              const src = media.tagName.toLowerCase() === 'video'
                ? media.querySelector('source').src
                : media.src;
              wrapper.href = src;
              wrapper.classList.add('glightbox');
              media.parentNode.insertBefore(wrapper, media);
              wrapper.appendChild(media);
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