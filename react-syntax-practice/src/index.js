import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class CountNumber extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             i: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.i} times`;
//     }
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.i} times`;
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.setState({
//                     i: this.state.i + 1
//                 })}>
//                     클릭하세요
//                 </button>
//                 <div>클릭 수: {this.state.i}</div>
//             </div >
//         );
//     }
// }

function CountNumber(props) {
    const [i, setI] = useState(0);

    useEffect(() => {
        document.title = `You cliked ${i} times`;
    });

    return (
        <div>
            <button onClick={() => setI(i + 1)}>
                클릭하세요
            </button>
            <div>클릭 수: {i}</div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CountNumber />);