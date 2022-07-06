import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from './MainTimer';
import Sets from './Sets';
import ExerciseEntryForm from './ExerciseEntryForm';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	const [showForm, setShowForm] = useState(true);


	const firstExerciseRef = useRef("First Exercise");
	const secondExerciseRef = useRef("Second Exercise");
	const thirdExerciseRef = useRef("Third Exercise");
	const fourthExerciseRef = useRef("Fourth Exercise");
	const fifthExerciseRef = useRef("Fifth Exercise");

	useEffect(() => {
	}, [firstExerciseRef])

	return (
		<div className="justify-middle">
			{ showForm ? <ExerciseEntryForm 
				firstExerciseRef={ firstExerciseRef }
				secondExerciseRef={ secondExerciseRef }
				thirdExerciseRef={ thirdExerciseRef }
				fourthExerciseRef={ fourthExerciseRef }
				fifthExerciseRef={ fifthExerciseRef }
			/> : null }
			<MainTimer isActive={isActive}/>
			<div>
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
