import React from 'react';
import Head from 'next/head';
import Calculator from "./calculator"
import Stopwatch from "./stopwatch"
import Countdown from "./countdown"
import Password from "./password"
import QuickResponse from './qrcode';

const calculator = (
	<>
		<Head>
			<title>Сalculator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<h1>Calculator</h1>
		<div className="body" key={Date.now()}>
			<Calculator />
		</div>
	</>
);

const stopwatch = (
	<>
		<Head>
			<title>Stopwatch</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<h1>Stopwatch</h1>
		<div className="body" key={Date.now()}>
			<Stopwatch/>
		</div>
	</>
);

const countdown = (
	<>
		<Head>
			<title>Countdown</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<h1>New Year Countdown</h1>
		<div className="body" key={Date.now()}>
			<Countdown/>
		</div>
	</>
);

const passwordGenerator = (
	<>
		<Head>
			<title>Password generator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<h1>Password generator</h1>
		<div className="body" key={Date.now()}>
			<Password/>
		</div>
	</>
);

const QRcodeGenerator = (
	<>
		<Head>
			<title>QR-code generator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<h1>QR-code generator</h1>
		<div className="body" key={Date.now()}>
			<QuickResponse/>
		</div>
	</>
);

export const tabs = [
	{ title: 'Сalculator', wrap: [calculator] },
	{ title: 'Stopwatch', wrap: [stopwatch] },
	{ title: 'Countdown', wrap: [countdown] },
	{ title: 'Password generator', wrap: [passwordGenerator] },
	{ title: 'QR-code generator', wrap: [QRcodeGenerator] },
];
