import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../Pages/Main';

describe('portfolio main page', () => {
	it('<Main />', () => {
		const { getByTestId } = render(<Main />);
		expect(getByTestId('MainContainer')).toBeTruthy();
	});
});
