import Image from "next/image";
import { pics } from "./imageData";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  //   console.log(pics);

  return (
    <div className="flex flex-col h-full w-full  items-center mt-28">
      <div>
        <h1 className="text-4xl mb-10">choose from over 1000 destination</h1>
      </div>
      <ImageSlider pics={pics} />
    </div>
  );
};

export default Hero;
