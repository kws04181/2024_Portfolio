import React, { useEffect } from "react";
import Swiper from "swiper";

const SlideBtn = () => {
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

    // swiperInstance를 함수 내부에서 참조할 수 있도록
    // 함수 외부에서 정의한 변수에 할당
    window.swiperInstance = swiperInstance;

    return () => {
      // 컴포넌트 언마운트 시 Swiper 파기
      swiperInstance.destroy();
    };
  }, []);

  const handleNextButtonNext = () => {
    // 다음 슬라이드로 이동
    window.swiperInstance.slideNext();
  };
  const handleNextButtonPrev = () => {
    // 다음 슬라이드로 이동
    window.swiperInstance.slidePrev();
  };
  return (
    <div className="nav-button">
      <button onClick={handleNextButtonPrev}>
        <span className="material-symbols-outlined arrow_back">
          arrow_back_ios
        </span>
      </button>
      <button onClick={handleNextButtonNext}>
        <span className="material-symbols-outlined arrow_forward">
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default SlideBtn;
