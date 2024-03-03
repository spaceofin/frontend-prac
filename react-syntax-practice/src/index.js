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
    }
}

const App = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value.trim());
    }

    const handleSubmit = (event) => {
        if (value) {
            alert('Your Nickname is ' + value);
        } else {
            alert('Submit your Nickname');
        }
        setValue('');
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    <span style={styles.nickname}>Nickname: </span>
                    <input type="text" value={value} onChange={handleChange} />
                    <button style={styles.submitButton} type="submit">submit</button>
                </label>
            </form>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);