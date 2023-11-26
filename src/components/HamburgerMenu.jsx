import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HamburgerMenu({ setCharacter, characters, setCharacters }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        axios.get('https://hp-api.onrender.com/api/characters')
            .then(response => setCharacters(response.data.slice(0, 13)))
            .catch(error => console.error(error));
    }, [setCharacters]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="menu-toggle">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                {characters.map(character => (
                    <li
                        key={character.id}
                        className="menu-item"
                        onClick={() => setCharacter(character)}
                    >
                        {character.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default HamburgerMenu;