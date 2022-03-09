import React from "react";

export const Footer: React.FC = ({}) => {
  return (
    <div className="h-[25px] flex justify-end items-center">
      <p className="text-xl mr-[15px] mb-[15px]">
        Passport © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};
