import React, { Component } from 'react';

class RPS extends Component {
    constructor (props) {
        super (props);

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
                    playerScore : preState.playerScore + 1
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
    

    render () {
        let { playerScore, compScore } = this.state
        return (
            <div>
                <span> {playerScore} </span>
                <span> {compScore} </span>

                <button onClick={() => this.game('r')} > Rock </button>
                <button onClick={() => this.game('p')}> Paper </button>
                <button onClick={() => this.game('s')} > Scissor </button>
            </div>
        )
    }
}

export default RPS;