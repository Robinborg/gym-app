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
		<div className="justify-middle adjust-to-screen medium-screen tiny screen">
			{!isActive && 
			<div>
				<h2>Select Rest Time</h2>
			<div className={"timer-box"}>
				<button 
					className={"time-timer-buttons"}
					onClick={() => dispatch(defaultBreak())}> 
					03:00
				</button>
				<button 
					className={"time-timer-buttons"}
					onClick={() => dispatch(mediumBreak())}>
					04:00
				</button>
				<button 
					className={"time-timer-buttons"}
					onClick={() => dispatch(longBreak())}>
					05:00
				</button>
			</div>
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
