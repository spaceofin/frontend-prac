import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '30px',
        width: '350px',
        padding: '15px 30px 15px 50px',
        backgroundColor: ' #FFD700',
        borderRadius: '10px',
    },
    submitButton: {
        marginLeft: '2px',
    },
    nickname: {
        fontFamily: 'Arial',
    },
    question: {
        fontFamily: 'Arial',
    },
    selectItems: {
        backgroundColor: 'white',
    }
}

const App = () => {
    const [feeling, setFeeling] = useState('happy');
    const [weather, setWeather] = useState('sunny');

    const handleSubmit = (event) => {
        alert('Today\'s weather was ' + weather + ',\nand your day was ' + feeling + '.\n\nHave a good dream.');
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    <p style={styles.question}>What was the weather like today?</p>
                    <select style={styles.selectItems} value={weather} onChange={(event) => { setWeather(event.target.value) }} >
                        <option value="sunny">sunny</option>
                        <option value="cloudy">cloudy</option>
                        <option value="rainy">rainy</option>
                        <option value="snowy">snowy</option>
                        <option value="etc.">etc.</option>
                    </select>
                </label>
                <label>
                    <p style={styles.question}>How was your day?</p>
                    <select style={styles.selectItems} value={feeling} onChange={(event) => { setFeeling(event.target.value) }} >
                        <option value="happy">happy</option>
                        {/* <option selected value="happy">happy</option> */}
                        <option value="sad">sad</option>
                        <option value="bored">bored</option>
                        <option value="excited">excited</option>
                        <option value="grateful">grateful</option>
                    </select>
                </label>
                <br /><br />
                <button style={styles.submitButton} type="submit">submit</button>
            </form >
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);