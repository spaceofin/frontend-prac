import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = (operation) => {
        if (operation === 'decrease') {
            setCount(count - 1);
        } else if (operation === 'increase') {
            setCount(count + 1);
        }
    };

    return (
        <div className="container">
            <span className="span-title">Counter App</span>
            <div className="control-buttons">
                <button id="decrease-btn" onClick={() => handleButtonClick('decrease')}>&minus;</button>
                <span>{count}</span>
                <button id="increase-btn" onClick={() => handleButtonClick('increase')}>+</button>
            </div>
        </div >
    );
}

const App = () => {
    return (
        <div>
            <Counter />
        </div >
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
