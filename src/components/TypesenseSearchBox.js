import React from 'react';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom';
import { useSearch } from '../contexts/SearchContext';

const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'greatercloneview1!',
    nodes: [
      {
        host: 'ec2-18-117-197-178.us-east-2.compute.amazonaws.com',
        port: 8108,
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'hierarchy.lvl1,content',
  },
});
export const searchClient = typesenseAdapter.searchClient;

function HitsUpdater({ hits }) {
  const { setResults } = useSearch();
  React.useEffect(() => {
    setResults(hits);
  }, [hits, setResults]);
  return null;
}
const CustomHits = connectHits(HitsUpdater);

export default function TypesenseSearchBox() {
  const { query, setQuery } = useSearch();
  return (
    <InstantSearch
      indexName="docs"
      searchClient={searchClient}
      searchState={{ query }}
      onSearchStateChange={state => setQuery(state.query || '')}
    >
      <SearchBox
        className="mySidebarSearchBox"
        onChange={e => setQuery(e.target.value)}
      />
      <CustomHits />
    </InstantSearch>
  );
}