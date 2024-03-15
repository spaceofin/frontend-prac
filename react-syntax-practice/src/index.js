
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

const App = () => {
    return (
        <div>
            <ColorPanel />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)