import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from './MainTimer';
import Sets from './Sets';
import ExerciseEntryForm from './ExerciseEntryForm';
import './style.css';

const App = () => {
	// Timer On or Off
	const [isActive, setIsActive] = useState(false);
	// Show Form or Hide Form
	const [showForm, setShowForm] = useState(true);
	// Reference Exercises
	const firstExerciseRef = useRef("Enter Exercise");
	const secondExerciseRef = useRef("Enter Exercise");
	const thirdExerciseRef = useRef("Enter Exercise")
	const fourthExerciseRef = useRef("Enter Exercise");
	const fifthExerciseRef = useRef("Enter Exercise");

	return (
		<div className="flexbox-container">
			{ showForm ? <ExerciseEntryForm 
				firstExerciseRef={ firstExerciseRef }
				secondExerciseRef={ secondExerciseRef }
				thirdExerciseRef={ thirdExerciseRef }
				fourthExerciseRef={ fourthExerciseRef }
				fifthExerciseRef={ fifthExerciseRef }
			/> : null }
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
