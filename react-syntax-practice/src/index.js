import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const onButtonStyle = {
    padding: '30px 50px',
    margin: '100px',
    backgroundColor: 'SpringGreen',
    fontSize: '50px',
    borderRadius: '20px',
    borderWidth: '10px',
}

const offButtonStyle = {
    padding: '30px 50px',
    margin: '100px',
    backgroundColor: 'LightCoral',
    fontSize: '50px',
    borderRadius: '20px',
    borderWidth: '10px',
}

const OnButton = (props) => <button style={onButtonStyle} onClick={props.onClick}>On</button>;
const OffButton = (props) => <button style={offButtonStyle} onClick={props.onClick}>Off</button>;

function VisibleButton(props) {
    const isButtonOn = props.isButtonOn;
    if (isButtonOn) {
        return <OnButton onClick={props.onClick} />;
    }
    return <OffButton onClick={props.onClick} />;
}


const App = () => {
    const [isButtonOn, setIsButtonOn] = useState(false);

    const handleClick = () => {
        setIsButtonOn(!isButtonOn);
    }

    return (
        <div>
            <VisibleButton isButtonOn={isButtonOn} onClick={handleClick} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);