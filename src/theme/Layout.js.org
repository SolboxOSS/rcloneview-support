import React from 'react';
import Layout from '@theme-original/Layout';  // Docusaurus 기본 Layout (원본)
import TopNavbar from '@site/src/components/TopNavbar';  // 아래에서 생성할 커스텀 상단바

export default function LayoutWrapper(props) {
  return (
    <>
      {/* 커스텀 상단 네비게이션 바를 기본 Layout 위에 렌더링 */}
      <TopNavbar />
      <Layout {...props} />
    </>
  );
}