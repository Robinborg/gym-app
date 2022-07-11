import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import MainTimer from './MainTimer';
import Sets from '../features/sets/Sets';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="justify-middle">
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
		</div>
	);
};

export default App;
