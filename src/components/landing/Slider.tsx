import React, { useState, useEffect } from "react";
import "./Landing.css";

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const Slider: React.FC<ImageSliderProps> = ({ images, interval = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, interval / 2);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images, interval]);

  return (
    <div className="slider-container">
      <img
        className={`slider-image ${
          isFading ? "slider-fade-out" : "slider-fade-in"
        }`}
        src={images[currentImageIndex]}
        alt={`slide-${currentImageIndex}`}
      />
    </div>
  );
};

export default Slider;
