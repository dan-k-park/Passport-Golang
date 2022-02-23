import React from "react";

export const Hero: React.FC = ({}) => {
  return (
    <div className="h-[650px] bg-hero bg-center bg-cover flex justify-center items-end">
      <div className="mb-[70px] flex flex-col">
        <h1 className="text-white text-3xl mb-[20px]">Where To?</h1>
        <button
          type="button"
          className="text-rose-400 bg-white hover:bg-slate-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Guh
        </button>
      </div>
    </div>
  );
};
