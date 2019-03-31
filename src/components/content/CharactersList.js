import React from 'react';

const CharactersList = ({characters}) =>{
  
  return characters.map(character => (
      <div className = 'cards'>
        <p> Name: {character.name}</p> 
          <p>Gender: {character.gender}</p>
          <p>Culture: {character.culture}</p>
          <p>Born: {character.born}</p>
          <p>Died: {character.died}</p>
          <p>Titles: {character.titles + ' '}</p>
          <p>Aliases: {character.aliases}</p>
          <p>Father: {character.father}</p>
          <p>Mother: {character.mother}</p>
          <p>Spouse: {character.spouse}</p>
          <p>Allegiances: {character.allegiances + ' '}</p>
          <p>Books: {character.book}</p>
          <p>Pov Books: {character.povBooks}</p>
          <p>TV Series: {character.tvSeries + ' '}</p>
          <p>Played By: {character.playedBy}</p>
          <br />
      </div>
  ))}

export default CharactersList;