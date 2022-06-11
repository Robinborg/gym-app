import React, { useState, useEffect, useRef } from 'react';

const MainTimer = ({isActive}) => {

	const [countDown, setCountDown] = useState(3600);
	const intervalRef = useRef(null);

	console.log(isActive);
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
		<div>
			<p>{(intervalRef.current) ? formatCountdown() : `60 : 00`}</p>
		</div>
		);	
	
};

export default MainTimer;
