/** @format */

import React from "react";

const CharacterModal = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white rounded-lg p-6 w-1/3 border-4 border-red-500 relative">
      <img
        src="/holly-sprig.png"
        alt="Holly Sprig"
        className="absolute top-0 left-0 w-12 h-12"
      />
      <img
        src="/holly-sprig.png"
        alt="Holly Sprig"
        className="absolute top-0 right-0 w-12 h-12"
      />
      <h2 className="text-2xl font-bold mb-4 text-red-600">
        Season Information
      </h2>
      <p className="text-lg text-green-700">
        Season: {data.allies || "Any Season!"}
      </p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default CharacterModal;
