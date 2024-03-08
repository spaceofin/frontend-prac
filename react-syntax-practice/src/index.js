import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

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
                <input type="text" value={id} onChange={handleChangeId} />
            </label>
            <br />
            <label>
                TEAM COLOR
                <select value={teamColor} onChange={handleChangeTeamColor}>
                    <option value="RED">RED</option>
                    <option value="YELLOW">YELLOW</option>
                    <option value="GREEN">GREEN</option>
                    <option value="BLUE">BLUE</option>
                </select>
            </label>
            <br />
            <button type="submit">summit</button>
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