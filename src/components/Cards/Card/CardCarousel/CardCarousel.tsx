import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
  totalScreenshots: number;
  short_screenshots: any[];
};

const CardCarousel = ({ totalScreenshots, short_screenshots }: Props) => {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentScreenshotIndex}
      >
        {short_screenshots.map((screenshot: any, index: number) => (
          <div key={screenshot.id}>
            <img
              className="h-[270px] object-cover"
              src={screenshot.image}
              alt={`Screenshot ${index + 1}`}
              onMouseEnter={() => setCurrentScreenshotIndex(index)}
            />
          </div>
        ))}
      </Carousel>
      <div className="card-dots">
        {Array.from({ length: totalScreenshots }).map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === currentScreenshotIndex ? 'white' : 'hsla(0,0%,100%,.7)',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            className="w-[35px] h-[3px] rounded-2xl mx-[4px]"
            onMouseEnter={() => setCurrentScreenshotIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
