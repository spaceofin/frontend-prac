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
        bottom: '20px',
    },
    selectItems: {
        position: 'absolute',
        marginTop: '10px',
        width: '70px',
        fontSize: '15px',
    }
}

const App = () => {
    const [lastTwoClicked, setLastTwoClicked] = useState(['A', 'B']);
    const [count, setCount] = useState(1);

    const handleChange = (event) => {
        const clickedValue = event.target.value;

        console.log(`Number of selected items: ${count}`);
        if (count === 1) {
            setLastTwoClicked([clickedValue, null]);
            setCount(count + 1);
            console.log(`Last two cliked value: [${clickedValue}, null]`);
        } else if (count === 2) {
            setLastTwoClicked([lastTwoClicked[0], clickedValue]);
            setCount(1);
            console.log(`Last two cliked value: [${lastTwoClicked[0]}, ${clickedValue}]`);
        }
    };

    const handleSubmit = (event) => {
        if (lastTwoClicked[1] === null) {
            alert('Select two items.');
        } else {
            alert(`You selected ${lastTwoClicked[0]} and ${lastTwoClicked[1]}.`);
        }
        event.preventDefault();
    }

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <select style={styles.selectItems} multiple={true} value={lastTwoClicked} onChange={handleChange}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <button style={styles.submitButton} type="submit">submit</button>
            </form >
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);