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
			state.exerciseList.push(action.payload)
		},
		clearList: state => {
			return initialState.exerciseList;
		},
		incrementFirstRep: (state) => {
			state.firstRep++;
		},
		incrementSecondRep: (state) => {
			state.secondRep++;
		},
		incrementThirdRep: (state) => {
			state.thirdRep++;
		},
		incrementFourthRep: (state) => {
			state.fourthRep++;
		},
		incrementFifthRep: (state) => {
			state.fifthRep++;
		},
	},
});

export const { addToList, clearList, incrementFirstRep,
               incrementSecondRep, incrementThirdRep, 
               incrementFourthRep, incrementFifthRep } = setsListSlice.actions;
export default setsListSlice.reducer;

