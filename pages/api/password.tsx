import { useState } from 'react';
import Image from 'next/image';

const Checkbox = (props) => {
	const { value, onChange } = props;

	return (
		<div>
			<input type="checkbox" checked={value} onChange={onChange} />
		</div>
	);
};

const Password = () => {
	const [password, setPassword] = useState({
		length: 5,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false,
	});
	const [handelText, setHandelText] = useState('');
	const [copied, setCopied] = useState(false);

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
			setHandelText(characters.join(''));
			return characters;
		};

		generateTheWord(length, uppercase, lowercase, numbers, symbols);
	}

	return (
		<div className="password">
			<div className="password__area">
				<input
					type="text"
					value={handelText}
					placeholder="Empty"
					autoComplete="off"
                    readOnly
					onChange={(e) => setHandelText(e.target.value)}
				/>
				<button
					className="copy"
					onClick={() => {
						if (handelText.length > 0) {
							navigator.clipboard.writeText(handelText);
							setCopied(true);
							setInterval(() => {
								setCopied(false);
							}, 2000);
						}
					}}
				>
					{copied ? (
						<Image src="/checkmark.svg" alt="" width={15} height={15} />
					) : (
						<Image src="/copy.svg" alt="" width={15} height={15} />
					)}
				</button>
			</div>
            
            <div className="settings">

                <div className="flex__row">
                    <span>Password length</span>
                    <input
                        type="number"
                        min="4"
                        max="20"
                        value={password.length}
                        onChange={(e) => setPasswordLength(e.target.value)}
                    />
                </div>

                <div className="flex__row">
                    <span>Include uppercase letters</span>
                    <Checkbox value={password.uppercase} onChange={handleChangeUppercase} />
                </div>

                <div className="flex__row">
                    <span>Include lowercase letters</span>
                    <Checkbox value={password.lowercase} onChange={handleChangeLowercase} />
                </div>

                <div className="flex__row">
                    <span>Include numbers</span>
                    <Checkbox value={password.numbers} onChange={handleChangeNumbers} />
                </div>

                <div className="flex__row">
                    <span>Include symbols</span>
                    <Checkbox value={password.symbols} onChange={handleChangeSymbols} />
                </div>
            </div>

			<button className="generate" onClick={generatePassword}>Generate password</button>
		</div>
	);
};

export default Password;
