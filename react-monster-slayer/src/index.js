import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    Monster Slayer
                </div>
                <div>
                    <div className="hp-box">
                        Monster
                        <div className="hp">
                            <div className="hp-gauge" style={{ width: '25%' }} />
                        </div>
                    </div>
                    <div className="hp-box">
                        Player
                        <div className="hp">
                            <div className="hp-gauge" style={{ width: '50%' }} />
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);