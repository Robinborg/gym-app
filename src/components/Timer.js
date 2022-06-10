import React, { useState, useEffect, useRef } from 'react';


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
			if (getMinutes === '02' && getSeconds === '01') {
				clearInterval(countRef.current);
				setIsActive(false);
				setIsPaused(false);
				setTimer(0);
			}
			return `${getMinutes} : ${getSeconds}`;
		};
	   return (
				<div>
					<h1>Timer</h1>
				  <div>
				  	<p>{formatTimer()}</p>
						<div>
							<button onClick={() => {onClickIncrement(); handleStart()}}>Start</button>
						  <button onClick={handlePause}>Pause</button>
						  <button onClick={handleReset}>Reset</button>
				   </div>
				  </div>
				</div>
			);
		};

export default Timer;
