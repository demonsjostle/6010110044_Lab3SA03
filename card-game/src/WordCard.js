import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import CharacterCard from './CharacterCard'


const prepareStateFromWord = (given_word) => {
    let random_word = _.shuffle(given_word)[0]
    let word = random_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}


export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const [score, setScore] = useState(0)
    const [active, setActive] = useState(false)
    const [resetGame, setResetGame] = useState(false)

    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({ ...state, guess })

        if (guess.length === state.word.length) {
            if (guess === state.word) {
                console.log('yeah!')
                setState({ ...state, guess: '', completed: true })
                setScore(score + 1)
            } else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }

    }

    const handlePlaygame = () => {
        setState(prepareStateFromWord(props.value))
        setActive(true)
        setResetGame(true)

    }



    return (
        <div>
            {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} completed={state.completed} resetGame={resetGame} />)}
            <h1>Score: {score}</h1>
            <button onClick={handlePlaygame}>Play again</button>
        </div>
    )
}
