// HomeConts3.js
import React, { useState } from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import visit1 from "../../img/visit1.png";
import visit2 from "../../img/visit2.png";
import visit3 from "../../img/visit3.png";
import visit5 from "../../img/visit5.png";
import githubIcon from "../../img/github.png";
import blogIcon from "../../img/blog.png";
import siteIcon from "../../img/site.png";

const HomeConts3 = () => {
  const imageList = [
    { image: visit1, buttonText: "깃허브", icon: githubIcon },
    { image: visit2, buttonText: "블로그", icon: blogIcon },
    { image: visit3, buttonText: "사이트", icon: siteIcon },
    { image: visit5 },
  ];

  const [selectedImage, setSelectedImage] = useState(imageList[0].image);

  const handleSubImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const linkList = [
    "https://github.com/kws04181/visit-exhibition",
    "https://oasis-lily-c04.notion.site/VISIT-EXHIBITION-427a388fed7c4b59a1e8ec207e84a796",
    "https://visit-exhibition-kim.netlify.app/",
  ];

  return (
    <FullpageSection>
      <div className={`homeWrapper3 homeBg`}>
        <div className="projectWrapperLeft">
          <div className="projectRightCon">
            <h1 className="projectText">PROJECTS</h1>
            <p>EXHIBITION - 팀프로젝트(3명)</p>
            <p>한줄 소개 : 전시회 서칭 웹페이지</p>
            <p>진행 기간 : 2023. 02 ~ 2023. 03</p>
            <p>Skills : REACT, REDUX</p>
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
                    className={`button ${
                      index === imageList.length - 1 ? "hidden" : ""
                    }`}
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
              background: `#222 url("${selectedImage}") no-repeat center/100%`,
            }}
          />
        </div>
      </div>
    </FullpageSection>
  );
};

export default HomeConts3;
