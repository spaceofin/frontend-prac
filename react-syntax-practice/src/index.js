import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
    const [inputValue, setInputValue] = useState('hi');
    const [isDisabled, setIsDisabled] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [showInputValue, setShowInputValue] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            setInputValue('');
            setIsDisabled(false);
            setShowButton(true);
        }, 2000);
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setShowInputValue(true);
    }

    const handleFocus = () => {
        setShowInputValue(false);
    }

    return (
        <div>
            <input
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                disabled={isDisabled} />
            {showButton && <button onClick={handleClick}>Enter</button>}
            <br />
            {showInputValue && inputValue}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)