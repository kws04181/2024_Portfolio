import React, { useEffect, useState } from "react";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const HomeConts1 = () => {
  const [text, setText] = useState("");
  const phrases = ["안녕하세요:)", "주니어 Frontend 개발자 김성원입니다."];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    let index = 0;
    let direction = 1;

    const updateText = () => {
      if (direction === 1) {
        if (index <= currentPhrase.length) {
          setText(currentPhrase.slice(0, index));
          index++;
        } else {
          direction = -1;
        }
      } else {
        if (index >= 0) {
          setText(currentPhrase.slice(0, index));
          index--;
        } else {
          direction = 1;
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const intervalId = setInterval(updateText, 80);

    return () => clearInterval(intervalId);
  }, [currentPhrase, phraseIndex, phrases.length]);

  return (
    <div>
      <FullpageSection>
        <div className="homeWrapper">
          <div className="textWrapper">
            <h1 className="typedText">{text}</h1>
            <div className="subText">
              <p>저는 원래 토목과를 전공하였는데요.</p>
              <p>
                우연한 기회로 웹디자인과 프로그래밍 기초언어를 접하게 되었고,
              </p>
              <p>컴퓨터 공학에 관심을 갖게 되었습니다.</p>
              <p>개발을 공부하다보니 많은 사람들이 애용하는 서비스를</p>
              <p>직접 개발하고 싶다는 생각을 하게 되었고,</p>
              <p>자연스럽게 프론트엔드 개발자를 꿈꾸게 되었습니다.</p>
            </div>
          </div>
          <div className="stacksWrapper">
            <h1>TECH STACKS</h1>
            <div className="frontEndWrapper">
              <div className="subTit">FrontEnd</div>
              <ul className="stacksConts">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </FullpageSection>
    </div>
  );
};

export default HomeConts1;
