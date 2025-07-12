import React from 'react';
import DocItem from '@theme-original/DocItem';
// src/theme/DocPage/Layout.js
import MobileSidebarManager from '@site/src/components/MobileSidebarManager';

export default function DocItemWrapper(props) {
  return (
    <>
      <MobileSidebarManager />
      <DocItem {...props} />
    </>
  );
}
