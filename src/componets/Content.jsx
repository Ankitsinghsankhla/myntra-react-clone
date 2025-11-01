import React from "react";
import styles from "./Content.module.css";
import img1 from "../assets/8u8s3Zsn_9b6767bc02084176a62f702c199db349.webp";
import kiaraBig from "../assets/kiaraLEft.webp";
import ranveerRIght from "../assets/ranveerRIght.webp";
import animatedImage from "../assets/animatedImage.gif";
import leftOffer from "../assets/leftOffer.webp";
import rightOffer from "../assets/rightOffer.webp";

import omgDeal from "../assets/omgDeal.webp";

export const Content = () => {

  const imagesList = [
    { src: "image/list1.webp", alt: "Category 1" },
    { src: "image/l2.webp", alt: "Category 2" },
    { src: "image/list1.webp", alt: "Category 3" },
    { src: "image/l2.webp", alt: "Category 4" },
    { src: "image/list1.webp", alt: "Category 5" },
    { src: "image/l2.webp", alt: "Category 6" },
    { src: "image/list1.webp", alt: "Category 7" },
    { src: "image/l2.webp", alt: "Category 8" },
    { src: "image/list1.webp", alt: "Category 9" },
    { src: "image/l2.webp", alt: "Category 10" },
    { src: "image/list1.webp", alt: "Category 11" },
    { src: "image/l2.webp", alt: "Category 12" },
    { src: "image/list1.webp", alt: "Category 13" },
    { src: "image/l2.webp", alt: "Category 14" },
    { src: "image/list1.webp", alt: "Category 15" },
    { src: "image/l2.webp", alt: "Category 16" },
    { src: "image/list1.webp", alt: "Category 7" },
    { src: "image/l2.webp", alt: "Category 18" },
    { src: "image/list1.webp", alt: "Category 19" },
    { src: "image/l2.webp", alt: "Category 20" }
  ];
  return (
    <>
      <picture>
        <div className={styles.pictureContainer}>
          <img src={img1} alt="" />

          <div className={styles.CombineImage}>
            <img src={kiaraBig} alt="" srcSet="" />
            <img src={ranveerRIght} alt="" srcSet="" />
          </div>
          <img src={animatedImage} alt="" />

          <div className={styles.CombineImage}>
            <img src={leftOffer} alt="" srcSet="" />
            <img src={rightOffer} alt="" srcSet="" />
          </div>
          <img src={omgDeal} alt="" srcSet="" />
        </div>

        <div className="PictureList">
          {/* <!-- IMAge Comes Dynamically Throung JS --> */}
          {
          imagesList.map(image => (
           <img src={image.src} alt="" srcSet="" />
          ))
          
        }
        </div>
      </picture>
    </>
  );
};

export default Content;
