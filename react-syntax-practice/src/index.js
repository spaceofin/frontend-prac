import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

const buttonOff = {
    margin: '100px',
    fontSize: '50px',
    fontWeight: 'bold',
}

const buttonOffNotification = {
    display: 'inline-block',
    margin: '100px',
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'Segoe UI',
    color: 'red',
}

const OnButton = (props) => <button style={onButtonStyle} onClick={props.onClick}>On</button>;
const OffButton = (props) => <button style={offButtonStyle} onClick={props.onClick}>Off</button>;


function ButtonOffNotification(props) {
    if (!props.isButtonOn) {
        return <span style={buttonOffNotification}>! Button is Off !</span>
    } else {
        return null;
    }
}


const App = () => {
    const [isButtonOn, setIsButtonOn] = useState(false);

    const handleClick = () => {
        setIsButtonOn(!isButtonOn);
    }

    let button;
    if (isButtonOn) {
        button = <OnButton onClick={handleClick} />;
    } else {
        button = <OffButton onClick={handleClick} />;
    }
    return (
        <div>
            {button}<br />
            {isButtonOn && button}<br />
            {isButtonOn ? button : <p style={buttonOff}>ButtonOff</p>}
            <ButtonOffNotification isButtonOn={isButtonOn} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);