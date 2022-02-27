import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  fade: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

export const Carousel: React.FC = ({}) => {
  const renderCards = (name: string) => {
    return (
      // <div className="flex flex-col content-center items-center h-[calc(8rem_+_12vw)] w-[calc(9rem_+_12vw)] relative bg-cyan-300 mt-[calc(5rem_+_2vw)] rounded-lg shadow-lg">
      //   <img
      //     className="absolute w-2/5 h-2/5 left-1/2 bottom-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      //     src="/countryCardPlaceholder.jpg"
      //     alt="product"
      //   />
      //   <h4 className="text-white text-center text-[calc(0.6rem_+_0.5vw)] py-0 px-[calc(1rem_+_1vw]">
      //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
      //     voluptate voluptatum expedita fugit adipisci possimus enim ipsa
      //     consequatur! Sequi, tempore! Enim dolores repellendus libero odio
      //     repudiandae ea, tenetur quibusdam animi.
      //   </h4>
      //   <h3 className="pt-4 text-[calc(0.5rem_+_1vw)]">{name} (Uzbekistan)</h3>
      // </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/countryCardPlaceholder.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
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
        {renderCards("Dennis")}
        {renderCards("Derrick")}
        {renderCards("Derby")}
      </Slider>
    </div>
  );
};
