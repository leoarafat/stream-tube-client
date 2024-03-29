import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

const Coming = () => {
  return (
    <div className="mt-[100px]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[450px]"
            src={"https://i.ytimg.com/vi/QsNNbm9RBO0/maxresdefault.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[450px]"
            src={"https://i.ytimg.com/vi/rocCoMduPXI/maxresdefault.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[450px]"
            src={
              "https://material.asset.catchplay.com/PAR-IN-001-A0069/artworks/posters/PAR-IN-001-A0069-P1200.jpg?hash=1677210022"
            }
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Coming;
