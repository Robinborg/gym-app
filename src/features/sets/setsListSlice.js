import { createSlice } from '@reduxjs/toolkit';

const SETS_LIST = 'setsList';

export const setsListSlice = createSlice({
	name: SETS_LIST,
	initialState: {
		sets: [
			"Bench Press",
			"Cable Fly",
			"Barbell Bench Press",
			"Dip",
			"Decline Press",
		],
	},
	reducers: {
		addToList: (state, action) => {
			state.sets.push(action.payload)
		},
		clearList: state => {
			state.sets = []
		},
	},
});

export const { addToList, clearList } = setsListSlice.actions;
export default setsListSlice.reducer;

