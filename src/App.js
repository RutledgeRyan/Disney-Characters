import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterModal from "./components/Modal";
import CharacterContainer from "./components/CharacterContainer";
import Footer from "./components/Footer";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Array of character IDs for Disney princesses
        const characterIds = [309, 3389, 571, 1285, 4591, 2099, 6279, 5379, 2183, 6737, 256]; // Replace with actual IDs of the characters you want
        const promises = characterIds.map(id =>
          axios.get(`https://api.disneyapi.dev/character/${id}`)
        );

        const responses = await Promise.all(promises);
        const allCharacters = responses.map(response => response.data.data);
        setCharacters(allCharacters);
      } catch (error) {
        console.error("Error fetching the Disney character data:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
    setIsAnimated(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAnimated(false);
  };

  return (
    <div className="App">
      <Header isAnimated={isAnimated} />
      <CharacterContainer data={characters} onCardClick={handleCardClick} />
      {selectedCharacter && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
        </div>
      )}
      <audio ref={audioRef} src="/DisneySound.mp3" />
      {isModalOpen && <CharacterModal data={selectedCharacter} onClose={closeModal} />}
      <Footer
        year="2024"
        company="Disney"
        twitterLink="#"
        instaLink="#"
      />
    </div>
  );
};

export default App;
