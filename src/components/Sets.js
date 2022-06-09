import React, { useState } from 'react';
import CurrentSet from './CurrentSet';

const Sets = () => {
	return (
		<div>
			<ul>
				<li>Set 1</li>
				<li>Set 2</li>
				<li>Set 3</li>
				<li>Set 4</li>
				<li>Set 5</li>
			</ul>
			<div>
				<CurrentSet />
			</div>
		</div>
	);
};

export default Sets;
