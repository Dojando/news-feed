import React from 'react';
import './NewsItem.css';

function NewsItem({ article }) {
  return (
    <div className="news-item">
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} />
      ) : (
        <div className="placeholder-image">article sans image</div>
      )}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Accéder à l'article</a>
    </div>
  );
}

export default NewsItem;