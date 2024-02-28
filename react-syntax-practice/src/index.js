// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//     const [isButtonOn, setIsButtonOn] = useState(true);
//     const [product, setProduct] = useState(1);
//     const [enteredValue, setEnteredValue] = useState(1);

//     const handleClick = () => {
//         setIsButtonOn(prevState => !prevState);
//     }

//     const handleChange = (e) => {
//         const inputValue = parseInt(e.target.value);
//         if (isNaN(inputValue)) {
//             console.log("The entered value is not number.");
//             return;
//         }
//         setEnteredValue(inputValue);
//     }

//     return (
//         < div >
//             <button onClick={handleClick}>
//                 {isButtonOn ? 'On' : 'Off'}
//             </button>
//             <br /><br />
//             <p>{`Product : ${product}`}</p>
//             <p>Enter the number want to multiply</p>
//             <input onChange={handleChange} />
//             <button onClick={(e) => setProduct(product * enteredValue)}>
//                 enter
//             </button>
//         </div>
//     )

// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import './index.css';

setInterval(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);
