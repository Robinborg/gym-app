import React from 'react';
import { useForm } from 'react-hook-form';

const ExerciseEntryForm = ({firstExerciseRef,
	secondExerciseRef,
	thirdExerciseRef,
	fourthExerciseRef,
	fifthExerciseRef
}) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
		const onSubmit = data => {
			if (data.firstExercise) {
				firstExerciseRef.current = data.firstExercise;
	   		} 
	   	if (data.secondExercise) {
	   		secondExerciseRef.current = data.secondExercise;
	   		}
	   	if (data.thirdExercise) {
	   		thirdExerciseRef.current = data.thirdExercise;
	   		}
	   	if (data.fourthExercise) {
	   		fourthExerciseRef.current = data.fourthExercise;
	   		}
	   	if (data.fifthExercise) {
	   		fifthExerciseRef.current = data.fifthExercise;
	   	}
		};
		return (
			<div className="justify-middle">
				<div>
					<h1>Enter Names of Exercises</h1>
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
