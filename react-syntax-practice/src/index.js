import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '30px',
        width: '350px',
        height: '130px',
        padding: '15px 30px 15px 50px',
        backgroundColor: ' #FFD700',
        borderRadius: '10px',
        position: 'relative',
    },
    submitButton: {
        position: 'absolute',
        marginLeft: '2px',
        bottom: '20px',
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
    const [needSandwich, setNeedSandwich] = useState(false);
    const [count, setCount] = useState(1);

    const handleSubmit = (event) => {
        if (needSandwich) {
            if (count == 1) {
                alert('You need a sandwich.');
            } else {
                alert('You need ' + count + ' sandwiches.');
            }
        } else {
            alert('You don\'t need a sandwich.')
        }
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="checkbox"
                        checked={needSandwich}
                        onChange={(event) => { setNeedSandwich(event.target.checked) }}
                    />
                    Check if you need sandwiches.
                </label>
                <br />
                <br />
                {needSandwich &&
                    <label>
                        How many sandwiches do you need?
                        <input
                            type="number"
                            value={count}
                            onChange={(event) => {
                                let inputValue = event.target.value;
                                if (inputValue >= 1) {
                                    setCount(inputValue);
                                }
                            }}
                        />
                    </label>
                }
                <br />
                <br />
                <button style={styles.submitButton} type="submit">submit</button>
            </form >
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);