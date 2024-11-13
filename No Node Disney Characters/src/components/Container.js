import React from "react";
import Card from "./Card";

const CharacterContainer = ({ data, onCardClick }) => (
  <div className="flex flex-wrap justify-center">
    {data.map((character) => (
      <Card key={character._id} data={character} onClick={onCardClick} />
    ))}
  </div>
);

export default CharacterContainer;
