import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["hello", "car", "morning", "word", "dream", "water"]

function App() {
    return (
        <div>
            <WordCard value={word} />
        </div>
    );
}

export default App;
