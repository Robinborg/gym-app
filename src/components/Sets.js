import React, { useState } from 'react';
import CurrentSet from './CurrentSet';

const Sets = props => {
	const [currentSet, setCurrentSet] = useState(1);

	return (
		<div>
			<ul>
				<li>
					Set 1
				</li>
				<li>
					Set 2
				</li>
				<li>
					Set 3
				</li>
				<li>
					Set 4
				</li>
				<li>
					Set 5
				</li>
			</ul>
			<CurrentSet updateSet={ setCurrentSet } currentSet={ currentSet } />
		</div>
	);
};

export default Sets;
