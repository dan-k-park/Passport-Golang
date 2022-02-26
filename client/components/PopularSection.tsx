import React from "react";
import { Carousel } from "./Carousel";

export const PopularSection: React.FC = ({}) => {
  const renderCards = () => {
    return (
      <img
        className="w-full h-1/2 rounded-t-lg"
        src="/countryCardPlaceholder.jpg"
        alt="product"
      />
    );
  };
  return (
    <div>
      <Carousel />;
    </div>
  );
};
