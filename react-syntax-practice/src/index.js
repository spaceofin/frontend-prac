import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

    // add inputValue to numArr if it is less than 10
    const addNumToArr = useCallback((inputValue) => {

        console.log(`inputValue: ${inputValue}`);
        setPrevValue(inputValue);

        if (inputValue >= 10) {
            return;
        }

        setNumArr((arr) => [...arr, inputValue]);
        // setNumArr([...numArr, parsedValue]);
        // console.log(`inputValue: ${inputValue}`);
        // console.log(`numArr: [ ${numArr.join(' ')} ${parsedValue} ]`);

    }, []);

    const handleButtonClick = (inputValue) => {
        if (inputValue === null) {
            inputValue = prevValue;
        }
        addNumToArr(parseInt(inputValue));
    }

    let enteredValue = null;

    return (
        <div>
            <p>Number array : [ {numArr.map(num => num + ' ')} ] </p>
            <p>Sum of array : {arrSum}</p>
            <p>Previous input value : {prevValue}</p>
            <input onChange={(e) => { enteredValue = e.target.value; }} />
            <button onClick={() => { handleButtonClick(enteredValue) }}>Enter</button>
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