import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsterHP: 100,
            playerHP: 100,
        };
    }

    hpBox(name, hp) {
        return (
            <div className="hp-box">
                {name}
                <div className="hp">
                    <div className="hp-gauge" style={{ width: `${hp}%` }} />
                </div>
            </div>
        )
    }

    skillBox(skillName) {
        return (
            <button onClick={() => this.useSkill(skillName)}>{skillName}</button>
        )
    }

    useSkill(skillName) {
        let attackValue = 0;
        let attackedValue = 0;
        let healValue = 0;
        switch (skillName) {
            case 'ATTACK':
                attackValue = Math.floor(Math.random() * 11) + 10;
                attackedValue = Math.floor(Math.random() * 16) + 10;
                break;
            case 'MAGIC ATTACK':
                attackValue = Math.floor(Math.random() * 21) + 20;
                attackedValue = Math.floor(Math.random() * 16) + 15;
                break;
            case 'HEAL':
                healValue = Math.floor(Math.random() * 6) + 15;
                break;
            default:
                break;
        }

        console.log("attackValue: ", attackValue);
        console.log("attackedValue: ", attackedValue);

        this.setState({
            monsterHP: this.state.monsterHP - attackValue < 0 ? 0 : this.state.monsterHP - attackValue,
            playerHP: this.state.playerHP - attackedValue + healValue < 0 ? 0 : this.state.playerHP - attackedValue + healValue,
        });
    }


    render() {

        let status = "Battle Going On";

        if (this.state.monsterHP <= 0 && this.state.playerHP <= 0) {
            status = 'ALL DIE';
        } else if (this.state.playerHP <= 0) {
            status = 'PLAYER DIE';
        } else if (this.state.monsterHP <= 0) {
            status = 'MOSTER DIE';
        }

        return (
            <div className="game">
                <div className="header">
                    Monster Slayer
                </div>
                <div>
                    {this.hpBox('Monster', this.state.monsterHP)}
                    {this.hpBox('Player', this.state.playerHP)}
                </div>
                <div className="button-panel">
                    {this.skillBox('ATTACK')}
                    {this.skillBox('MAGIC ATTACK')}
                    {this.skillBox('HEAL')}
                    {this.skillBox('RESET')}
                </div>
                <div className="status">
                    {status}
                </div>
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);