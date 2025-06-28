import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import CustomSearchBox from '@site/src/components/CustomSearchBox';

export default function DocSidebarWrapper({ query, setQuery, ...props }) {
  return (
    <>
      {/* 네비바에 가리지 않도록 paddingTop 추가 */}
      <div style={{ paddingTop: '2rem', position: 'sticky', top: 0, zIndex:1000}}>
        <CustomSearchBox query={query} setQuery={setQuery} />
      </div>
      {/* DocSidebar 자체에 marginTop이 있으면 0으로 조정 */}

      <DocSidebar {...props }/>
    </>
  );
}
