import React, { useState } from "react";
import carousel1 from "../../assets/carousel1.jpeg";
import carousel2 from "../../assets/carousel2.jpeg";
import carousel3 from "../../assets/carousel3.jpeg";
import carousel4 from "../../assets/carousel4.jpeg";
import carousel5 from "../../assets/carousel5.avif";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(totalSlides);
    }
  };

  const handleNext = () => {
    if (activeSlide < totalSlides) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-96">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        <img src={carousel1} className="min-w-full h-96" alt="Slide 1" />
        <img src={carousel2} className="min-w-full h-96" alt="Slide 2" />
        <img src={carousel3} className="min-w-full h-96" alt="Slide 3" />
        <img src={carousel4} className="min-w-full h-96" alt="Slide 4" />
      </div>
      <div className="absolute flex justify-between top-1/2 left-5 right-5 transform -translate-y-1/2">
        <button onClick={handlePrev} className="btn btn-circle btn-ghost">
          ❮
        </button>
        <button onClick={handleNext} className="btn btn-circle btn-ghost">
          ❯
        </button>
      </div>
    </div>
  );
}

export default Carousel;
