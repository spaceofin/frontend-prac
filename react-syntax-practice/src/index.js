import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function convertTime() {
    return;
}

function CityTime(props) {
    const handleChange = (event) => {
        const time = parseInt(event.target.value);

        if (time < 0 || time >= 24) {
            alert('Enter a time between 0 and 23');
        }
    };

    const inputId = `${props.city.toLowerCase()}TimeInput`;

    return (
        <fieldset>
            <legend>
                {props.city} Time
            </legend>
            <input id={inputId} type="number" value={props.time} onChange={handleChange} placeholder="Enter hour(0-23)" />
        </fieldset>
    )
}

function TimeDifference(props) {
    const [inputCity, setInputCity] = useState('');
    const [time, setTime] = useState(0);

    const seoulTime = convertTime(inputCity, time);
    const singaporeTime = convertTime(inputCity, time);
    const hawaiiTime = convertTime(inputCity, time);

    return (
        <div>
            <CityTime
                city="Seoul"
                time={seoulTime}
            />
            <CityTime
                city="Singapore"
                time={singaporeTime}
            />
            <CityTime
                city="Hawaii"
                time={hawaiiTime}
            />
        </div>
    )
}

const App = () => {
    return (
        <div>
            <TimeDifference />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)