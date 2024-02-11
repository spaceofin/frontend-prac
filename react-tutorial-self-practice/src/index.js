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
    constructor(props) {
        super(props);
        this.state = {
            isX: true,
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        //console.log(this.state.isX ? 'X' : 'O');
        const squares = this.state.squares.slice();
        squares[i] = (this.state.isX ? 'X' : 'O');
        this.setState({
            isX: !this.state.isX,
            squares: squares,
        })
    }

    render() {
        const squares = this.state.squares.slice();
        for (let i = 0; i < 9; i++) {
            squares[i] =
                <Square
                    key={i}
                    isX={this.state.isX}
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />
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