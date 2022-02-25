import React from "react";

export const PopularSection: React.FC = ({}) => {
  const renderCards = () => {
    return (
      <div className="bg-rose-400 w-1/2 sm:w-full aspect-[3/4] justify-self-center sm:justify-self-auto mb-2 rounded-lg shadow-lg">
        <img
          className="w-full h-1/2 rounded-t-lg"
          src="/countryCardPlaceholder.jpg"
          alt="product"
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
            Adobrasig
          </h4>
          <p className="text-white">10 Visits</p>
        </div>
      </div>
    );
  };
  return (
    <div className="h-fit w-screen">
      <div className="pt-[50px] px-[80px]">
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-center sm:text-left">
          Most Popular Countries
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
          {renderCards()}
          {renderCards()}
          {renderCards()}
          {renderCards()}
        </div>
      </div>
    </div>
  );
};
