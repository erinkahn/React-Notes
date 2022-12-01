import React from "react";
import Container from "./components/Global/Container/Container";
import Header from "./components/Global/Header/Header";
import Hero from "./components/Global/Hero/Hero";
import Sidebar from "./components/Global/Sidebar/Sidebar";
import Benefits from "./components/Home/Benefits/Benefits";
import Trusted from "./components/Home/Trusted/Trusted";
import Carousel from "./components/Home/Carousel/Carousel";
import Footer from "./components/Global/Footer/Footer";
import Contact from "./components/Contact/contact";
import KeyAttributes from "./components/Home/KeyAttributes/KeyAttributes";
import WhyUs from "./components/Home/WhyUs/WhyUs";
import ContactUs from "./components/Global/ContactUs/ContactUs";
import SolutionTabs from "./components/Solutions/SolutionTabs/SolutionTabs";
import Resources from "./components/Resources/Resources";
import Login from "./components/Login/login";
import GetInTouch from './components/DataManagement/GetInTouch';
import DataQuality from "./components/DataManagement/DataQuality";
import CorePrinciples from "./components/DataManagement/CorePrinicples";
import LegalAndCompliance from "./components/DataManagement/LegalAndCompliance";
import Privacy from "./components/Privacy/Privacy";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import { heroData, sidebarData, contactUs, privacyData, stats } from "./constants/newData";

export default function RouterSwitch() {
  return (
    <HelmetProvider>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>Sandbytes</title>
              <meta name="description" content="" />
            </Helmet>
            <Home />
          </Route>

          <Route path="/solutions">
            <Helmet>
              <title>Sandbytes Solutions</title>
            </Helmet>
            <SolutionsPage />
          </Route>

          <Route path="/data-management">
            <Helmet>
              <title>Sandbytes Data Management</title>
            </Helmet>
            <DataManagementPage />
          </Route>

          <Route path="/resources">
            <Helmet>
              <title>Sandbytes Resources</title>
            </Helmet>
            <ResourcesPage />
          </Route>

          <Route path="/login">
            <Helmet>
              <title>Sandbytes Login</title>
            </Helmet>
            <LoginPage />
          </Route>

          <Route path="/contact">
            <Helmet>
              <title>Learn More About Sandbytes</title>
              <meta name="description" content="" />
            </Helmet>
            <ContactPage />
          </Route>

          <Route path="/privacy">
            <Helmet>
              <title>Privacy Policy</title>
            </Helmet>
            <PrivacyPage/>
          </Route>
        </Switch>
      </Container>
    </HelmetProvider>
  );
}

function Home() {
  return (
    <div className="App homepage">
      <Container>
        <Hero
          leftBorder={heroData.home.leftBorder}
          bgVideo={heroData.home.bgVideo}
          title={heroData.home.title}
          desc={heroData.home.desc}
          descClass={heroData.home.descClass}
        />
        <Sidebar
          backgroundColor={sidebarData.home.bg}
          leftBorder={sidebarData.home.leftBorder}
          title={sidebarData.home.title}
          classStyle={sidebarData.home.class}
        />
        <Benefits />
        <Trusted />
        <Carousel />
        <KeyAttributes number={stats.stat} numberTwo={stats.stat2}/>
        <WhyUs />
        <ContactUs />
        <Footer />
      </Container>
    </div>
  );
}

function SolutionsPage() {
  return (
    <div className="App solutions-page" style={{ overflow: "hidden" }}>
      <Container>
        <Hero 
          bgVideo={heroData.solutions.bgVideo} 
          title={heroData.solutions.title} 
          desc={heroData.solutions.desc} 
          descClass={heroData.solutions.descClass}/>
        <SolutionTabs />
        <ContactUs leftBorder={contactUs.leftBorder}/>
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  );
}

function DataManagementPage() {
  return (
    <div className="App data-management-page" style={{ overflow: "hidden" }}>
      <Container>
        <Hero
          bgVideo={heroData.dataManagement.bgVideo}
          title={heroData.dataManagement.title}
          desc={heroData.dataManagement.desc}
          descClass={heroData.dataManagement.descClass}
        />
        <GetInTouch></GetInTouch>
        <LegalAndCompliance />
        <DataQuality />
                <Sidebar
          backgroundColor={sidebarData.dataManagement.bg}
          title={sidebarData.dataManagement.title}
          classStyle={sidebarData.dataManagement.class}
        />
        <CorePrinciples />
        <ContactUs leftBorder={contactUs.leftBorder}/>
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  );
}

function ResourcesPage() {
  return (
    <div className="App resources-page" style={{ overflow: "hidden" }}>
      <Container>
        <Hero 
          bgVideo={heroData.resources.bgVideo} 
          title={heroData.resources.title} 
          desc={heroData.resources.desc} 
          descClass={heroData.resources.descClass} 
        />
        <Resources />
        <ContactUs leftBorder={contactUs.leftBorder}/>
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="App login-page" style={{ overflow: "hidden" }}>
      <Container>
        <Login />
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="App contact-page" style={{ overflow: "hidden" }}>
      <Container>
        <Contact />
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="App privacy-page" style={{ overflow: "hidden" }}>
      <Container>
        <Privacy title={privacyData.title} content={privacyData.content}/>
        <Footer contact="contact-footer"></Footer>
      </Container>
    </div>
  )
}