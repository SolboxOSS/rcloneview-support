import React from 'react';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'ALGOLIA_APP_ID',
  'ALGOLIA_SEARCH_ONLY_API_KEY'
);

export default function AlgoliaSearchBox() {
  return (
    <div style={{
      maxWidth: 400,
      margin: "1rem 2rem 0 0",
      display: "flex",
      justifyContent: "flex-end"
    }}>
      <InstantSearch
        indexName="docs"
        searchClient={searchClient}
      >
        <SearchBox />
      </InstantSearch>
    </div>
  );
}