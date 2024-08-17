import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";

const MainSection = () => {
  // State to hold fetched cards
  const [cards, setCards] = useState([]);
  // State to hold search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch cards from the server when the component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:7000/cards"); // Update with your API endpoint
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Filter cards based on search term
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="text-center bg-white">
      <div className="bg-[#dadbf0] py-12">
        <h1 className="text-4xl font-bold mb-8">How can we help?</h1>

        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-3 border border-black rounded-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
          />
          <button className="p-3 rounded-r border border-black bg-[#3b82f6] hover:bg-[#2563eb] transition-colors duration-300 text-white">
            <span className="material-icons">
              <GoArrowRight size={30} />
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="p-6 shadow-lg rounded-lg bg-white border border-gray-200 hover:shadow-xl hover:bg-[#f9fafb] transition-transform transform hover:-translate-y-1 duration-300"
          >
            <h2 className="font-semibold text-xl text-[#111827] mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;
