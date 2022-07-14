/*
 * Timer component for starting, pausing and resetting user's workout
 * break.
 * Increments the exercise list.
 */

import React, { useState,  useRef } from 'react';
import { incrementDynamic } from '../sets/setsListSlice';
import { useDispatch } from 'react-redux';


const Timer = () => {
		const [timer, setTimer] = useState(0);
		const [isActive, setIsActive] = useState(false);
		const [isPaused, setIsPaused] = useState(false);
		const countRef = useRef(null);
	  const dispatch = useDispatch();

		const handleStart = () => {
					setIsActive(true);
					setIsPaused(true);
			    dispatch(incrementDynamic());
					countRef.current = setInterval(() => {
						setTimer((timer) => timer + 1);
					}, 1000);
				};
		const handleReset = () => {
					clearInterval(countRef.current);
					setIsActive(false);
		      setIsPaused(false);
					setTimer(0);
				};
		const formatTimer = () => {
			const getSeconds = `0${(timer % 60)}`.slice(-2);
			const minutes = `${Math.floor(timer / 60)}`;
		 	const getMinutes = `0${minutes % 60}`.slice(-2);
			if (getMinutes === '03' && getSeconds === '01') {
				clearInterval(countRef.current);
				setIsActive(false);
				setIsPaused(false);
				setTimer(0);
			}
			return `${getMinutes}:${getSeconds}`;
		};
	   return (
				  <div>
						<p>Rest Time: 03:00 / {formatTimer()}</p>
						<div className="box-buttons">
							<button 
								className="timer-buttons start-button"
							  onClick={() => {
							    if (!isActive) {
										handleStart();
									} else {
										console.log("running");
									}
								}
							}>
							Start
							</button>
						  <button 
								className="timer-buttons stop-button"
							  onClick={handleReset}>
								Stop
							</button>
				   </div>
				</div>
			);
		};

export default Timer;
