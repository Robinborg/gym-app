import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addToList, clearList } from '../features/sets/setsListSlice';

const ExerciseEntryForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const dispatch = useDispatch();
	const onSubmit = data => {
		dispatch(clearList());
		if (data.firstExercise) {
			dispatch(addToList(data.firstExercise));
		}
		if (data.secondExercise) {
			dispatch(addToList(data.secondExercise));
		}
		if (data.thirdExercise) {
			dispatch(addToList(data.thirdExercise));
		}
		if (data.fourthExercise) {
			dispatch(addToList(data.fourthdExercise));
		}
		if (data.fifthExercise) {
			dispatch(addToList(data.fifthExercise));
		}
	};
	return (
		<div>
			<div>
				<h1>Enter Exercises:</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
		      <input {...register("firstExercise")}/>
					<input {...register("secondExercise")}/>
					<input {...register("thirdExercise")}/>
					<input {...register("fourthExercise")}/>
					<input {...register("fifthExercise")}/>
					<input className="input-button" type="submit"/>
					</form>
			</div>
		</div>
	);
};
export default ExerciseEntryForm;
