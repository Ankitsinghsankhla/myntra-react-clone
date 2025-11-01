import styles from "./Slider.module.css";
import { useState, useEffect } from "react";

const imagesSet1 = import.meta.glob("../assets/sliderImage/*.webp", {
  eager: true,
});

const imageUrls = Object.values(imagesSet1).map((img) => img.default);
const imagesPerSlide = 6;
const totalSlides = Math.ceil(imageUrls.length / imagesPerSlide);

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const start = currentIndex * imagesPerSlide;
    return imageUrls.slice(start, start + imagesPerSlide);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.swiper}>
        <div className={styles.imageGroup}>
          {getVisibleImages().map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Slide ${currentIndex * imagesPerSlide + index + 1}`}
              className={styles.slideImage}
            />
          ))}
        </div>

        <button
          className={`${styles.button} ${styles.prev}`}
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className={`${styles.button} ${styles.next}`}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
