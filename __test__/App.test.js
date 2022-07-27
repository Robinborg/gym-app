/** 
 * @jest-environment jsdom
*/

import React from 'react';
import { renderWithProviders } from '.././utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import App from '.././src/app/App';


test("renders without crashing", () => {
	renderWithProviders(<App/>);
	expect(screen.getByText(/Rest Time: 03:00/i)).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button', { name: /04:00/i}));
	expect(screen.getByText(/Rest Time: 04:00/i)).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button', { name: /05:00/i}));
	expect(screen.getByText(/Rest Time: 05:00/i)).toBeInTheDocument();
})
