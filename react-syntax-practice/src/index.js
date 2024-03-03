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
    selectFeelings: {
        backgroundColor: 'white',
    }
}

const App = () => {
    const [value, setValue] = useState('happy');

    const handleChange = (event) => {
        // setValue(event.target.value.trim());
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('Your day was ' + value + '.\nHave a good dream.');
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    <p style={styles.question}>How was your day?</p>
                    <select style={styles.selectFeelings} value={value} onChange={handleChange} >
                        <option value="happy">happy</option>
                        {/* <option selected value="happy">happy</option> */}
                        <option value="sad">sad</option>
                        <option value="bored">bored</option>
                        <option value="excited">excited</option>
                        <option value="grateful">grateful</option>
                    </select>
                    <button style={styles.submitButton} type="submit">submit</button>
                </label>
            </form>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);