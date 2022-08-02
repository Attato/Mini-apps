import React, { useState, useEffect } from 'react';

const Stopwatch = () => {

	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {

		let interval;
        
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);

	return (
		<div className="stopwatch">
            <div className="time">
                <h1>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</h1>
                <h1 id="ms">{('0' + ((time / 10) % 100)).slice(-2)}</h1>
            </div>
           
			<div className="buttons">
				<button onClick={() => setRunning(true)}>Start</button>
				<button onClick={() => setRunning(false)}>Stop</button>
				<button onClick={() => setTime(0)}>Reset</button>
			</div>
		</div>
	);
};

export default Stopwatch;
