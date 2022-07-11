import { createSlice } from '@reduxjs/toolkit';

const SETS_LIST = 'setsList';

const initialState = []

export const setsListSlice = createSlice({
	name: SETS_LIST,
	initialState,
	reducers: {
		addToList: (state, action) => {
			state.push(action.payload)
		},
		clearList: state => {
			return initialState
		},
	},
});

export const { addToList, clearList, incrementCounter } = setsListSlice.actions;
export default setsListSlice.reducer;

