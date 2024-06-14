import { useContext, useEffect, useState } from "react";
import { DataContext } from "../pages/index/index.page";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./components/Button";
import { RootData } from "../Types";
import HeaderSection from "./components/HeaderSection";

function OurServices() {
  const [servicesData, setServicesData] = useState<RootData | null>(null);
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const data = useContext(DataContext);
  useEffect(() => {
    if (data) {
      setServicesData(data.data);
    }
  }, [servicesData, data]);
  return (
    <div className="my-6">
      <section className="mx-auto">
        <HeaderSection label="Our Services" />
        <p className="text-primaryBcg font-bold text-xl md:text-2xl">
          <span className="text-white">Content is the face of a brand </span>
          requires a continuous and well-maintained process to ensure that the
          brand&apos;s messages align with customer needs.
        </p>
        <p className="text-white mt-3 text-justify">
          We offer an end-to-end production process that guarantees a thorough
          and meticulous approach from start to finish, guaranteeing that every
          aspect of content creation is done to the highest standard.
        </p>
      </section>

      <section className="my-6 mx-auto">
        <h2 className="font-bold text-lg text-white py-5">
          Production Flow
        </h2>
        <Swiper spaceBetween={10} slidesPerView={2}>
          {servicesData &&
            servicesData.services.production.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.asset_thumbnail} alt="" />
                <h2 className="text-primaryBcg font-bold text-lg text-center">
                  {item.asset_name}
                </h2>
                <p className="text-xs md:text-base text-white text-center">
                  {item.asset_description}
                </p>
              </SwiperSlide>
            ))}
        </Swiper>
        {servicesData?.services.production.length === 0 && (
          <p className="text-white text-center mx-auto my-2 opacity-55">
            No Production found
          </p>
        )}
        <Button
          className="mt-5 mx-auto px-10"
          label="Call Us Now"
          onClick={handleScrollDown}
        />
      </section>

      <section className="my-6 mx-auto">
        <h2 className="font-bold text-lg text-white py-5">Post House</h2>
        <div className="text-center flex flex-row flex-wrap justify-start gap-7.5">
          {servicesData &&
            servicesData.services.post_house.map((item) => (
              <div
                className="w-[45%] my-5 flex flex-col gap-3 mx-auto no-underline text-text cursor-context-menu"
                key={item.asset_id}
              >
                <img
                  src={item.asset_thumbnail}
                  alt="production-houses services"
                />
                <span className="text-white">{item.asset_name}</span>
              </div>
            ))}
          {servicesData?.services.post_house.length === 0 && (
            <p className="text-white mx-auto my-2 opacity-55">
              No Post House found
            </p>
          )}
        </div>
      </section>

      <section className="my-6 mx-auto">
        <h2 className="font-bold text-lg text-white py-5">
          License Software
        </h2>
        <div className="w-full flex justify-center gap-3 sm:gap-5 items-center">
          {servicesData &&
            servicesData.services.software.map((item) => (
              <img
                className="w-[10%]"
                src={item.software_thumbnail}
                alt={item.software_name}
                key={item.software_id}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default OurServices;
