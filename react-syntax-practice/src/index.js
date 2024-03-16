
import React from "react";
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



const App = () => {
    return (
        <div>
            <WelcomeDialog />
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