/** 
 * @jest-environment jsdom
*/

import React from 'react';
import { renderWithProviders } from '.././utils/test-utils';
import App from '.././src/app/App';


test("renders without crashing", () => {
	renderWithProviders(<App/>)
})
