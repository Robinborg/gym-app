import { configureStore } from '@reduxjs/toolkit';
import setsListReducer from '../features/setsList/setsListSlice';

export default configureStore({
	reducer: {
		setsList: setsListReducer,
	},
});
