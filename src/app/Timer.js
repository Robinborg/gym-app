import React, { useState,  useRef } from 'react';


const Timer = ({ onClickIncrement }) => {
		const [timer, setTimer] = useState(0);
		const [isActive, setIsActive] = useState(false);
		const [isPaused, setIsPaused] = useState(false);
		const countRef = useRef(null);

		const handleStart = () => {
					setIsActive(true);
					setIsPaused(true);
					countRef.current = setInterval(() => {
						setTimer((timer) => timer + 1);
					}, 1000);
				};
		const handlePause = () => {
					clearInterval(countRef.current);
					setIsPaused(false);
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
										onClickIncrement(); 
										handleStart();
									} else {
										console.log("running");
									}
								}
							}>Start Break</button>
						  <button 
								className="timer-buttons pause-button"
							  onClick={handlePause}>Pause Break</button>
						  <button 
								className="timer-buttons reset-button"
							  onClick={handleReset}>Reset timer</button>
				   </div>
				</div>
			);
		};

export default Timer;
