import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

export const Carousel: React.FC = ({}) => {
  const renderCards = () => {
    return (
      <div className="relative bg-cyan-300 flex flex-col content-center items-center h-[calc(8rem_+_12vw)] w-[calc(9rem_+_12vw)] mt-[calc(5rem_+_2vw)] rounded-lg shadow-lg">
        <img
          className="absolute w-2/5 h-2/5 left-1/2 bottom-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          src="/countryCardPlaceholder.jpg"
          alt="product"
        />
        <h4 className="text-white text-center text-[calc(0.6rem_+_0.5vw)] py-0 px-[calc(1rem_+_1vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          voluptate voluptatum expedita fugit adipisci possimus enim ipsa
          consequatur! Sequi, tempore! Enim dolores repellendus libero odio
          repudiandae ea, tenetur quibusdam animi.
        </h4>
        <h3 className="pt-4 text-[calc(0.5rem_+_1vw)]">Dennis (Uzbekistan)</h3>
      </div>
    );
  };

  return (
    <div className="w-[50vw] flex flex-col content-center">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>
        {renderCards()}
        {renderCards()}
        {renderCards()}
      </Slider>
    </div>
  );
};
