import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function SignUp(props) {
    const [id, setId] = useState("");

    const handleChangeId = (event) => {
        setId(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`ID: ${id}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID
                <input type="text" value={id} onChange={handleChangeId} />
            </label>
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