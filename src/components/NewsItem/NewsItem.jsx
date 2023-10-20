import React, { useState } from 'react';
import './NewsItem.scss';

function NewsItem({ article }) {
  const [imageUrl, setImageUrl] = useState(article.urlToImage);

  const handleImageError = () => {
    setImageUrl(null);
  };

  return (
    <div className="news-item">
      {imageUrl ? (
        <img className='news-image' src={imageUrl} alt={article.title} onError={handleImageError} />
      ) : null}
      <h2 className='news-title'>{article.title}</h2>
      <p className='news-description' dangerouslySetInnerHTML={{ __html: article.description }}></p>
      <a className='news-link' href={article.url} target="_blank" rel="noopener noreferrer">Accéder à l'article</a>
    </div>
  );
}

export default NewsItem;