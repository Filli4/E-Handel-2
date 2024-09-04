import React from "react";

export default function Card() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src="" alt="Card Image" />

        <div className=" px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2 snap-center"> Card Title</div>
          <p className=" text-gray-700 text-base">
            This is just the description of the card
          </p>
        </div>
      </div>
    </>
  );
}
