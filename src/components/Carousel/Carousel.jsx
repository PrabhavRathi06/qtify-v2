import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

import styles from "./Carousel.module.css";

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.carouselWrapper}>
      
      {/* CUSTOM BUTTONS */}
      <LeftNavigation />
      <RightNavigation />

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: ".left-arrow",
          nextEl: ".right-arrow",
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1440: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;