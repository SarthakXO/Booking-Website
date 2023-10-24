"use client";
import Image from "next/image";
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const ImageSlider = ({ pics }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = pics.length;

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    // console.log(currentImage);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    // console.log(currentImage);
  };

  return (
    <div className=" max-h-[800px] mx-auto ">
      {pics.map((pic, index) => {
        return (
          <div
            key={index}
            className={
              index == currentImage
                ? `opacity-[1] ease-in duration-300 flex flex-row items-center gap-10`
                : `opacity-0 `
            }
          >
            <FcPrevious size={35} onClick={previousImage} />
            <div>
              <Image src={pic.image} alt={"image"} width={1000} height={800} />
            </div>
            <FcNext size={35} onClick={nextImage} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
