import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export const RecommendationSection: React.FC = () => {
  const info = (
    <p className="font-medium mt-[20px]">
      The current most frequently visited country, Adobrasig is Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Pariatur neque mollitia
      consectetur delectus sunt dignissimos a impedit id magnam facere? Quisquam
      velit, accusantium mollitia vel aliquid ut ea totam eligendi.
    </p>
  );

  const card = (
    <div className="relative mt-[20px] w-full justify-self-center sm:justify-self-auto mb-2 rounded-lg shadow-lg">
      <div className="absolute top-5 sm:top-8 lg:top-10 left-5 sm:left-8 lg:left-10">
        <h4 className="mb-3 text-xl sm:text-3xl font-medium tracking-tight text-white">
          Adobrasig
        </h4>
        <p className="text-lg sm:text-xl text-white">270 Visits</p>
      </div>
      <img
        className="w-full rounded-lg"
        src="/countryCardPlaceholder.jpg"
        alt="product"
      />
    </div>
  );
  const renderCards = (option: number) => {
    if (useWindowSize().width! < 768 || option == 1) {
      return (
        <>
          {card}
          {info}
        </>
      );
    }

    return (
      <>
        {info}
        {card}
      </>
    );
  };
  return (
    <div className="h-fit w-screen">
      <div className="pt-[50px] px-[80px]">
        <p className="text-2xl lg:text-3xl font-medium text-center">
          For Your Next Trip, Why not Visit...
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
          {renderCards(1)}
          {renderCards(2)}
        </div>
      </div>
    </div>
  );
};
