import { useState, useEffect } from 'react';

const Countdown = () => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	useEffect(() => {
		const target = new Date(2023, 0, 1, 0, 0, 0, 0).getTime(); // 1 Jan 2023, 00:00:00

		const interval = setInterval(() => {
			const now = new Date();
			const remained = target - now.getTime();

			const d = ('0' + Math.floor(remained / (24 * 60 * 60 * 1000))).slice(-3);
			setDays(d);

			const h = ('0' + Math.floor((remained / (60 * 60 * 1000)) % 24)).slice(
				-2
			);
			setHours(h);

			const m = ('0' + Math.floor((remained / (60 * 1000)) % 60)).slice(-2);
			setMinutes(m);

			const s = ('0' + Math.floor((remained / 1000) % 60)).slice(-2);
			setSeconds(s);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="countdown">
			<h3>Time left until the new year</h3>
			<div className="time">
				<div className="caption">
					<h1>{days}</h1>
					<p>days</p>
				</div>
				<div className="caption">
					<h1>{hours}</h1>
					<p>hours</p>
				</div>
				<div className="caption">
					<h1>{minutes}</h1>
					<p>minutes</p>
				</div>
				<div className="caption">
					<h1>{seconds}</h1>
					<p>seconds</p>
				</div>
			</div>
		</div>
	);
};

export default Countdown;

