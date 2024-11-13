/** @format */

import React from "react";
import DisneyPrincess from "./DisneyPrincess";

const Header = (isAnimated) => (
    <header className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 mb-6">
            <DisneyPrincess orientation="left" isAnimated={isAnimated} />
            <DisneyPrincess orientation="right" isAnimated={isAnimated} />
        <h1 className="text-4xl font-bold">Disney Characters</h1>
    </header>
);

export default Header;
