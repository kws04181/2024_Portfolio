import React, { useEffect, useState } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import html5 from "../../img/html5.png";
import css from "../../img/css.png";
import sass from "../../img/sass.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import photo from "../../img/photo.png";
import figma from "../../img/figma.png";

const HomeConts1 = () => {
  const profileData = [
    { name: "NAME :", text: "김성원" },
    { name: "BIRTH :", text: "1997.11.09" },
    { name: "PHONE :", text: "010-5752-3539" },
    { name: "MAIL :", text: "kws04182@gmail.com" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const homeWrapper = document.querySelector(".homeWrapper");

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (homeWrapper) {
      homeWrapper.addEventListener("mouseenter", handleMouseEnter);
      homeWrapper.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (homeWrapper) {
        homeWrapper.removeEventListener("mouseenter", handleMouseEnter);
        homeWrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // 빈 의존성 배열은 컴포넌트가 마운트될 때 한 번만 효과가 실행됨

  const stackData = [
    {
      imageUrl: html5,
      title: "HTML5",
      subtext:
        "웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
      percentage: 80,
    },
    {
      imageUrl: css,
      title: "CSS",
      subtext:
        "position, display를 적절히 사용하여 반응형웹을 적용할 수 있습니다.",
      percentage: 80,
    },
    {
      imageUrl: sass,
      title: "SASS",
      subtext:
        "SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을 원활히 할 수 있습니다.",
      percentage: 60,
    },
    {
      imageUrl: js,
      title: "JavaScript",
      subtext:
        "Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.",
      percentage: 70,
    },
    {
      imageUrl: react,
      title: "React",
      subtext:
        "React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
      percentage: 80,
    },
    {
      imageUrl: photo,
      title: "Photo",
      subtext:
        "React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
      percentage: 60,
    },
    {
      imageUrl: figma,
      title: "Figma",
      subtext:
        "React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
      percentage: 60,
    },
  ];

  return (
    <FullpageSection>
      {/* <div className={`homeWrapper ${isHovered ? "fade" : ""} homeBg`}> */}
      <div className={`homeWrapper homeBg`}>
        <div className="textWrapperLeft">
          <div className="profileBg"></div>
          <div className="profileTextCon">
            {profileData.map((item, idx) => (
              <div key={idx} className="listCon">
                <span className="profileLeft">{item.name}</span>
                <span className="profileRight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="textWrapperRight">
          <div className="WrapperRightCon">
            <h1 className="typedText">ABOUT</h1>
            <p>안녕하세요 프론트엔드 개발자를 꿈꾸는 김성원입니다.</p>
            <p>저는 원래 토목과를 전공하였는데요.</p>
            <p>우연한 기회로 웹디자인과 프로그래밍 기초언어를 접하게 되었고,</p>
            <p>컴퓨터 공학에 관심을 갖게 되었습니다.</p>
            <p>개발을 공부하다보니 많은 사람들이 애용하는 서비스를</p>
            <p>직접 개발하고 싶다는 생각을 하게 되었고,</p>
            <p>자연스럽게 프론트엔드 개발자를 꿈꾸게 되었습니다.</p>
            <div className="keywordWrapper">
              <span># 열정있는</span>
              <span># 성실한</span>
              <span># 몰입하는</span>
            </div>
          </div>
          <div className="WrapperRightCon2">
            <div className="skill res">
              <h1 className="title">
                SKILLS <span className="beetween">&</span> TOOL
              </h1>
              {stackData.map((item, idx) => (
                <ul key={idx}>
                  <li>
                    <img src={item.imageUrl} alt={item.title} />
                    <div className="gauge-container">
                      <div
                        className="gauge"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                      <p>{item.percentage}%</p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div className="education">
              <h1 className="title">EDUCATION</h1>
              <ul>
                <li>2022. 11 ~ 2023. 03</li>
                <li>
                  <span>프론트엔드 웹코딩 과정</span>
                </li>
                <li>2021. 01 ~ 2022. 06</li>
                <li>
                  <span>디지털 UI&UX 디자인 과정</span>
                </li>
              </ul>
              <h1 className="titleCareer">CAREER</h1>
              <ul className="careerRes">
                <li>2023. 07 ~ 2023. 10</li>
                <li>
                  <span>기원테크 - 프론트엔드 개발</span>
                </li>
                <li>2021. 09 ~ 2022. 10</li>
                <li>
                  <span>청년옷장 - 웹디자인&AMD</span>
                </li>
                <li>2018. 06 ~ 2018. 08</li>
                <li>
                  <span>나이키 - 의류 판매 사원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
};

export default HomeConts1;
