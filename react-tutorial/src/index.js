import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

const history = [
    // 첫 동작이 발생하기 전
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    // 첫 동작이 발생한 이후
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    // 두 번째 동작이 발생한 이후
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //3
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //4
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //5
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //6
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //7
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //8
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    //9
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
]

class Board extends React.Component {
    constructor(props) {
        super(props);
        //const initialSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.state = {
            squares: Array(9).fill(null),
            //squares: initialSquares,
            xIsNext: true,
            history: history,
            n: 0,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        history[this.state.n].squares = squares.slice();

        this.setState({
            squares: squares,
            history: history,
            xIsNext: !this.state.xIsNext,
            n: this.state.n + 1,
        });

        console.log(this.state.history);
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}