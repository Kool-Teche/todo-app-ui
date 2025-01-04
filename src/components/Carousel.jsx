import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import Button from "./Button";

import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import logo from "../assets/icons/react.svg";

const IMAGES = [
  {
    id: 1,
    src: image1,
    alt: "image-1",
    text: "Capturing Moments, Creating Memories",
  },
  {
    id: 2,
    src: image2,
    alt: "image-2",
    text: "Text 2",
  },
  {
    id: 3,
    src: image3,
    alt: "image-3",
    text: "Text 3",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full rounded-lg"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden rounded-lg h-full">
        {IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <p className="absolute z-30 bottom-16 left-1/2 transform -translate-x-1/2 text-white text-3xl text-center">
              {image.text}
            </p>
          </div>
        ))}
        <div className="p-4 relative flex justify-between items-center">
          <img className="ml-2" src={logo} alt="logo" />
          <Button
            containerClass="bg-[rgba(255,255,255,0.1)] h-8 text-[14px] text-white flex items-center justify-center"
            title="Back to website"
            rightIcon={
              <span className="flex items-center pl-2 cursor-pointer">
                <FaArrowRight size={12} />
              </span>
            }
          />
        </div>

        {/* Carousel Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {IMAGES.map((image, index) => (
            <span
              key={image.id}
              className={`h-1 w-8 rounded-full ${
                currentIndex === index ? "bg-white w-11" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
