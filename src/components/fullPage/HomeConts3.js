// HomeConts3.js
import React, { useState } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import poter1 from "../../img/poter1.png";
import poter2 from "../../img/poter2.png";
import poter3 from "../../img/poter3.png";
import poter4 from "../../img/poter4.png";
import githubIcon from "../../img/github.png";
import blogIcon from "../../img/blog.png";
import siteIcon from "../../img/site.png";

const HomeConts3 = ({props}) => {
  const imageList = [
    { image: poter1, buttonText: "깃허브", icon: githubIcon },
    { image: poter2, buttonText: "블로그", icon: blogIcon },
    { image: poter3, buttonText: "사이트", icon: siteIcon },
    { image: poter4 },
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0].image);

  const handleSubImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const linkList = [
    "https://github.com/kws04181/GreenComputerStudy",
    "https://oasis-lily-c04.notion.site/Porter-69d0bdf883864b31b5d98c27f6b1834d",
    "https://elegant-clafoutis-9867b1.netlify.app/",
  ];

  return (
    <FullpageSection>
      <div className={`homeWrapper3 homeBg`}>
        <div className="projectWrapperLeft">
          <div className="projectRightCon">
            <h1 className="projectText">PROJECTS</h1>
            <p>POTER - 리뉴얼</p>
            <p>한줄 소개 : 포터 코리아 웹페이지</p>
            <p>진행 기간 : 2023. 04 ~ 2023. 05</p>
            <p>Skills : HTML, CSS, JS</p>
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
              background: `white url("${selectedImage}") no-repeat center/100%`,
            }}
          />
        </div>
      </div>
    </FullpageSection>
  );
};

export default HomeConts3;
