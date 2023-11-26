import React, { useState } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu.jsx';
import Characters from './components/Characters.jsx';


function App() {
    const [character, setCharacter] = useState(null);
    const [characters, setCharacters] = useState([]);

    return (
        <div>
            <HamburgerMenu setCharacter={setCharacter} setCharacters={setCharacters}  characters={characters} />
            <Characters character={character} />
        </div>
    );
}

export default App;
