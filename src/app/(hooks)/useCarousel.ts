"use client";

import React from "react";

function useCarousel(itemsCount: number) {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setActiveSlide((currentValue) => {
        if (currentValue < itemsCount - 1) {
          // console.log(currentValue);
          return currentValue + 1;
        } else return 0;
      });
    }, 3000);
  }, []);

  return { activeSlide };
}

export default useCarousel;
