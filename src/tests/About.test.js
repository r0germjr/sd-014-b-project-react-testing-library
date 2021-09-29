import { screen, render } from '@testing-library/react';
import React from 'react';
import About from '../components/About';

describe('Testa a aplicação do component About', () => {
  test('se a página contém as informações sobre a Pokédex.', () => {
    render(<About />);

    const title = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(title).toBeInTheDocument();
  });

  test('se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);

    const paragraph = screen.getAllByRole('paragraph');
    const paragraphOne = screen.getByText(/This application simulates a Pokédex,/);
    const paragraphTwo = screen.getByText(/One can filter Pokémons by type,/);
    expect(paragraph.length).toBe(2);
    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  test('se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
