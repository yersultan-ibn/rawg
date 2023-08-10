// interface CardList {
//   title: string;
//   content: string;
// }

// interface CardProps {
//   card: CardList;
// }
import { AiFillWindows, AiOutlineGift, AiFillApple } from 'react-icons/ai';
import { SiNintendo } from 'react-icons/si';
import { FaPlaystation, FaLinux } from 'react-icons/fa';
import { BsXbox, BsThreeDots } from 'react-icons/bs';
import { HiPlusSm } from 'react-icons/hi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
const Card: React.FC<any> = (card) => {
  const {
    name,
    background_image,
    parent_platforms,
    rating,
    genres,
    short_screenshots,
    added,
    metacritic,
    released,
  } = card;
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getPlatformIcon = (slug: string) => {
    switch (slug) {
      case 'mac':
        return <AiFillApple className="text-[20px] mr-[5px]" />;
      case 'pc':
        return <AiFillWindows className="mr-[5px]" />;
      case 'playstation':
        return <FaPlaystation className="mr-[5px]" />;
      case 'linux':
        return <FaLinux className="mr-[5px]" />;
      case 'nintendo':
        return <SiNintendo className="text-[14px] mr-[5px]" />;
      case 'xbox':
        return <BsXbox className="text-[15px] mr-[5px]" />;
      default:
        return null;
    }
  };

  const platformsIcons = parent_platforms.map((item: any) => {
    return getPlatformIcon(item.platform.slug);
  });
  const totalScreenshots = short_screenshots.length;

  console.log('card', card);
  return (
    <div className="card">
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
      <div className="card-content">
        <div className="card-content__top">
          <div className="card-content__platforms">{platformsIcons}</div>
          <div className="card-content__metacritic">{metacritic}</div>
        </div>
        <h2 className="card-content__title">{name}</h2>
        <div className="flex">
          <button className="card-content__button">
            <span className="group-hover:text-black">
              <HiPlusSm className="text-[25px]" />
            </span>
            <span className="text-[13px]">{added}</span>
          </button>
          <button className="card-content__button">
            <AiOutlineGift className="text-[20px]" />
          </button>
          <button className="card-content__button">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
