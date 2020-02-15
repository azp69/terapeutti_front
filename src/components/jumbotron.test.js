import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Jumbotron from './jumbotron';

afterEach(cleanup);

test('renders content', () => {
    const component = render(
        <Jumbotron />
    );

    expect(component.container).toHaveTextContent('Larate.fi');
    expect(component.container).toHaveTextContent('Laillistetut ravitsemusterapeutit');
});

