// import React, { useState } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const handleButtonClick = (operation) => {
//         if (operation === 'decrease') {
//             setCount(count - 1);
//         } else if (operation === 'increase') {
//             setCount(count + 1);
//         }
//     };

//     return (
//         <div className="container">
//             <span className="span-title">Counter App</span>
//             <div className="control-buttons">
//                 <button id="decrease-btn" onClick={() => handleButtonClick('decrease')}>&minus;</button>
//                 <span>{count}</span>
//                 <button id="increase-btn" onClick={() => handleButtonClick('increase')}>+</button>
//             </div>
//         </div >
//     );
// }

// const App = () => {
//     return (
//         <div>
//             <Counter />
//         </div >
//     );
// }

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleButtonClick(operation) {
        if (operation === 'decrease') {
            // this.setState({ count: this.state.count - 1, });
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        } else if (operation === 'increase') {
            // this.setState({ count: this.state.count + 1, });
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }
    };

    render() {
        return (
            <div className="container">
                <span className="span-title">Counter App</span>
                <div className="control-buttons">
                    <button id="decrease-btn" onClick={() => this.handleButtonClick('decrease')}>&minus;</button>
                    <span>{this.state.count}</span>
                    <button id="increase-btn" onClick={() => this.handleButtonClick('increase')}>+</button>
                </div>
            </div >
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
