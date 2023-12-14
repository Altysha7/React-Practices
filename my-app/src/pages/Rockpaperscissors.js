import React, { useState } from 'react'

const game = ['rock', 'paper', 'scissors'];

export default function Rockpaperscissors() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

    const getResult = () => {
        const playerResult = game[Math.floor(Math.random() * game.length)]
        const computerResult = game[Math.floor(Math.random() * game.length)]
        setPlayerChoice(() => playerResult)
        setComputerChoice(() => computerResult)

        if (playerResult === computerResult) setResult(() => 'Draw!');
        else if (
            (playerResult === 'rock' && computerResult === 'scissors') ||
            (playerResult === 'paper' && computerResult === 'rock') ||
            (playerResult === 'scissors' && computerResult === 'paper')
        ) {
            setResult(() => 'Player wins!');
        } else {
            setResult(() => 'Computer wins!');
        }

    }

    return (
        <div>
            <h1>Rock, Paper, Scissors</h1>

            <div>
                <p>Your choice: {playerChoice}</p>
                <button onClick={() => {
                    getResult()
                }}>Start game</button>
                <p>Computer's choice: {computerChoice}</p>
                <p>Result: {result}</p>

            </div>

        </div>
    )



}


