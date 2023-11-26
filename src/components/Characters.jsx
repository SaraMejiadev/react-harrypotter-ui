import React from 'react';

function Characters({ character }) {
    return (
        <div className="content">
            {character && (
                <div className="character-info">
                    <img
                        src={character.image}
                        alt="Character Image"
                        className="character-image"
                    />
                    <div className="character-details">
                        <h1 className="character-name">{character.name}</h1>
                        <p className="house">House: {character.house || 'Unknown'}</p>
                        <p className="species">Species: {character.species || 'Unknown'}</p>
                        <p className="wand">Wand: {`${character.wand.wood} ${character.wand.core}`|| 'Unknown'}</p>
                        <p className="patronus">Patronus: {character.patronus || 'Unknown'}</p>
                        <p className="birth">Date of Birth: {character.dateOfBirth || 'Unknown'}</p>
                        <p className="actor">Actor: {character.actor || 'Unknown'}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Characters;
