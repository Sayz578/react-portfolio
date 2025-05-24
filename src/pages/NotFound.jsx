import React from 'react';

const NotFound = () => {
  return (
    <div className='page-error'>
      <h1>404 - Страница не найдена</h1>
      <p>Похоже, вы перешли по неверной ссылке.</p>
      <a href="/" className="page-error-link">Home</a>
    </div>
  );
};

export default NotFound;