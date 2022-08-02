import React from 'react';
import Head from 'next/head';
import Calculator from "./calculator"
import Stopwatch from "./stopwatch"

const calculator = (
	<div className="body" key={Date.now()}>
            <Head>
				<title>Сalculator</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

		<h1>Calculator</h1>

		<div className="calculator">
			<Calculator />
		</div>
	</div>
);

const stopwatch = (
	<div className="body" key={Date.now()}>
        <Head>
            <title>Stopwatch</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
		<h1>Stopwatch</h1>
		<Stopwatch/>
	</div>
);

const countdown = (
	<div className="body" key={Date.now()}>
        <Head>
            <title>Countdown</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
		<h1>Countdown</h1>
	</div>
);

const passwordGenerator = (
	<div className="body" key={Date.now()}>
        <Head>
            <title>Password generator</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
		<h1>Password generator</h1>
	</div>
);

const QRcodeGenerator = (
	<div className="body" key={Date.now()}>
        <Head>
            <title>QR-code generator</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
		<h1>QR-code generator</h1>
	</div>
);

export const tabs = [
	{ title: 'Сalculator', wrap: [calculator] },
	{ title: 'Stopwatch', wrap: [stopwatch] },
	{ title: 'Countdown', wrap: [countdown] },
	{ title: 'Password generator', wrap: [passwordGenerator] },
	{ title: 'QR-code generator', wrap: [QRcodeGenerator] },
];
