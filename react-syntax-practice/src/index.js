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
                    <p class="animal-sound">"Woof!"
                    </p>
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
            <br />
            <div class="horizontal-line"></div>
            <div id="state-selectors">
                <button>Hover Me!</button>
                <br />
                <a href="./">Click Me!</a>
                <br />
                <input value="focus input"></input>
                <br />
                <select size='4'>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                </select>
            </div>
            <div id="child-selectors">
                <p>This is first p child.</p>
                <p>This is nothing.</p>
                <span>This is last span child.</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
