import React, { useState } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import DocSidebarItems from '@theme/DocSidebarItems';
import styles from './styles.module.css';

export default function MobileSidebarManager() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const mobileSidebar = useNavbarMobileSidebar();
  const windowSize = useWindowSize();
  const sidebar = useDocsSidebar();

  const isMobile = windowSize === 'mobile';
  const shouldShowButton =
    isMobile && sidebar && Array.isArray(sidebar.items) && !mobileSidebar?.shown;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setIsSidebarVisible(false);
  };

  if (!shouldShowButton) return null;

  return (
    <>
      {/* 동그라미 원 햄버거 버튼 */}
      <button
        className={styles.hamburgerButton}
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        aria-label="사이드바 열기/닫기"
      >
        <span className={styles.hamburgerIcon}>
          <span />
          <span />
          <span />
        </span>
      </button>
      {/* 오버레이 및 흰색 패널 */}
      {isSidebarVisible && (
        <div className={styles.sidebarOverlay} onClick={handleOverlayClick}>
          <nav className={styles.sidebarPanel}>
            <div className="theme-doc-sidebar-container">
              <div className="theme-doc-sidebar-menu">
                <DocSidebarItems items={sidebar.items} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
