import React, { useEffect } from "react";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SlideItme from "./SlideItme";
import SlideBtn from "./SlideBtn";

const HomeConts3 = () => {
  useEffect(() => {
    // Swiper 초기화
    const swiperInstance = new Swiper(".swiper-container", {
      direction: "horizontal",
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 1000,
      loop: true,
      effect: "flip",
      flipEffect: {
        rotate: 30,
        slideShadows: false,
      },
      initialSlide: 0,
    });

    return () => {
      // 컴포넌트 언마운트 시 Swiper 파기
      swiperInstance.destroy();
    };
  }, []);

  return (
    <div className="homeWrapper3">
      <FullpageSection>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* 슬라이드 아이템들 */}
            <div className="swiper-slide">
              <SlideItme text="PROJECT" />
            </div>
            <div className="swiper-slide">
            <SlideItme text="PROJECT" />
            </div>
            <div className="swiper-slide">
              <SlideItme text="PROJECT" />
            </div>
            <div className="swiper-slide">
            <SlideItme text="PROJECT" />
            </div>
          </div>
          <SlideBtn />
        </div>
      </FullpageSection>
    </div>
  );
};

export default HomeConts3;
