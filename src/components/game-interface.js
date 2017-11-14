import React from 'react';

import Feedback from './feedback';

export default function GameInterface(props) {
		return (
			<div className="game-interface">
				<h2>Hot || Cold</h2>
				<Feedback />
			</div>
		)
}