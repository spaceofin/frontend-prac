
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

function ColorBox(props) {
    return (
        <div className={'colorbox-' + props.color}>
            {props.children}
        </div>
    );
}

function ColorPanel(props) {
    return (
        <div className="color-panel">
            <ColorBox color="orange">
                <p>Orange</p>
            </ColorBox>
            <ColorBox color="blue">
                <p>Blue</p>
            </ColorBox>
        </div>
    );
}

function Description(props) {
    return (
        <p style={{ margin: 0 }}>
            This page is a color panel page displaying a few sample colors.
        </p>
    )
}

function SplitPane(props) {
    return (
        <div className="splitpane">
            <div className="splitpane-left">
                {props.left}
            </div>
            <div className="splitpane-right">
                {props.right}
            </div>
        </div>
    );
}



function Dialog(props) {
    return (
        <div className="dialog">
            <ColorBox color="lightgreen">
                <h1 className="dialog-title">
                    {props.title}
                </h1>
                <p className="dialog-message">
                    {props.message}
                </p>
                {props.children}
            </ColorBox>
        </div>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our space!" />
    );
}

function SignUpDialog(props) {
    const [login, setLogin] = useState('');

    const handleChange = (event) => {
        setLogin(event.target.value);
    }

    const handleSignUp = () => {
        alert(`Welcome aboard, ${login}!`);
        setLogin('');
    }

    return (
        <Dialog title="Join Membership"
            message="How should we refer to you?">
            <div className="signup-input">
                <input
                    value={login}
                    onChange={handleChange} />
                <button onClick={handleSignUp}>
                    Sign Me Up!
                </button>
            </div>
        </Dialog>
    );
}

const App = () => {
    return (
        <div>
            <WelcomeDialog />
            <SignUpDialog />
            <SplitPane
                left={
                    <ColorPanel />
                }
                right={
                    <Description />
                }
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)