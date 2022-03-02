import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden w-[50vw]" ref={emblaRef}>
      <div className="flex">
        <div className="relative flex-slide mx-[50px]">
          <img
            className="w-full rounded-lg"
            src="/placeholder3.jpg"
            alt="product"
          />
        </div>
        <div className="relative flex-slide mx-[50px]">
          <img
            className="w-full rounded-lg"
            src="/placeholder4.jpg"
            alt="product"
          />
        </div>
        <div className="relative flex-slide mx-[50px]">
          <img
            className="w-full rounded-lg"
            src="/placeholder5.jpg"
            alt="product"
          />
        </div>
      </div>
    </div>
  );
};
