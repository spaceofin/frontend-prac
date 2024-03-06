import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '30px',
        width: '350px',
        height: '50px',
        padding: '30px 30px 30px 30px',
        backgroundColor: ' #FFD700',
        borderRadius: '10px',
        justifyContent: 'center',
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


const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
];

function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div style={styles.wrapper}>
            <Select
                isMulti
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

