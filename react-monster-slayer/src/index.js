import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsterHP: 100,
            playerHP: 100,
            magicAttackCount: 2,
            healCount: 2,
            battleLogs: [],
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

    skillBox(skillName, count) {
        return (
            <button onClick={() => this.useSkill(skillName)}>{count != null ? `${skillName} : ${count}` : skillName}</button>
        )
    }

    useSkill(skillName) {

        if (skillName === "RESET") {
            this.setState({
                monsterHP: 100,
                playerHP: 100,
                magicAttackCount: 2,
                healCount: 2,
                battleLogs: [],
            });
            return;
        }

        if (this.state.monsterHP <= 0 || this.state.playerHP <= 0) {
            return;
        }

        if ((skillName === "MAGIC ATTACK" && this.state.magicAttackCount === 0) ||
            (skillName === "HEAL" && this.state.healCount === 0)) {
            return;
        }

        let attackValue = 0;
        let attackedValue = 0;
        let healValue = 0;
        let isMagicAttak = false;
        let isHeal = false;


        const battleLogs = this.state.battleLogs.slice();

        switch (skillName) {
            case 'ATTACK':
                attackValue = Math.floor(Math.random() * 11) + 10;
                attackedValue = Math.floor(Math.random() * 16) + 10;
                battleLogs.push(`Player attaked Monster for ${attackValue} damage`);
                battleLogs.push(`Monster attaked Player for ${attackedValue} damage`);
                break;
            case 'MAGIC ATTACK':
                attackValue = Math.floor(Math.random() * 21) + 20;
                attackedValue = Math.floor(Math.random() * 16) + 15;
                battleLogs.push(`Player attaked Monster for ${attackValue} damage`);
                battleLogs.push(`Monster attaked Player for ${attackedValue} damage`);
                isMagicAttak = true;
                break;
            case 'HEAL':
                healValue = Math.floor(Math.random() * 6) + 15;
                battleLogs.push(`Player healed for ${healValue} points`);
                isHeal = true;
                break;
            default:
                break;
        }

        console.log("attackValue: ", attackValue);
        console.log("attackedValue: ", attackedValue);

        this.setState({
            monsterHP: this.state.monsterHP - attackValue < 0 ? 0 : this.state.monsterHP - attackValue,
            playerHP: Math.min(100, this.state.playerHP - attackedValue + healValue < 0 ? 0 : this.state.playerHP - attackedValue + healValue),
            battleLogs: battleLogs,
            magicAttackCount: this.state.magicAttackCount - (isMagicAttak ? 1 : 0),
            healCount: this.state.healCount - (isHeal ? 1 : 0),
        });
    }


    render() {

        let status = "Battle Going On";

        if (this.state.monsterHP <= 0 && this.state.playerHP <= 0) {
            status = 'ALL DIE, NO ONE WIN.';
        } else if (this.state.playerHP <= 0) {
            status = 'PLAYER DIE, MONSTER WIN.';
        } else if (this.state.monsterHP <= 0) {
            status = 'MOSTER DIE, PLAYER WIN.';
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
                    {this.skillBox('MAGIC ATTACK', this.state.magicAttackCount)}
                    {this.skillBox('HEAL', this.state.healCount)}
                    {this.skillBox('RESET')}
                </div>
                <div className="status">
                    {status}
                </div>
                <div className="battle-logs">
                    {this.state.battleLogs.map((log, i) => (
                        <div key={i}>{log}</div>
                    ))}
                </div>
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);