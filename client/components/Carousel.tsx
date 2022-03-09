import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const placeholders = [
  "/placeholder3.jpg",
  "placeholder4.jpg",
  "placeholder5.jpg",
];
export const Carousel = () => {
  const options = {
    delay: 4000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(options),
  ]);

  const renderCarouselItem = (img: string) => {
    return (
      <div className="group relative bg-black w-full rounded-lg">
        <img
          className="w-full rounded-lg group-hover:opacity-50"
          src={img}
          alt="product"
        />
        <div className="absolute w-full flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in-out duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-2xl"> Sample Text</p>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-hidden w-[50vw] cursor-pointer" ref={emblaRef}>
      <div className="flex">
        <div className="flex-slide mx-[50px] rounded-lg">
          {renderCarouselItem("/placeholder3.jpg")}
        </div>
        <div className="flex-slide mx-[50px]">
          {renderCarouselItem("/placeholder4.jpg")}
        </div>
        <div className="flex-slide mx-[50px]">
          {renderCarouselItem("/placeholder5.jpg")}
        </div>
      </div>
    </div>
  );
};
