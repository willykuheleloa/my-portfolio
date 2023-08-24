import React, { useState, useEffect } from "react";
import "./Landing.css";
import { Card } from "react-bootstrap";
import Daughter from "../../misc/Daughter.jpeg";
import USAF from "../../misc/USAF.jpeg";
import Fishing from "../../misc/Fishing.jpeg";

const images = [Fishing, USAF, Daughter];

const Slider: React.FC = () => {
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
      <Card className="slider-container" style={{ width: "90%" }}>
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
      </Card>
    </>
  );
};

export default React.memo(Slider);
