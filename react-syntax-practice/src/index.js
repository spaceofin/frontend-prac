import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const btnMargin = {
    margin: '5px',
}
const lastClickedButtonInfo = {
    marginLeft: '10px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'navy',
}

const App = () => {
    const [buttonId, setButtonId] = useState('No button clicked');
    const [count, setIsCount] = useState(1);

    const handleClick = (buttonId, event) => {
        setButtonId(buttonId);
        setIsCount(count + 1);
        console.log(`event.target: ${event.target} event.target.tagName: ${event.target.tagName}`);
    }

    return (
        <div>
            <button style={btnMargin} onClick={(event) => handleClick('A', event)}>button A</button>
            <button style={btnMargin} onClick={(event) => handleClick('B', event)}>button B</button>
            <button style={btnMargin} onClick={(event) => handleClick('C', event)}>button C</button>
            <p style={lastClickedButtonInfo}>Last Clicked button: {buttonId}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);