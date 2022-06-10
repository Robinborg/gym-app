import React from 'react';

import MainTimer from './MainTimer';
import Sets from './Sets';


const App = () => {
	return (
		<div>
			<MainTimer />
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
