
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
        <div>
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
        <p>
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

const App = () => {
    return (
        <div>
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