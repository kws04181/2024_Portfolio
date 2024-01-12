import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import HomeConts1 from "./fullPage/HomeConts1";
import HomeConts2 from "./fullPage/HomeConts2";
import HomeConts3 from "./fullPage/HomeConts3";
import HomeConts4 from "./fullPage/HomeConts4";

const Home = () => {
  return (
    <>
      <Fullpage>
        <div className="navi">
          <FullpageNavigation />
        </div>
        <FullPageSections>
          <HomeConts2 />
          <HomeConts1 />
          <HomeConts3 />
          <HomeConts4 />
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Home;
