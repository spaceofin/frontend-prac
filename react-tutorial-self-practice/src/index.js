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

// class Board extends React.Component {
//     render() {
//         const squares = Array(9).fill(null);
//         for (let i = 0; i < 9; i++) {
//             squares[i] =
//                 <Square
//                     value={this.props.squares[i]}
//                     onClick={() => this.props.onClick(i)}
//                 />
//         }
//         return (
//             <div className="squares">
//                 {squares}
//             </div>
//         )
//     }
// }

class Board extends React.Component {
    render() {
        return (
            <div className="squares">
                {this.props.squares.map((value, i) => (
                    <Square
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
            squares: Array(9).fill(null),
            isX: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares)) {
            return;
        }
        squares[i] = (this.state.isX ? 'X' : 'O');
        this.setState({
            isX: !this.state.isX,
            squares: squares,

        })
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        let status = null;
        if (winner) {
            status = "The Winner is " + winner;
        }

        return (
            <div className="game-screen">
                <Board
                    squares={this.state.squares}
                    onClick={(i) => this.handleClick(i)}
                />
                <div>
                    {status ? (
                        <div>
                            The Game is over. <br />
                            {status}
                        </div>
                    ) : null}
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