import React from "react";
import ReactDOM from 'react-dom/client';

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    );
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

const ThemeContext = React.createContext('light');

const App = () => {
    return (
        <div>
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
            <ThemeContext.Provider value="light">
                <Toolbar />
            </ThemeContext.Provider>
            <ThemeContext.Provider value="green">
                <Toolbar />
            </ThemeContext.Provider>
            <ThemeContext.Provider>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
