import React from "react";

const Card = ({ data, onClick }) => (
    <div
    className="bg-white shadow-md rounded-lg p-4 m-4 w-64 cursor-pointer transform transition-transform hover:scale-105"
    onClick={() => onClick(data)}
  >
    <img
      src={data.imageUrl}
      alt={data.name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h2 className="text-xl font-semibold mt-2">{data.name}</h2>
    <p className="text-gray-600">Allies: {data.allies}</p>
    <p className="text-gray-600">Enemies: {data.enemies}</p>
  </div>
);

export default Card;