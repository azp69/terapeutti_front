import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Contact from './contact';

afterEach(cleanup);

test('renders content', () => {
    const component = render(
        <Contact />
    );

    expect(component.container).toHaveTextContent('Haluatko lisätietoja palveluistamme?');
    
});
