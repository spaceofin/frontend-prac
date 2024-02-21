import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function NumberSum(props) {
    const [numArr, setNumArr] = useState(props.numArr);
    const [prevValue, setPrevValue] = useState(null);

    // const [arrSum, setArrSum] = useState(null);
    // useEffect(() => {
    //     console.log("useEffect hook runs");
    //     setArrSum(numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    // }, [numArr]);

    const arrSum = useMemo(() => {
        console.log("useMemo hook runs");
        return numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }, [numArr]);


    const addNumToArr = (inputValue) => {
        if (inputValue === null) {
            inputValue = prevValue;
        }
        console.log(`inputValue: ${inputValue}`);
        setPrevValue(inputValue);

        if (inputValue >= 10) {
            return;
        }
        const parsedValue = parseInt(inputValue);
        if (!isNaN(parsedValue)) {
            setNumArr([...numArr, parsedValue]);
            // console.log(`inputValue: ${inputValue}`);
            // console.log(`numArr: [ ${numArr.join(' ')} ${parsedValue} ]`);
        }
    }

    let enteredValue = null;

    return (
        <div>
            <p>Number array : [ {numArr.map(num => num + ' ')} ] </p>
            <p>Sum of array : {arrSum}</p>
            <p>Previous input value : {prevValue}</p>
            <input onChange={(e) => { enteredValue = e.target.value; }} />
            <button onClick={() => { addNumToArr(enteredValue) }}>Enter</button>
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