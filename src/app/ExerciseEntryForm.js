/*
 * react-hook-form to get User input for their exercise list
 * dispatch the information to the store
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addToList } from '../features/sets/setsListSlice';

const ExerciseEntryForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const dispatch = useDispatch();
	const onSubmit = data => {
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
			dispatch(addToList(data.fourthExercise));
		}
		if (data.fifthExercise) {
			dispatch(addToList(data.fifthExercise));
		}
	};
	return (
		<div>
			<div>
				<h2>Enter Exercises:</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
		      <input 
						aria-label="first exercise"
					  {...register("firstExercise")}/>
					<input 
						aria-label="second exercise"
					  {...register("secondExercise")}/>
					<input 
						aria-label="third exercise"
					  {...register("thirdExercise")}/>
					<input 
						aria-label="fourth exercise"
					{...register("fourthExercise")}/>
					<input 
						aria-label="fifth exercise"
					{...register("fifthExercise")}/>
					<input className="input-button" type="submit"/>
					{errors && <p>{errors.message}</p>}
					</form>
			</div>
		</div>
	);
};
export default ExerciseEntryForm;
