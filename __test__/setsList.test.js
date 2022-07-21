

import reducer, { addToList} from '.././src/features/sets/setsListSlice';

test("should return intial state", () => {
	expect(reducer(undefined, {type: undefined })).toEqual({
		"exerciseList": [], "fifthRep": 0, "firstRep": 0, "fourthRep": 0,
		"secondRep": 0, "thirdRep": 0})
})
