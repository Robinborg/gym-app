import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from './MainTimer';
import Sets from './Sets';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	const { register, handleSubmit, watch, formState: { errors} } = useForm();
	const firstExerciseRef = useRef("First Exercise");
	const secondExerciseRef = useRef("Second Exercise");
	const thirdExerciseRef = useRef("Third Exercise");
	const fourthExerciseRef = useRef("Fourth Exercise");
	const fifthExerciseRef = useRef("Fifth Exercise");

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
				<h1>Enter exercises</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("firstExercise")}/>
				<input {...register("secondExercise")}/>
				<input {...register("thirdExercise")}/>
				<input {...register("fourthExercise")}/>
				<input {...register("fifthExercise")}/>
				<input type="submit"/>
				</form>
			</div>
			<MainTimer isActive={isActive}/>
			<div className="justify-middle">
				<button  
					className="start-button"
					onClick={() => {
						if (!isActive) {
						  setIsActive(!isActive)
						} else {
							console.log("running");
						}
					}}>
			    	Start Session 
			  	</button>
			</div>
			<Sets 
				setOne={firstExerciseRef.current} 
			  setTwo={secondExerciseRef.current}
			  setThree={thirdExerciseRef.current}
				setFour={fourthExerciseRef.current}
				setFive={fifthExerciseRef.current}
						/>
		</div>
	);
};

export default App;
