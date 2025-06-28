import React from 'react';
import { useSearch } from '../contexts/SearchContext';

export default function SearchResultOverlay() {
  const { query, results, setQuery } = useSearch();

  if (!query) return null;

  const handleClick = (url) => {
    setQuery(''); // 검색어 초기화(오버레이 닫기)
    window.location.href = url; // 새 페이지로 이동 (필요하면 react-router 사용)
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 70,
        left: 300,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        background: 'rgba(255,255,255,0.98)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.09)',
        overflowY: 'auto',
        padding: '2rem'
      }}
    >
      {results.length === 0 ? (
        <div style={{ color: '#999', textAlign: 'center', marginTop: '2rem' }}>No results found</div>
      ) : (
        results.map((hit, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: 20,
              borderBottom: "1px solid #eee",
              cursor: "pointer"
            }}
            onClick={() => handleClick(hit.url)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') handleClick(hit.url); }}
          >
            <strong>{hit['hierarchy.lvl1'] || hit['content']}</strong>
            <div style={{ fontSize: 13, color: "#777" }}>{hit.url}</div>
            <div>{hit.content?.slice(0, 100)}...</div>
          </div>
        ))
      )}
    </div>
  );
}