import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';

// Importing the CSS module for the top navigation bar
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';





export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      {/* 네비바를 숨김 */}
      <div style={{ display: 'none' }}>
        <Navbar />
      </div>

      {/* RcloneView 네비바를 추가 */}
      <nav className={styles.topNavBar}>
      <div className={styles.topNavInner}>
        {/* 좌측 로고 영역: 로고 이미지 + 사이트명 링크 */}
        <a href="https://rcloneview.com" className={styles.logoLink}>
          <img 
            src={useBaseUrl('/img/logo_allWhite.svg')} 
            alt="RcloneView logo" 
            className={styles.logoImage} 
          />
        </a>

        {/* 우측 메뉴 링크 목록 */}
        <ul className={styles.navItems}>
          <li><a href="https://rcloneview.com/pricing.html" className={styles.navLink}>Plus</a></li>
          <li><a href="https://rcloneview.com/download.html" className={styles.navLink}>Download</a></li>
          <li><Link to="/" className={styles.navLink}>Support</Link></li>
          <li><a href="https://forum.rcloneview.com" className={styles.navLink} target="_blank" rel="noopener">Forum</a></li>
        </ul>
      </div>
    </nav>


      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
