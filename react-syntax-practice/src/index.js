import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function CountNumber(props) {
    const [i, setI] = useState(0);

    return (
        <div>
            <button onClick={() => setI(i + 1)}>
                클릭하세요
            </button>
            <div>클릭 수: {i}</div>
        </div>
    );

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CountNumber />);