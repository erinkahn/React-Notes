import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { infoCardsData } from "../../../constants/newData";
import InfoCards from "../../Global/InfoCards/InfoCards";
import { ParallaxProvider, Parallax} from 'react-scroll-parallax';
const squares = './imagesNew/solutions/squares-left.svg';

export default function SolutionTabs() {
  const [key, setKey] = useState("ForInvestors");

  return (
    <>
      <div className="sol-tab-container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="solution-tabs"
        >
          <Tab
            className="sol-tab-content tabOne"
            eventKey="ForInvestors"
            title="For Investors"
          >
            <div className="cards-wrapper">
              {infoCardsData.tabOne.map((one, o) => {
                return (
                  <InfoCards classStyle={`${o % 2 ? 'even' : 'odd'} ${one.class}`} image={one.image} question={one.question} title={one.title} desc={one.desc} key={`card-${o}`}/>
                )
              })}
            </div>
          </Tab>
          <Tab
            className="sol-tab-content tabTwo"
            eventKey="ForRealEstate"
            title="For Real Estate"
          >
            <div className="cards-wrapper">
              {infoCardsData.tabTwo.map((two, t) => {
                return (
                  <InfoCards classStyle={`${t % 2 ? 'even' : 'odd'} ${two.class}`} image={two.image} question={two.question} title={two.title} desc={two.desc} key={`card-${t}`}/>
                )
              })}
            </div>
          </Tab>
        </Tabs>
        <ParallaxProvider>
          <Parallax y={[-40, 40]} className="bkg-squares" tagOuter="figure">
              <img src={squares} alt=""/>
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
}
