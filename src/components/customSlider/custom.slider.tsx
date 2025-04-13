import React, { useState, useEffect, ReactNode } from "react";
import "./custom.slider.css";

type CustomCarouselProps = {
  children: ReactNode[];
};

function CustomCarousel({ children }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const timeout = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 5000);
      setTimeID(timeout);
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => (
        <div
          className={"slider__item slider__item-active-" + (activeIndex + 1)}
          key={index}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default CustomCarousel;
