/*
 * Combine all of the components
 */
import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';

import { defaultBreak, mediumBreak, longBreak } from '../features/timers/timersSlice';

import MainTimer from '../features/timers/MainTimer';
import Timer from '../features/timers/Timer';
import Sets from '../features/sets/Sets';
import ExerciseEntryForm from './ExerciseEntryForm';

import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	const dispatch = useDispatch()

	return (
		<div className="justify-middle">
			{!isActive && 
			<div>
				<button onClick={() => dispatch(defaultBreak())}> 
					03:00
				</button>
				<button onClick={() => dispatch(mediumBreak())}>
					04:00
				</button>
				<button onClick={() => dispatch(longBreak())}>
					05:00
				</button>
			</div>
			}
			{!isActive && <ExerciseEntryForm />}
			<MainTimer isActive={isActive}/>
			<div>
				{!isActive && <button  
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
				}
			</div>
			<Sets />
			<Timer />
		</div>
	);
};

export default App;
