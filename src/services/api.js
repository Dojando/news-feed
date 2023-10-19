import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
      'X-Api-Key': '2ee0fe307cff44168c0b761d8a980ffe'}
});

export default api;