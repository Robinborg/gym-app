import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from './MainTimer';
import Sets from './Sets';
import ExerciseEntryForm from './ExerciseEntryForm';
import './style.css';

const App = () => {
	// Timer On or Off
	const [isActive, setIsActive] = useState(false);
	// react-hook-form
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState(["first exercise",
	                                  "second exercise",
	  																"third exercise",
																		"fourth exercise",
																		"fifth exercise"]);
	// Show Form or Hide Form
	const [showForm, setShowForm] = useState(true);

	return (
		<div className="flexbox-container">
			<div>
				<h1>Enter names of Exercises</h1>
				<form onSubmit={handleSubmit(data => 
					setData(JSON.stringify(data)))}>
					<input {...register("first exercise") }/>
					<input {...register("second exercise") }/>
					<input {...register("third exercise") }/>
					<input {...register("fourth exercise") }/>
					<input {...register("fifth exercise") }/>
					<input className="input-button" type="submit"/>
				</form>
			</div>
			<div>
				{console.log(data)}
			</div>
			<MainTimer isActive={ isActive }/>
			<div className="justify-middle">
				<button  
					className="start-button"
					onClick={() => {
						if (!isActive) {
						  setIsActive(!isActive);
							setShowForm(!showForm);
						} else {
							console.log("Timer is running already");
						}
					}}>
			    	Start Session 
			  	</button>
			</div>
			<Sets 
			  sets={data} 
			/>
		</div>
	);
};

export default App;
