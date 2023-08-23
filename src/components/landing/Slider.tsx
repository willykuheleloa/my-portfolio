import React, { useState, useEffect } from "react";
import "./Landing.css";
import { Spinner, Card } from "react-bootstrap";

interface ImageSliderProps {
  images: string[];
}

const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleImageChange = (direction: "next" | "prev") => {
    setIsFading(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        setCurrentImageIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      }
      setIsFading(false);
    }, 500);
  };

  return (
    <>
      <Card
        className="overlay-content-img"
        style={{ height: "70%", width: "45%" }}
      >
        <div className="slider-container">
          <img
            className={`slider-image ${
              isFading ? "slider-fade-out" : "slider-fade-in"
            }`}
            src={images[currentImageIndex]}
            alt={`slide-${currentImageIndex}`}
          />
          <button
            onClick={() => handleImageChange("prev")}
            className="slider-button left"
          >
            ←
          </button>
          <button
            onClick={() => handleImageChange("next")}
            className="slider-button right"
          >
            →
          </button>
        </div>
      </Card>
    </>
  );
};

export default React.memo(Slider);
