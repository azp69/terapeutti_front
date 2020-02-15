import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders content', () => {
    const component = render(
        <App />
    );

    expect(component.container).toHaveTextContent('Etusivu');
    
});
