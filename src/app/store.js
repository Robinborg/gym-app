/*
 * Configure the store for redux
 */
import { configureStore } from '@reduxjs/toolkit';
import setsListReducer from '../features/sets/setsListSlice';
import timersSliceReducer from '../features/timers/timersSlice';

export default configureStore({
	reducer: {
		setsList: setsListReducer,
		breakTime: timersSliceReducer,
	},
});
