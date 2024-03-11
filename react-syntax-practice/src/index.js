import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function toSeoulTime(inputCity, time) {
    if (inputCity === 'Singapore' && time !== '') {
        return (time + 24 + 1) % 24;
    } else if (inputCity === 'Hawaii') {
        return (time + 24 - 5) % 24;
    } else {
        return time;
    }
}

function toSingaporeTime(inputCity, time) {
    if (inputCity === 'Seoul' && time !== '') {
        return (time + 24 - 1) % 24;
    } else if (inputCity === 'Hawaii') {
        return (time + 24 - 6) % 24;
    } else {
        return time;
    }
}

function toHawaiiTime(inputCity, time) {
    if (inputCity === 'Seoul' && time !== '') {
        return (time + 24 + 5) % 24;
    } else if (inputCity === 'Singapore') {
        return (time + 24 + 6) % 24;
    } else {
        return time;
    }
}

function convertTime(inputCity, time, toCityTime) {
    return toCityTime(inputCity, time);
}

function CityTime(props) {
    const handleChange = (event) => {
        if (event.target.value.trim() === '') {
            props.onTimeChange(props.city, '');
            return;
        }

        const time = parseInt(event.target.value);

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
    const [time, setTime] = useState('');

    const seoulTime = convertTime(inputCity, time, toSeoulTime);
    const singaporeTime = convertTime(inputCity, time, toSingaporeTime);
    const hawaiiTime = convertTime(inputCity, time, toHawaiiTime);

    const handleChange = (city, time) => {
        setInputCity(city);
        setTime(time);
        if (time === '') {
            setTime('');
        } else {
            setTime(time);
        }
        console.log(`inputCity: ${city}, time: ${time}`);
    }

    return (
        <div>
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