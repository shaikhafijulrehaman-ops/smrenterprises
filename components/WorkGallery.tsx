'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface WorkGalleryProps {
  images: string[];
  title?: string;
}

export default function WorkGallery({ images, title = 'Recent Work Projects' }: WorkGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-title">{title}</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => openModal(index)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={image}
                    alt={`Work project ${index + 1}`}
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={28} />
            </button>

            <button
              className="modal-nav modal-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="modal-image-container">
              <img
                src={images[selectedIndex]}
                alt={`Work project ${selectedIndex + 1}`}
                className="modal-image"
              />
            </div>

            <button
              className="modal-nav modal-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <div className="modal-counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
