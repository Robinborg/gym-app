/*
 * MainTimer for the Application. 
 * Set to 60:00 for optimal workout.
 */
import React, { useState, useEffect, useRef } from 'react';

const MainTimer = ({ isActive }) => {

	const [countDown, setCountDown] = useState(3600);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (isActive) {
		intervalRef.current = setInterval(() => {
			setCountDown((t) => t - 1);
		}, 1000);
		return () => clearInterval(intervalRef.current);
		}
	}, [isActive]);

	useEffect(() => {
		if (countDown <= 0) {
			clearInterval(intervalRef);
		}
	}, [countDown]);

	const formatCountdown= () => {
		const getSeconds = `0${(countDown % 60)}`.slice(-2);
		const minutes  = `${Math.floor(countDown / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);
		return `${getMinutes} : ${getSeconds}`;

	};

	return (
		<div className="big-clock">
			<p>{(intervalRef.current) ? formatCountdown() : `60 : 00`}</p>
		</div>
		);	
	
};

export default MainTimer;
