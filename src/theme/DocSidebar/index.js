import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import CustomSearchBox from '@site/src/components/CustomSearchBox';
import styles from './styles.module.css'; // 별도 스타일 분리 권장

export default function DocSidebarWrapper({ query, setQuery, ...props }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarSearchBox}>
        <CustomSearchBox query={query} setQuery={setQuery} />
      </div>
      <div className={styles.sidebarMenu}>
        <DocSidebar {...props} />
      </div>
    </div>
  );
}
