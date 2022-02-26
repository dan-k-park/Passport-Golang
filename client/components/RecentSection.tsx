import React from "react";
import { Carousel } from "./Carousel";

export const RecentSection: React.FC = ({}) => {
  return (
    <div className="flex flex-col w-full px-0 py-20 content-center items-center">
      <p className="text-2xl lg:text-3xl font-medium text-center">
        Where Others Have Been
      </p>
      <Carousel />
    </div>
  );
};
