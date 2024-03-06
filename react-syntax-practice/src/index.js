import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '30px',
        width: '350px',
        height: '150px',
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
    },
    inputFileButton: {
        padding: '7px 30px',
        backgroundColor: '#0047DADD',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
    },
}


const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
];



function App() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [fileName, setFileName] = useState('');


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    return (
        <div style={styles.wrapper}>
            <Select
                isMulti
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <br />
            <label for="inputFile" style={styles.inputFileButton}>
                Upload File
            </label>
            <input type="file" id="inputFile" onChange={handleFileChange} style={{ display: "none" }} />
            <br /><br />
            {fileName}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

