import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-4 flex justify-between items-center">
      <div className="text-white font-bold">Abstract | Help Center</div>
      <button className="bg-gray-900 text-white px-4 py-2 rounded">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
