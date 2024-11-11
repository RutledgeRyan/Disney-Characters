/** @format */

import React from "react";
import Card from "./Card";

const CharacterContainer = ({ character, onCardClick }) => (
  <div className="flex flex-wrap justify-center">
    {character.map((character) => (
      <Card key={character._id} character={character} onClick={onCardClick} />
    ))}
  </div>
);

export default CharacterContainer;
