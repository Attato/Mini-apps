import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QuickResponse = () => {   

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="qrcode__wrap">
            <div className="qrcode"><QRCode value={inputValue}></QRCode></div>        
            <input type="text" placeholder="Enter text or link" onChange={e => setInputValue(e.target.value)} />
        </div>
    )
}

export default QuickResponse