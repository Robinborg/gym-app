import { createSlice } from '@reduxjs/toolkit';

const SETS_LIST = 'setsList';

export const setsListSlice = createSlice({
	name: SETS_LIST,
	initialState: {
		sets: [
			"arms",
			"legs"
		],
	},
	reducers: {
		addToList: (state, action) => {
			state.sets.push(action.payload)
		},
	},
});

export const { addToList } = setsListSlice.actions;
export default setsListSlice.reducer;

