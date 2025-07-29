import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Philosophy = ({ list }) => {
  const [isOpen, setIsopen] = useState(false);

  const fullList = isOpen ? list : list.slice(0, 1);

  return (
    <section className="font-serif min-h-screen bg-gray-200 p-2 flex flex-col justify-center items-center">
      <div className=" w-2/3 text-gray-900 px-16 shadow-lg hover:shadow-2xl my-6 transition duration-300 py-6 font-sans">
        <h1 className="text-center font-bold text-4xl mt-6">
          Teaching Philosophy
        </h1>
        {fullList.map((item, index) => (
          <div className="p-4" key={index}>
            <h1 className="text-xl font-bold font-serif">{item.title}</h1>
            {item.title === "REFERENCES" ? (
              <ul>
                {Object.values(item.body).map((ref, i) => (
                  <li key={i} className="text-gray-900 text-md">
                    {ref}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black text-lg">{item.body}</p>
            )}
          </div>
        ))}
        <button
          onClick={() => {
            setIsopen(!isOpen);
          }}
          className="mt-4 bg-gray-600 hover:scale-105 transition duration-300 text-white px-4 py-1 rounded-md ml-4"
        >
          {isOpen ? "Less" : "More"}
        </button>
      </div>
    </section>
  );
};

export default Philosophy;
