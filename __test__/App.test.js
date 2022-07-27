/** 
 * @jest-environment jsdom
*/

import React from 'react';
import { renderWithProviders } from '.././utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import App from '.././src/app/App';


test("Testing Rest Time buttons and Redux", () => {
	renderWithProviders(<App/>);
	// Testing rest time buttons and Redux
	expect(screen.getByText(/Rest Time: 03:00/i)).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button', { name: /04:00/i}));
	expect(screen.getByText(/Rest Time: 04:00/i)).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button', { name: /05:00/i}));
	expect(screen.getByText(/Rest Time: 05:00/i)).toBeInTheDocument();
})
test("Testing ExerciseEntryForm and Redux", () => {
	renderWithProviders(<App/>);
	expect(screen.getByRole("textbox", {name: /first exercise/i})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: /second exercise/i})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: /third exercise/i})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: /fourth exercise/i})).toBeInTheDocument();
	expect(screen.getByRole("textbox", {name: /fifth exercise/i})).toBeInTheDocument();
});
