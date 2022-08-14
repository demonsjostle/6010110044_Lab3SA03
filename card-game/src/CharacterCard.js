import React, { useState, useEffect, useRef } from 'react';
export default function CharacterCard(props) {
    const [active, setActive] = useState(false);

    const attemptRef = useRef(props.attempt)
    const completedRef = useRef(true)
    const activate = () => {
        if (!active) {
            setActive(true)
            props.activationHandler(props.value)
        }


    }
    useEffect(() => {
        if (attemptRef.current !== props.attempt) {
            setActive(false);
            attemptRef.current = props.attempt
        }



    })
    useEffect(() => {
        if (props.resetGame) {
            setActive(false)
        }
    }, active)

    return (
        <div className={`card ${active ? 'activeCard' : ''} ${props.completed ? 'completedCard' : ''} `} onClick={activate} > {props.value}</div >
    )
}


