import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-4 flex justify-between items-center text-xl">
      <div className="text-white font-bold">
        Abstract | <span className="font-normal">Help Center</span>
      </div>
      <button className="bg-gray-900 text-white px-4 py-2 rounded">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
