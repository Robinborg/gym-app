import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '.././utils/test-utils';
import App from '.././src/app/App';

test('test app', () => {
	renderWithProviders(<App/>)

	expect(screen.getByText(/undefined/i)).toBeInTheDocument();
});
