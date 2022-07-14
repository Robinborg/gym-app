/*
 * "Ducks" Structure:
 * Actions, Action Creators and Reducers in one file
 * Controls break time
 */
import { createSlice } from '@reduxjs/toolkit';

const SET_TIMER = 'setTimer';

const initialState = {
	time: '03:00'
}

export const timersSlice = createSlice({
	name: SET_TIMER,
	initialState,
	reducers: {
		defaultBreak: state => {
			return initialState
		},
		mediumBreak: state => {
			state.time = '04:00'
		},
		longBreak: state => {
			state.time = '05:00'
		},
	},
});

export const { defaultBreak, mediumBreak, longBreak } = timersSlice.actions;
export default timersSlice.reducer;
