/*
 * "Ducks" Structure:
 * Actions, Action Creators and Reducers in one file
 * Controls exerciseList and Repetitions for each exercise
 */
import { createSlice } from '@reduxjs/toolkit';

const SETS_LIST = 'setsList';

const initialState = {
	exerciseList: [],
	firstRep: 0,
	secondRep: 0,
	thirdRep: 0,
	fourthRep: 0,
	fifthRep: 0,
}

export const setsListSlice = createSlice({
	name: SETS_LIST,
	initialState,
	reducers: {
		addToList: (state, action) => {
			if (state.exerciseList.includes(action.payload)){
				console.log("Already in exerciseList");
			} else {
				state.exerciseList.push(action.payload)
			}
		},
		clearList: state => {
			return initialState.exerciseList;
		},
		incrementDynamic: (state) => {
			if (state.firstRep < 5) {
				state.firstRep++;
			} 
			else if (state.secondRep < 5) {
				state.secondRep++;
			}
			else if (state.thirdRep < 5) {
				state.thirdRep++;
			}
			else if (state.fourthRep < 5) {
				state.fourthRep++;
			}
			else if (state.fifthRep < 5) {
				state.fifthRep++;
			}
		},
	},

});

export const { addToList, clearList, incrementDynamic } = setsListSlice.actions;
export default setsListSlice.reducer;

