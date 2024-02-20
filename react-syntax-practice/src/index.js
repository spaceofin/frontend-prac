import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function NumberSum(props) {
    const [numArr, setNumArr] = useState(props.numArr);
    const [inputValue, setInputValue] = useState(null);

    // const [arrSum, setArrSum] = useState(null);
    // useEffect(() => {
    //     setArrSum(numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    // }, [numArr]);

    const arrSum = useMemo(() => {
        return numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }, [numArr]);

    const addNumToArr = () => {
        const parsedValue = parseInt(inputValue);
        if (!isNaN(parsedValue)) {
            setNumArr([...numArr, parsedValue]);
            console.log(`inputValue: ${inputValue}`);
            console.log(`numArr: [ ${numArr.join(' ')} ${parsedValue} ]`);
        }
    }

    return (
        <div>
            <p>Number array : [ {numArr.map(num => num + ' ')} ] </p>
            <p>Sum of array : {arrSum}</p>
            <input onChange={(e) => { setInputValue(e.target.value); }} />
            <button onClick={addNumToArr}>Enter</button>
        </div>
    )
}

const App = () => {
    const numArr = [1, 2, 3];

    return (
        <NumberSum numArr={numArr} />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);