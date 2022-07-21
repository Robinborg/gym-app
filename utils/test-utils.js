import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import setsListReducer from '../src/features/sets/setsListSlice';
import timersSliceReducer from '../src/features/timers/timersSlice';

export function renderWithProviders(
	ui,
	{
		preloadedState = {},
		store = configureStore({
			reducer: {
				setsList: setsListReducer, 
				breakTime: timersSliceReducer
			}, 
			preloadedState }),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

