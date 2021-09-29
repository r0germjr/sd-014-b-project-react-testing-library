import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Testa componente `About`', () => {
  test('se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexFirstParagraph = screen.getByText(
      (content) => content.startsWith('This application'),
    );

    const pokedexSecondParagraph = screen.getByText(
      (content) => content.startsWith('One can filter'),
    );
    expect(pokedexFirstParagraph).toBeInTheDocument();
    expect(pokedexSecondParagraph).toBeInTheDocument();
  });

  test('se a página contém um heading `h2` com o texto `About Pokédex`.', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });
    expect(title).toBeInTheDocument();
  });
});
