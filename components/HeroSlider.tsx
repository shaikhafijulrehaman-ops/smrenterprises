'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    bgImage: '/images/banners/smrmainbanner.jpeg',
  },
  {
    id: 2,
    bgImage: '/images/banners/paints.jpeg',
  },
  {
    id: 3,
    bgImage: '/images/banners/cement.jpeg',
  },
  {
    id: 4,
    bgImage: '/images/banners/pestcontrol.jpeg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          />
          <div className="hero-slide-overlay" />
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
