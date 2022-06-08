import React from 'react';

import MainTimer from './MainTimer';
import Sets from './Sets';
import CurrentSet from './CurrentSet';
import PauseButton from './PauseButton';


const App = () => {
	return (
		<div>
			<MainTimer />
			<Sets />
			<CurrentSet />
			<PauseButton />
		</div>
	);
};

export default App;
