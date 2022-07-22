import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '.././utils/test-utils';
import Sets from '.././src/features/sets/Sets';

test('test app', () => {
		renderWithProviders(<Sets/>)
		expect(screen.getByText(/03:00/i)).toBeInTheDocument();
});

