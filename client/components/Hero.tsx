import React from "react";

export const Hero: React.FC = ({}) => {
  return (
    <div className="h-[650px] bg-hero bg-center bg-cover flex justify-center items-end">
      <div className="mb-[70px] lg:mb-[120px] flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-[20px]">
          Where to Next?
        </h1>
        <button
          type="button"
          className="text-rose-400 w-1/2 bg-white hover:bg-slate-200 font-semibold rounded-full text-xs md:text-sm lg:text-lg  px-3 py-2.5 text-center mr-2 mb-2"
        >
          My Passport
        </button>
      </div>
    </div>
  );
};
