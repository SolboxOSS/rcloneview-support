import React from 'react';
import TypesenseSearchBox from './TypesenseSearchBox';

// 엔진 전환용: 'typesense' 또는 'algolia'
const SEARCH_VENDOR = 'typesense'; // 'algolia' 또는 'searchbar'로 변경 가능


let SearchComponent;

if (SEARCH_VENDOR === 'algolia') {
  SearchComponent = require('./AlgoliaSearchBox').default;
} else if (SEARCH_VENDOR === 'searchbar') {
  // swizzling한 SearchBar (예: src/theme/SearchBar.js)
  SearchComponent = require('@theme-original/SearchBar').default;
} else {
  SearchComponent = require('./TypesenseSearchBox').default;
}

export default function CustomSearchBox() {
  return (
    <SearchComponent />
  );
}
