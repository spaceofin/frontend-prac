import React from "react";
import ReactDOM from 'react-dom/client';

function Card(props) {
    const { name, backgroundColor, children } = props;

    return (
        <div
            style={{
                width: 250,
                padding: 10,
                paddingLeft: 30,
                borderRadius: 10,
                boxShadow: "2px 2px 2px black",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {name && <h1>{name}</h1>}
            {children && <div style={({ fontSize: 20, fontFamily: "sans-serif", })}>{children}</div>}
        </div >
    );
}

function ProfileCard(props) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,300px)",
                gap: 20,
                margin: 50,
                marginTop: 70,
            }}
        >
            <Card name="Mary" backgroundColor="lightblue">
                <p>Project Manager</p>
            </Card>
            <Card name="Jake" backgroundColor="lightcoral">
                <p>Engineer</p>
            </Card>
            <Card name="Ashley" backgroundColor="lightSteelBlue">
                <p>Backend developer</p>
            </Card>
            <Card name="Christopher" backgroundColor="lightSalmon">
                <p>Desinger</p>
            </Card>
            <Card name="Lauren" backgroundColor="lightGray">
                <p>Frontend Developer</p>
            </Card>
        </div>
    );
}

const App = () => {
    return (
        <ProfileCard />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)