import React, { useState } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import landing1 from "../../img/landing1.png";
import landing2 from "../../img/landing2.png";
import landing3 from "../../img/landing3.png";
import landing5 from "../../img/landing5.png";
import githubIcon from "../../img/github.png";
import blogIcon from "../../img/blog.png";
import siteIcon from "../../img/site.png";

const HomeConts6 = () => {
  const imageList = [
    { image: landing1, buttonText: "깃허브", icon: githubIcon },
    { image: landing2, buttonText: "블로그", icon: blogIcon },
    { image: landing3, buttonText: "사이트", icon: siteIcon },
    { image: landing5 },
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0].image);

  const handleSubImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const linkList = [
    "https://github.com/kws04181/LandingPage",
    "https://oasis-lily-c04.notion.site/c3f2b2c6cd1d46e9b3631a7a9a113894",
    "https://han3948.cafe24.com/",
  ];

  return (
    <FullpageSection>
      <div className={`homeWrapper3 homeBg`}>
        <div className="projectWrapperLeft">
          <div className="projectRightCon">
            <h1 className="projectText">PROJECTS</h1>
            <p>법무법인랜딩페이지 - 개인프로젝트</p>
            <p>한줄 소개 : 랜딩페이지 퍼블리싱(프리)</p>
            <p>진행 기간 : 2023. 07</p>
            <p>Skills: HTML, CSS, JS</p>
            <div className="subImg">
              <ul>
                {imageList.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.image}
                      alt={`Poter ${index + 1}`}
                      onClick={() => handleSubImageClick(item.image)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="btnCon">
              {imageList.map((item, index) => (
                <a
                  key={index}
                  href={linkList[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  <button
                    className={`button ${index === imageList.length - 1 ? "hidden" : ""}`}
                  >
                    <img src={item.icon} alt={`${item.buttonText} Icon`} />
                    {item.buttonText}
                  </button>
                </a>
              ))}
            </div>
          </div>
          <div className="projectLeftCon"></div>
        </div>
        <div className="projectWrapperRight">
          <div
            className="projectBg"
            style={{
              background: `wheat url("${selectedImage}") no-repeat center/100%`,
            }}
          />
        </div>
      </div>
    </FullpageSection>
  );
};

export default HomeConts6;
