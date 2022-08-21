import { useState } from 'react';
import Image from 'next/image';

const Checkbox = (props) => {
	const { value, onChange } = props;

	return (
		<div className="toggle">
			<input
				id="input"
				checked={value}
				onChange={onChange}
				type="checkbox"
				name="Dark mode"
				role="switch"
				value="on"
			></input>
			<label htmlFor="input" className="sr">
				Dark Mode
			</label>
		</div>
	);
};

const Password = () => {
	const [password, setPassword] = useState({
		length: 10,
		uppercase: false,
		lowercase: true,
		numbers: true,
		symbols: true,
	});

	const [handleText, setHandleText] = useState('');

	const [buttonName, setButtonName] = useState('copy');
	const handleChangeUppercase = () => {
		setPassword({
			...password,
			uppercase: !password.uppercase,
		});
	};

	const handleChangeLowercase = () => {
		setPassword({
			...password,
			lowercase: !password.lowercase,
		});
	};

	const handleChangeNumbers = () => {
		setPassword({
			...password,
			numbers: !password.numbers,
		});
	};

	const handleChangeSymbols = () => {
		setPassword({
			...password,
			symbols: !password.symbols,
		});
	};

	const setPasswordLength = (val) => {
		setPassword({
			...password,
			length: val,
		});
	};

	function generatePassword() {
		const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

		const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
		const lowerCaseLetters = characterCodes.map((code) =>
			String.fromCharCode(code)
		);
		const upperCaseLetters = lowerCaseLetters.map((letter) =>
			letter.toUpperCase()
		);

		const { length, uppercase, lowercase, numbers, symbols } = password;

		const generateTheWord = (
			length,
			uppercase,
			lowercase,
			numbers,
			symbols
		) => {
			const availableCharacters = [
				...(lowercase ? lowerCaseLetters : []),
				...(uppercase ? upperCaseLetters : []),
				...(numbers ? numbersArray : []),
				...(symbols ? symbolsArray : []),
			];
			const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
			const characters = shuffleArray(availableCharacters).slice(0, length);
			setHandleText(characters.join(''));
			return characters;
		};

		generateTheWord(length, uppercase, lowercase, numbers, symbols);
	}

	return (
		<div className="password">
			<div className="password__area">
				<input
					type="text"
					value={handleText}
					placeholder={
						!password.lowercase &&
						!password.uppercase &&
						!password.numbers &&
						!password.symbols
							? 'Nothing selected'
							: 'Empty'
					}
					autoComplete="off"
					readOnly
					onChange={(e) => setHandleText(e.target.value)}
				/>
				<div
					className={buttonName}
					onClick={() => {
						if (handleText.length > 0) {
							navigator.clipboard.writeText(handleText);
						}

						if (handleText === '') {
							setButtonName('copy error');
							setTimeout(() => {
								setButtonName('copy');
							}, 3000);
							return () => {
								clearTimeout();
							};
						} else {
							setButtonName('copy complete');
							setTimeout(() => {
								setButtonName('copy');
							}, 3000);
							return () => {
								clearTimeout();
							};
						}
					}}
				>
					<Image src="/copy.svg" alt="" width={15} height={15} />
				</div>
			</div>

			<div className="settings">
				<div className="flex__row">
					<span>Include uppercase letters</span>
					<Checkbox
						value={password.uppercase}
						onChange={handleChangeUppercase}
					/>
				</div>

				<div className="flex__row">
					<span>Include lowercase letters</span>
					<Checkbox
						value={password.lowercase}
						onChange={handleChangeLowercase}
					/>
				</div>

				<div className="flex__row">
					<span>Include numbers</span>
					<Checkbox value={password.numbers} onChange={handleChangeNumbers} />
				</div>

				<div className="flex__row">
					<span>Include symbols</span>
					<Checkbox value={password.symbols} onChange={handleChangeSymbols} />
				</div>

				<div className="flex__row">
					<span>Password length: {password.length}</span>
					<input
						type="range"
						min="4"
						max="20"
						value={password.length}
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
				</div>
			</div>

			<button className="generate" onClick={generatePassword}>
				Generate password
			</button>
		</div>
	);
};

export default Password;
