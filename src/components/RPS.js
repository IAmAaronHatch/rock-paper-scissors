import React, { Component } from 'react';
import './RPS.css';

class RPS extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerScore: 0,
            compScore: 0

        }
    }

    game = (val) => {
        let cchoice = this.getCompChoice();
        const playerChoice = val;

        if (playerChoice === 'r' && cchoice === 's') {
            this.setState((preState) => {
                return {
                    playerScore: preState.playerScore + 1
                }
            })
            alert('P Wins')
        }
        if (playerChoice === 'r' && cchoice === 'p') {
            this.setState((preState) => {
                return {
                    compScore: preState.compScore + 1
                }
            })
            alert('C Wins')
        }
        if (playerChoice === 'r' && cchoice === 'r') {
            alert('Tie')
        }
        if (playerChoice === 's' && cchoice === 's') {
            alert('Tie')
        }
        if (playerChoice === 's' && cchoice === 'p') {
            this.setState((preState) => {
                return {
                    playerScore: preState.playerScore + 1
                }
            })
            alert('P Wins')
        }
        if (playerChoice === 's' && cchoice === 'r') {
            this.setState((preState) => {
                return {
                    compScore: preState.compScore + 1
                }
            })
            alert('C Wins')
        }
        if (playerChoice === 'p' && cchoice === 's') {
            this.setState((preState) => {
                return {
                    compScore: preState.compScore + 1
                }
            })
            alert('C Wins')
        }
        if (playerChoice === 'p' && cchoice === 'p') {
            alert('Tie')
        }
        if (playerChoice === 'p' && cchoice === 'r') {
            this.setState((preState) => {
                return {
                    playerScore: preState.playerScore + 1
                }
            })
            alert('P Wins')
        }

    }

    getCompChoice = () => {
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);

        return choices[randomNumber];
    }


    render() {
        let { playerScore, compScore } = this.state
        return (
            <div className='Main'>
                <div className='FullContainer'>
                    <div className='ScoreCard'>
                        <span className='pScore'> {playerScore} </span>
                        <span className='cScore'> {compScore} </span>
                    </div>

                    <div className='BtnContainer'>
                        <button onClick={() => this.game('r')} id='rockBtn' > Rock </button>
                        <button onClick={() => this.game('p')} id='paperBtn' > Paper </button>
                        <button onClick={() => this.game('s')} id='scissorBtn' > Scissor </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RPS;