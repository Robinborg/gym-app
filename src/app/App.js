import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from '../features/timers/MainTimer';
import Timer from '../features/timers/Timer';
import Sets from '../features/sets/Sets';
import CurrentSet from '../features/sets/CurrentSet';
import ExerciseEntryForm from './ExerciseEntryForm';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="justify-middle">
			{!isActive && <ExerciseEntryForm />}
			<MainTimer isActive={isActive}/>
			<div>
				<button  
					className="start-button"
					onClick={() => {
						if (!isActive) {
						  setIsActive(!isActive);
						} else {
							console.log("Timer is running already");
						}
					}}>
			    	Start Session 
			  	</button>
			</div>
			<Sets />
			<CurrentSet />
			<Timer />
		</div>
	);
};

export default App;
