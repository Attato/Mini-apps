import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QuickResponse = () => {   

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="qrcode">
            <input type="text" onChange={e => setInputValue(e.target.value)} />
            <QRCode value={inputValue}></QRCode>
        </div>
    )
}

export default QuickResponse