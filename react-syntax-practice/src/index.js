import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

const styles = {
    idInput: {
        marginLeft: '5px',
        marginRight: '3px',
    },
    teamColor: {
        margin: '5px',
    },
    red: {
        backgroundColor: 'red',
    },
    yellow: {
        backgroundColor: 'yellow',
    },
    green: {
        backgroundColor: 'green',
    },
    blue: {
        backgroundColor: 'blue',
    },
    summitButton: {
        marginTop: '10px',
        fontSize: '15px',
    }
}

function SignUp(props) {
    const [id, setId] = useState("");
    const [teamColor, setTeamColor] = useState("RED");

    const handleChangeId = (event) => {
        setId(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`ID: ${id}\nTEAM COLOR: ${teamColor}`);
        event.preventDefault();
    };

    const handleChangeTeamColor = (event) => {
        setTeamColor(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID
                <input style={styles.idInput} type="text" value={id} onChange={handleChangeId} />
            </label>
            <br />
            <label>
                TEAM COLOR
                <select style={styles.teamColor} value={teamColor} onChange={handleChangeTeamColor}>
                    <option style={styles.red} value="RED">RED</option>
                    <option style={styles.yellow} value="YELLOW">YELLOW</option>
                    <option style={styles.green} value="GREEN">GREEN</option>
                    <option style={styles.blue} value="BLUE">BLUE</option>
                </select>
            </label>
            <br />
            <button style={styles.summitButton} type="submit">summit</button>
        </form>
    );
}

function App() {
    return (
        <div>
            <SignUp />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)