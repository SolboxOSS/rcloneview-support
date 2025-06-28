import React from 'react';
import SearchBox from '@theme-original/SearchBar';

function CustomLayout(props) {
  return (
    <Layout>
      <SearchBox />

      <DocSidebar {...props} style={{ marginTop: '0px' }}/>
    </Layout>
  );
}

