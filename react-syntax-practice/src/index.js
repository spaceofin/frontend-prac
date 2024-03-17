import React from "react";
import ReactDOM from 'react-dom/client';

// The Toolbar component must take an extra "theme" prop  
// and pass it to the ThemedButton
function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    return (
        <Button theme={props.theme} />
    )
}

function Button(props) {
    let buttonTheme = {};

    switch (props.theme) {
        case 'dark':
            buttonTheme = { backgroundColor: 'black', color: 'white' };
            break;
        case 'light':
            buttonTheme = { backgroundColor: 'white', color: 'black' };
            break;
        case 'green':
            buttonTheme = { backgroundColor: 'green', color: 'yellow' };
            break;
        default:
            buttonTheme = { backgroundColor: 'white', color: 'black' };
    }

    return (
        <button
            style={buttonTheme}
        >
            BUTTON
        </button>
    )
}

const App = () => {
    return (
        <div>
            <Toolbar theme="dark" />
            <Toolbar theme="light" />
            <Toolbar theme="green" />
            <Toolbar />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


