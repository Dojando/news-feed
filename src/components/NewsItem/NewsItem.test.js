import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsItem from './NewsItem';

describe('Composant NewsItem', () => {
  const article = {
    title: 'Test Title',
    description: 'Test Description',
    url: 'https://test.com',
    urlToImage: 'https://test.com/image.jpg'
  };

  it('devrait rendre le titre, la description, l\'image, et le lien vers l\'article complet', () => {
    render(<NewsItem article={article} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toHaveAttribute('src', 'https://test.com/image.jpg');
    expect(screen.getByText('Accéder à l\'article')).toHaveAttribute('href', 'https://test.com');
  });
});
