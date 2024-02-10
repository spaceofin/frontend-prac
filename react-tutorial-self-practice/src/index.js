import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    render() {
        const a = "hi";
        return (
            <button className="square">
                {a}
            </button>
        );
    }
}

class Board extends React.Component {
    render() {
        const squares = [];
        for (let i = 0; i < 9; i++) {
            squares.push(<Square />)
        }
        return (
            <div className="squares">
                {squares}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);