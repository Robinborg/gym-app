import React from 'react';

import MainTimer from './MainTimer';
import Sets from './Sets';
import CurrentSet from './CurrentSet';


const App = () => {
	return (
		<div>
			<MainTimer />
			<Sets />
			<CurrentSet />
		</div>
	);
};

export default App;
