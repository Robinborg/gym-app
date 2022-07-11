import { configureStore } from '@reduxjs/toolkit';
import setsListReducer from '../features/sets/setsListSlice';

export default configureStore({
	reducer: {
		setsList: setsListReducer,
	},
});
