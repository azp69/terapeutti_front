import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Welcome from './welcome';

afterEach(cleanup);

test('renders content', () => {
    const component = render(
        <Welcome />
    );

    expect(component.container).toHaveTextContent('Etsitkö luotettavaa tietoa ruokailuun tai syömiseen liittyvissä kysymyksissä?');
    
});
