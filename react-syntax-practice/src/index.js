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
    fileInfo: {
        fontSize: '17px',
        fontFamily: 'Arial',
        margin: '5px',
        color: 'blue',
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
    const [fileName, setFileName] = useState('');
    const [fileSize, setFileSize] = useState(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFileSize(file.size);
        } else {
            setFileName('');
            setFileSize(0);
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
            <div style={styles.fileInfo}>
                {fileName}
                <br />
                {fileSize && `${fileSize} bytes`}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

