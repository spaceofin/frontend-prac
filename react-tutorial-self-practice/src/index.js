import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="squares">
                {this.props.squares.map((value, i) => (
                    <Square
                        key={i}
                        value={value}
                        onClick={() => this.props.onClick(i)}
                    />
                ))}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currentSquares = history[this.state.stepNumber].squares.slice();
        if (calculateWinner(currentSquares)) {
            return;
        }
        currentSquares[i] = (this.state.xIsNext ? 'X' : 'O');

        this.setState({
            history: history.concat({
                squares: currentSquares,
            }),
            stepNumber: this.state.stepNumber + 1,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            history: this.state.history.slice(0, step + 1),
        });
    }

    render() {
        const history = this.state.history.slice();
        const currentSquares = history[this.state.stepNumber].squares;
        const winner = calculateWinner(currentSquares)

        const stepsButton = history.map((step, index) => {
            const buttonText = index ? 'Go to step ' + index : 'Go to Game Start';
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{buttonText}</button>
                </li>
            );
        });

        let status = null;
        let words = null;
        if (winner) {
            words = "The Game is over";
            status = "The Winner is " + winner;
        } else {
            status = "Next Player is " + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game-screen">
                <div>
                    <Board
                        squares={currentSquares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="game-step-buttons">
                        {stepsButton}
                    </div>
                    <div>
                        {words}
                        {words ? <br /> : null}
                        {status}
                    </div>
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
        [0, 4, 8], [2, 4, 6], // diagonal
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);