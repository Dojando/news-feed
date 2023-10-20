import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.scss';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await api.get('/top-headlines?country=us');
      setArticles(response.data.articles);
    } catch (error) {
      if (error.response) {
        setError('Une erreur s’est produite lors de la récupération des articles.');
      } else {
        setError('Une erreur réseau s’est produite. Veuillez vérifier votre connexion et réessayer.');
      }
    }
  }

  useEffect(() => {
      fetchNews();
  }, []);

  return (
    <div className="news-list">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      )}
    </div>
  );
};

export default NewsList;