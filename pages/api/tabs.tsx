import React from 'react';
import Head from 'next/head';
import Calculator from "./calculator"
import Stopwatch from "./stopwatch"
import Countdown from "./countdown"
import Password from "./password"
import QuickResponse from './qrcode';

const calculator = (
	<React.Fragment key={Date.now()}>
		<Head>
			<title>Сalculator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="body">
			<Calculator />
		</div>
	</React.Fragment>
);

const timeСounters = (
	<React.Fragment key={Date.now()}>
		<Head>
			<title>Time counters</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="body">
			<Countdown/>
			<Stopwatch/>
		</div>
	</React.Fragment>
);

const passwordGenerator = (
	<React.Fragment key={Date.now()}>
		<Head>
			<title>Password generator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="body">
			<Password/>
		</div>
	</React.Fragment>
);

const QRcodeGenerator = (
	<React.Fragment key={Date.now()}>
		<Head>
			<title>QR-code generator</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="body">
			<QuickResponse/>
		</div>
	</React.Fragment>
);

export const tabs = [
	{ title: 'Сalculator', wrap: [calculator] },
	{ title: 'Time Counters', wrap: [timeСounters] },
	{ title: 'Password generator', wrap: [passwordGenerator] },
	{ title: 'QR-code generator', wrap: [QRcodeGenerator] },
];
