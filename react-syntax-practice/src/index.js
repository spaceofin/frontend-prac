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
    }
}

const App = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        // setValue(event.target.value.trim());
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        if (value) {
            // alert('Your Nickname is ' + value);
            alert('Your day was...\n' + value + '\n\nHave a good night!');
        } else {
            // alert('Submit your Nickname');
            alert('How was your day?');
        }
        setValue('');
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* <span style={styles.nickname}>Nickname: </span>
                    <input type="text" value={value} onChange={handleChange} /> */}
                    <p style={styles.question}>How was your day?</p>
                    <textarea value={value} onChange={handleChange} />
                    <button style={styles.submitButton} type="submit">submit</button>
                </label>
            </form>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);