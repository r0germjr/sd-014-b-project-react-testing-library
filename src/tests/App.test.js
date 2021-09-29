import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('App.js tests', () => {
  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');

    const pageNotFoundText = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });

    expect(pageNotFoundText).toBeInTheDocument();

  });
});
