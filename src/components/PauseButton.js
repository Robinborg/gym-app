import React, { useState, useEffect, useRef } from 'react';

import Timer from './Timer';

const PauseButton = ({ onClickIncrement }) => {

	return (
		<div>
			<Timer onClickIncrement={onClickIncrement}/>
		</div>
	)
};

export default PauseButton;
