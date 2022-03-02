import useEmblaCarousel from "embla-carousel-react";
import React from "react";

export const Carousel: React.FC = ({}) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="relative flex-slide">Slide 1</div>
        <div className="relative flex-slide">Slide 2</div>
        <div className="reltive flex-slide">Slide 3</div>
      </div>
    </div>
  );
};
