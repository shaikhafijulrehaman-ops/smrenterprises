'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface WorkGalleryProps {
  images: string[];
  title?: string;
}

export default function WorkGallery({ images, title = 'Recent Work Projects' }: WorkGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter out images that fail to load
  useEffect(() => {
    const checkImages = async () => {
      setLoading(true);
      const valid: string[] = [];
      for (const src of images) {
        try {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });
          valid.push(src);
        } catch {
          console.warn(`Image not found: ${src}`);
        }
      }
      setValidImages(valid);
      setLoading(false);
    };
    checkImages();
  }, [images]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + validImages.length) % validImages.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % validImages.length);
    }
  };

  // Don't render if loading or no valid images
  if (loading) {
    return null;
  }

  if (validImages.length === 0) {
    return null;
  }

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-title">{title}</h2>
          <div className="gallery-grid">
            {validImages.map((image, index) => (
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
                src={validImages[selectedIndex]}
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
              {selectedIndex + 1} / {validImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
