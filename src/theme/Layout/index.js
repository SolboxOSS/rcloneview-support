import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, SkipToContentFallbackId, ThemeClassNames } from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import "@site/src/css/global.css";

//import CustomNavbar from '@site/src/components/TopNavbar'; // Importing the custom navbar component - jay
import CustomNavbar from "@site/src/components/CustomNavbar"; // Importing the custom navbar component - jay
import NavbarScript from "@site/src/components/NavbarScript";

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

      {/* RcloneView 네비바를 추가 -jay */}
      <CustomNavbar />

      {/* 네비바를 숨김 -jay */}
      <Navbar />

      <NavbarScript />
      {/* ← 이거 반드시 넣어야 실행됨 */}
      <div id={SkipToContentFallbackId} className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}>
        <ErrorBoundary fallback={params => <ErrorPageContent {...params} />}>{children}</ErrorBoundary>
      </div>
      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
