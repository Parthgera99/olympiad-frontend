"use client"
import { useState, useRef } from 'react';
import s from './carousel.module.css';
import Image from 'next/image';

type CarouselProps = {
  cards: {
    BgImageLink: string;
    Heading: string;
    Description: string;
    Image: string;
    TextColor: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const isSwiping = useRef(false);

  const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if ('touches' in e) {
      startX.current = e.touches[0].clientX;
    } else {
      startX.current = e.clientX;
    }
    isSwiping.current = true;
  };

  const handleSwipeMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!isSwiping.current) return;

    let currentX = 0;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }

    if (startX.current - currentX > 50) {
      goToNext(); // Swipe left to right
      isSwiping.current = false;
    } else if (currentX - startX.current > 50) {
      goToPrev(); // Swipe right to left
      isSwiping.current = false;
    }
  };

  const handleSwipeEnd = () => {
    isSwiping.current = false;
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={s.carouselContainer}
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseMove={handleSwipeMove}
      onMouseUp={handleSwipeEnd}
    >
      <div
        className={s.carouselContent}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${s.card} ${index === currentIndex ? s.active : ''}`}
            style={{
              backgroundImage: `url(${card.BgImageLink})`,
              color: card.TextColor,
            }}
          >
            <h2>{card.Heading}</h2>
            <p>{card.Description}</p>
            <Image src={card.Image} alt={card.Heading} width={300} height={300}/>
          </div>
        ))}
      </div>

      <div className={s.navigationDots}>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`${s.dot} ${index === currentIndex ? s.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
