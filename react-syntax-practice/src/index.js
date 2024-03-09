import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function TimeConverter(props) {
    let time;
    if (props.city === 'Singapore') {
        time = props.time - 1;
    } else if (props.city === 'Hawaii') {
        time = props.time + 5;
    } else {
        return;
    }
    time += 24;
    time %= 24;
    return <p>The Time of {props.city} City is {time} O'clock.</p>;
}

function Calculator(props) {
    const [city, setCity] = useState('Singapore');
    const [time, setTime] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    const handleClick = (event) => {
        if (time < 0 || time > 24) {
            alert('Enter between 0 and 24 hours');
            setTime();
        }
        setShowResult(true);
    }

    const handleSelect = (event) => {
        setCity(event.target.value);
        setShowResult(false);
    }

    return (
        <fieldset>
            <legend>Input Current Time of Seoul City(24 hours): </legend>
            <input
                type="number"
                value={time}
                onChange={handleChange} />
            <br />
            <p>Choose City Want To Know Current Time</p>
            <select onChange={handleSelect}>
                <option value="Singapore">Singapore</option>
                <option value="Hawaii">Hawaii</option>
            </select>
            <button onClick={handleClick}>Enter</button>
            <br />
            {showResult &&
                <TimeConverter
                    city={city}
                    time={time}
                />
            }
        </fieldset>
    )
}

const App = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


