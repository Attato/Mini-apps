import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QuickResponse = () => {   
    
    const [inputValue, setInputValue] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/[ЁёА-я]/, '');
    
        setInputValue(result);
    };

    return (
        <div className="qrcode__wrap">
            <div className="qrcode"><QRCode value={inputValue}></QRCode></div>
            <p>* This generator works with links, symbols and letters of the English alphabet.</p>  
            <input type="text" value={inputValue} placeholder="Enter text or link" onChange={handleChange}/>
        </div>

        
    )
}

export default QuickResponse