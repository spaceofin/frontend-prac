import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    return (
        <div>
            <h1>Animal Sound</h1>
            <div id="animal">
                <div class="cat">
                    <span class="animal-name">Cat</span>
                    <p class="animal-sound">"Meow~"</p>
                </div>
                <div class="dog">
                    <span class="animal-name">Dog</span>
                    <p class="animal-sound">"Woof!"</p>
                </div>
            </div>
            <br />
            <p class="dog"> == A different dog is passing by ==&gt;</p>
            <br />
            <div id="memo">
                <h2>Cows make the sound "Moo".</h2>
                <h3>Sheep make sound "Baa".</h3>
                <h4>Birds make sound "Tweet".</h4>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
