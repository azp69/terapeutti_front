import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Nav from './nav';

afterEach(cleanup);

test('renders content', () => {
    const component = render(
        <Nav />
    );

    expect(component.container).toHaveTextContent('Etusivu');
    expect(component.container).toHaveTextContent('Palvelut');
    expect(component.container).toHaveTextContent('Miksi ravitsemusterapiaan');
    expect(component.container).toHaveTextContent('Ota yhteyttä');

});
