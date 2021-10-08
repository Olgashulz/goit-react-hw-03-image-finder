import React from 'react';

export default function ErrorResponse({ message }) {
  console.log('Ошибка');
  return <h3>{message}</h3>;
}
