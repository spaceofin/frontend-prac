import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [isButtonOn, setIsButtonOn] = useState(true);

    const handleClick = () => {
        setIsButtonOn(prevState => !prevState);
    }

    return (
        <div>
            <button onClick={handleClick}>
                {isButtonOn ? 'On' : 'Off'}
            </button>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
