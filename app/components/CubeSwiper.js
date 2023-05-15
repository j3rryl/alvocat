"use client"; // this is a client component
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import Image from "next/image";

export default function CubeSwiper({imageUrls}) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageUrls?.map((item)=>{
          return (
          <SwiperSlide key={item}>
          <Image src={item}/>
          </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}
