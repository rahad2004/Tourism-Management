import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  const [spots, setSpotS] = useState([]);
  useEffect(() => {
    const spotLoad = async () => {
      const response = await fetch("http://localhost:5000/tourists-spots");

      const resData = await response.json();

      setSpotS(resData);
    };

    spotLoad();
  }, []);

  if (spots.length > 6) {
    const slice = spots.slice(0, 5);
    setSpotS(slice);
  }

  console.log(spots);
  return (
    <div>
      <div>
        <Swiper
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={true}
          modules={[Navigation, Pagination, Autoplay]}
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
      <div className="tourists-spots-section container mx-auto">
        <h2 className="text-center text-2xl font-bold my-5">Tourist Spots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example of a tourist spot card */}
          <div className="card">
            <img
              src="image_url"
              alt="Spot Name"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Spot Name</h3>
              <p>Country Name</p>
              <Link to="/tourists-spot-detail" className="btn btn-primary mt-3">
                View Details
              </Link>
            </div>
          </div>
          {/* Repeat this for more spots */}
        </div>
      </div>
    </div>
  );
};

export default Home;
