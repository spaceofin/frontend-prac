import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

function CityTime(props) {
    const handleChange = (event) => {
        const inputTime = event.target.value.trim();

        if (inputTime === '') {
            props.onTimeChange(props.city, '');
            return;
        }

        const time = parseInt(inputTime);

        if (time < 0 || time >= 24) {
            alert('Enter a time between 0 and 23');
            props.onTimeChange(props.city, '');
        } else {
            props.onTimeChange(props.city, time);
            console.log(`city: ${props.city}, time: ${time}`)
        }
    };

    const inputId = `${props.city.toLowerCase()}TimeInput`;

    return (
        <fieldset className="fieldset-city">
            <legend>
                {props.city} Time
            </legend>
            <input className="input-time" id={inputId} type="number" value={isNaN(props.time) ? '' : props.time} onChange={handleChange} placeholder="Enter hour(0-23)" />
            <span className="span-oclock">O'clock</span>
        </fieldset>
    )
}

function convertTime(inputCity, inputTime, targetCity) {
    if (inputTime === '') {
        return '';
    }

    const timeDifference = {
        Seoul: 0,
        Singapore: -1,
        Hawaii: 5
    };

    const diff = timeDifference[targetCity] - timeDifference[inputCity];
    return (inputTime + 24 + diff) % 24;
}

function TimeDifference(props) {
    const [inputCity, setInputCity] = useState('');
    const [time, setTime] = useState('');

    const seoulTime = convertTime(inputCity, time, "Seoul");
    const singaporeTime = convertTime(inputCity, time, "Singapore");
    const hawaiiTime = convertTime(inputCity, time, "Hawaii");

    const handleChange = (city, time) => {
        setInputCity(city);
        if (time === '') {
            setTime('');
        } else {
            setTime(time);
        }
        console.log(`inputCity: ${city}, inputTime: ${time}`);
    }

    return (
        <div className="div-citytime">
            <CityTime
                city="Seoul"
                time={seoulTime}
                onTimeChange={handleChange}
            />
            <CityTime
                city="Singapore"
                time={singaporeTime}
                onTimeChange={handleChange}
            />
            <CityTime
                city="Hawaii"
                time={hawaiiTime}
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