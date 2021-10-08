import React from 'react';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
