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
  return (
    <div className="w-[50vw]">
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
        <div className="bg-rose-400 max-w-[250px] rounded-lg shadow-lg">
          {/* <img
            className="w-[100px] rounded-t-lg"
            src="/countryCardPlaceholder.jpg"
            alt="product"
          /> */}
          <div className="px-6 py-4">
            <h4 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight text-white">
              Adobrasig
            </h4>
            <p className="text-white">10 Visits</p>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
};
