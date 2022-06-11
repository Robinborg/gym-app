import React, { useState } from 'react';

import MainTimer from './MainTimer';
import Sets from './Sets';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div>
			<div>
				<button onClick={() => setIsActive(!isActive)}>
			    	Start exercise
			  	</button>
			</div>
			<MainTimer 
				isActive={isActive}
			/>
			<Sets 
				setOne={"Shoulder press"} 
			  setTwo={"Shoulder Flys"}
			  setThree={"Biceps with Rope"}
				setFour={"Biceps single hand"}
				setFive={"Ab crunches"}
						/>
		</div>
	);
};

export default App;
