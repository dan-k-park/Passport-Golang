import React from "react";

export const PopularSection: React.FC = ({}) => {
  return (
    <div className="h-[400px] max-w-full bg-purple-500 flex flex-col justify-center relative">
      <div className="absolute top-3.5">
        <p className="text-lg">Most Favorited Countries</p>
        <div className="grid grid-cols-4 gap-5 max-w-full">
          <div className="w-[10] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="Picture of a country with a lot of favorites"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Adobrasig
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                10 Favorites
              </p>
            </div>
          </div>
          <div className="w-[10] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="Picture of a country with a lot of favorites"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Adobrasig
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                10 Favorites
              </p>
            </div>
          </div>
          <div className="w-[10] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="Picture of a country with a lot of favorites"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Adobrasig
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                10 Favorites
              </p>
            </div>
          </div>
          <div className="w-[10] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="/countryCardPlaceholder.jpg"
              alt="Picture of a country with a lot of favorites"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Adobrasig
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                10 Favorites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
