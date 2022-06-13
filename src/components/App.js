import React, { useState } from 'react';

import MainTimer from './MainTimer';
import Sets from './Sets';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="justify-middle">
			<MainTimer isActive={isActive}/>
			<div className="justify-middle">
				<button  
					className="start-button"
					onClick={() => setIsActive(!isActive)}>
			    	Start Session 
			  	</button>
			</div>
			<Sets 
				setOne={"Exercise"} 
			  setTwo={"Exercise"}
			  setThree={"Exercise"}
				setFour={"Exercise"}
				setFive={"Exercise"}
						/>
		</div>
	);
};

export default App;
