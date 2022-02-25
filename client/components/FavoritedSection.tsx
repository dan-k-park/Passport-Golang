import React from "react";

export const FavoritedSection: React.FC = ({}) => {
  const renderCards = () => {
    return (
      <div className="relative w-full justify-self-center sm:justify-self-auto mb-2 rounded-lg shadow-lg">
        <div className="absolute top-5 sm:top-8 lg:top-10 left-5 sm:left-8 lg:left-10">
          <h4 className="mb-3 text-xl sm:text-3xl font-medium tracking-tight text-white">
            Adobrasig
          </h4>
          <p className="text-lg sm:text-xl text-white">10 Favorites</p>
        </div>
        <img
          className="w-full rounded-lg"
          src="/countryCardPlaceholder.jpg"
          alt="product"
        />
      </div>
    );
  };
  return (
    <div className="h-fit w-screen bg-slate-500">
      <div className="pt-[50px] px-[80px]">
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-center sm:text-left">
          Most Favorited Countries
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 py-5">
          {renderCards()}
          {renderCards()}
        </div>
      </div>
    </div>
  );
};
