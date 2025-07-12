import React, {useState} from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, SkipToContentFallbackId, ThemeClassNames } from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
//import Navbar from "@theme/Navbar";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import "@site/src/css/global.css";

//import CustomNavbar from '@site/src/components/TopNavbar'; // Importing the custom navbar component - jay
import CustomNavbar from "@site/src/components/CustomNavbar"; // Importing the custom navbar component - jay
import NavbarScript from "@site/src/components/NavbarScript";

import { SearchProvider } from "../../contexts/SearchContext";
import SearchResultOverlay from "@site/src/components/SearchResultOverlay";



export default function Layout(props) {

  const [results, setResults] = useState([]); // 이미 이렇게 되어 있다면 OK

  const {
    children,
    noFooter,
    wrapperClassName,
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

      {/* docusaurus 콘텐츠부분 헤더 커스텀 */}
      {/* /support 페이지에서도 보이는 문제가 있어서, 7/11 오픈때 가리기로 결정 */}
      {/* <Navbar /> */}

      <NavbarScript />
      {/* ← 이거 반드시 넣어야 실행됨 */}
      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <SearchProvider>

          <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
            {children}
            
          </ErrorBoundary>

          {/* 본문에만 오버레이 표시 */}
          <SearchResultOverlay />
          
        </SearchProvider>
      </div>
    </LayoutProvider>
  );
}