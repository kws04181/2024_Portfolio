import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import html5 from "../../img/html5.png";
import css from "../../img/css.png";
import sass from "../../img/sass.png";
import js from "../../img/js.png";
import react from "../../img/react.png";

const HomeConts3 = () => {
  const stackData = [
    {
      imageUrl: html5,
      title: "HTML5",
      subtext:
        "웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.",
    },
    {
      imageUrl: css,
      title: "CSS",
      subtext:
        "position, display를 적절히 사용하여 반응형웹을 적용할 수 있습니다.",
    },
    {
      imageUrl: sass,
      title: "SASS",
      subtext:
        "SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을 원활히 할 수 있습니다.",
    },
    {
      imageUrl: js,
      title: "JavaScript",
      subtext:
        "Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.",
    },
    {
      imageUrl: react,
      title: "React",
      subtext:
        "React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
    },
  ];

  return (
    <FullpageSection>
      <div className="homeWrapper3">
        <h1 className="title">
          MY <span>SKILLS.</span>
        </h1>
        <ul className="stacksList">
          {stackData.map((data, index) => (
            <div key={index}>
              <li>
                <img src={data.imageUrl} alt={data.title} />
              </li>
              <div className="titComtainer">
                <h1>{data.title}</h1>
                <p>{data.subtext}</p>
              </div>
            </div>
          ))}
        </ul>
        <div className="rightBg">
          <h1 className="rightTit">
            MY <span>SKILLS.</span>
          </h1>
        </div>
      </div>
    </FullpageSection>
  );
};

export default HomeConts3;
