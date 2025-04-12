import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div>
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={true}
          zoom={true}
          modules={[Navigation, Pagination, Autoplay, Zoom]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/hum-hum-wa-slide_1-2020-07-15-5f0ed09a729a3.jpg)] h-[700px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="flex justify-center items-center gap-2 text-white text-3xl">
                  <FaLocationDot className="text-orange-600 font-bold text-6xl"></FaLocationDot>{" "}
                  Hum Hum Waterfall, Kamalgonj,Bangladesh
                </h1>
                <Link to={"/tourists-spots"}>
                  <button className="btn btn-secondary">Visit Our Spot </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/nafakhum-slide_3-2020-06-15-5ee779d852f1f.jpg)] h-[700px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="flex justify-center items-center gap-2 text-white text-3xl">
                  <FaLocationDot className="text-orange-600 font-bold text-6xl"></FaLocationDot>{" "}
                  Nafakhum, Thanci, Chattogram, Bangladesh
                </h1>
                <Link to={"/tourists-spots"}>
                  <button className="btn btn-secondary">Visit Our Spot </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(https://beautifulbangladesh.gov.bd/storage/backend/images/upload/catagory/sylhet-2020-07-05-5f0164978957f.jpg)] h-[700px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="flex justify-center items-center gap-2 text-white text-3xl">
                  <FaLocationDot className="text-orange-600 font-bold text-6xl"></FaLocationDot>{" "}
                  Tanguar Haor, Sunamganj, Bangladesh
                </h1>
                <Link to={"/tourists-spots"}>
                  <button className="btn btn-secondary">Visit Our Spot </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/saint-mart-slide_2-2020-09-06-5f5453dfe034e.jpg)] h-[700px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="flex justify-center items-center gap-2 text-white text-3xl">
                  <FaLocationDot className="text-orange-600 font-bold text-6xl"></FaLocationDot>{" "}
                  Saint Martin, Teknaf, Chattogram,Bangladesh
                </h1>
                <Link to={"/tourists-spots"}>
                  <button className="btn btn-secondary">Visit Our Spot </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(https://internationalyouthclub.org/wp-content/uploads/2021/07/beach-2084350_1920-1-1.jpg)] h-[700px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
              <div className="flex flex-col items-center gap-5">
                <h1 className="flex justify-center items-center gap-2 text-white text-3xl">
                  <FaLocationDot className="text-orange-600 font-bold text-6xl"></FaLocationDot>{" "}
                  Goa Sea Beach, Goa, India
                </h1>
                <Link to={"/tourists-spots"}>
                  <button className="btn btn-secondary">Visit Our Spot </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
