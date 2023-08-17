import { AiFillWindows, AiOutlineGift, AiFillApple } from 'react-icons/ai';
import { SiNintendo } from 'react-icons/si';
import { FaPlaystation, FaLinux } from 'react-icons/fa';
import { BsXbox, BsThreeDots } from 'react-icons/bs';
import { HiPlusSm } from 'react-icons/hi';
import { useState } from 'react';
import CardCarousel from './CardCarousel/CardCarousel';
import CardShow from './CardShow/CardShow';

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
      <CardCarousel totalScreenshots={totalScreenshots} short_screenshots={short_screenshots} />
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
        <CardShow released={released} genres={genres} />
      </div>
    </div>
  );
};

export default Card;
