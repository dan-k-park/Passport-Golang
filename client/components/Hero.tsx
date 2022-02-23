import React from "react";

export const Hero: React.FC = ({}) => {
  return (
    <div className="h-[700px] bg-hero bg-center bg-cover">
      <div>
        <h1 className="text-white text-4xl">Where To?</h1>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guh
        </button>
      </div>
    </div>
  );
};
