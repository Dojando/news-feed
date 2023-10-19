import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await api.get('/top-headlines?country=fr');
            setArticles(response.data.articles);
        } catch (error) {
            setError('Une erreur s’est produite lors de la récupération des articles : '+error.response.data.message);
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