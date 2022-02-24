import React from "react";

export const PopularSection: React.FC = ({}) => {
  return (
    <div className="h-[400px] max-w-full bg-purple-500 relative">
      <div className="absolute top-1 p-10 w-full">
        <p className="text-lg">Most Favorited Countries</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          <div className="max-w-[15rem] bg-rose-400 mb-2 rounded-lg shadow-lg">
            <img
              className="w-full h-1/2 rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="product"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                Adobrasig
              </h4>
              <p className="leading-normal text-white">10 Favorites</p>
            </div>
          </div>
          <div className="max-w-[15rem] bg-rose-400 mb-2 rounded-lg shadow-lg">
            <img
              className="w-full h-1/2 rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="product"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                Adobrasig
              </h4>
              <p className="leading-normal text-white">10 Favorites</p>
            </div>
          </div>
          <div className="max-w-[15rem] bg-rose-400 mb-2 rounded-lg shadow-lg">
            <img
              className="w-full h-1/2 rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="product"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                Adobrasig
              </h4>
              <p className="leading-normal text-white">10 Favorites</p>
            </div>
          </div>
          <div className="max-w-[15rem] bg-rose-400 mb-2 rounded-lg shadow-lg">
            <img
              className="w-full h-1/2 rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="product"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                Adobrasig
              </h4>
              <p className="leading-normal text-white">10 Favorites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
