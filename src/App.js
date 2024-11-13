import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterModal from "./components/Modal";
import CharacterContainer from "./components/CharacterContainer";
import Footer from "./components/Footer";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const audioRef = useRef(null);


useEffect(() => {
  axios
    .get("https://api.disneyapi.dev/character")
    .then((response) => {
      setCharacter(response.data.data);
    })
    .catch((error) => {
      console.error("Error fetching the disney character data:", error);
    });
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
    <CharacterContainer data={character} onCardClick={handleCardClick} />
    {selectedCharacter && (
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
        <p className="text-lg">
          Good ... {selectedCharacter.films || "Any Season!"}
        </p>
      </div>
    )}
    <audio ref={audioRef} src="/DisneySound.mp3" />
    {isModalOpen && <CharacterModal data={selectedCharacter} onClose={closeModal} />}

    
    <Footer
        year = "2024"
        company = "Disney"
        twitterLink =  "#"
        instaLink = "#"
      >
      </Footer>
  </div>
);
};

export default App;

