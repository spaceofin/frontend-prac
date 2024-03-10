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
        } else {
            props.onTimeChange(time);
            props.setInputCity(props.city);
            console.log(`city: ${props.city}, time: ${time}`)
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

    const handleChange = (time) => {
        setTime(time);
    }

    return (
        <div>
            <CityTime
                city="Seoul"
                time={seoulTime}
                setTime={setTime}
                setInputCity={setInputCity}
                onTimeChange={handleChange}
            />
            <CityTime
                city="Singapore"
                time={singaporeTime}
                setTime={setTime}
                setInputCity={setInputCity}
                onTimeChange={handleChange}
            />
            <CityTime
                city="Hawaii"
                time={hawaiiTime}
                setTime={setTime}
                setInputCity={setInputCity}
                onTimeChange={handleChange}
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