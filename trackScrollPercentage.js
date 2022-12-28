import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FullHeightGradient, FullHeightGradient2 } from "../full-height-gradient";
import wave from '../../assets/img/heroStrings/wave.svg';

const IntroCopyComponent = () => {
  // DOM REFERENCES
  const ref = useRef();
  const splitRef = useRef();
  const subheadsRef = useRef();
  const subhead1Ref = useRef();
  const subhead2Ref = useRef();

  // STATES
  const headingText = 'Success, solved.';
  const splitHeading = headingText.split(" ");
  const [isHeadingLoaded, setIsHeadingLoaded] = useState(false);
  const [isHeadingFaded, setIsHeadingFaded] = useState(false);
  const [isSubhead1Faded, setIsSubhead1Faded] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isSubhead2Faded, setIsSubhead2Faded] = useState(true);
 
  //Heading Load By Words
  useLayoutEffect(() => {
    window.addEventListener("load", (event) => {
      event.preventDefault();
      setIsHeadingLoaded(true)
    });
  }, []);

  //Heading Scroll Opacity
  const handleHeadingFadeOut = () => {
    const bottomOfHeading = splitRef.current.getBoundingClientRect().top;
    const bottomOfSub1 = subhead1Ref.current.getBoundingClientRect().bottom;

    const heroHeight = ref.current.getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; 
    const scrollPercentage = (scrollPosition / heroHeight) * 100;

    if (scrollPercentage >= 17) {
      setIsHeadingFaded(true)
    } else {
      setIsHeadingFaded(false)
    }

    if (scrollPercentage >= 19 && scrollPercentage <= 35) {
      setIsSubhead1Faded(false)
    } else {
      setIsSubhead1Faded(true)
    }

    if (scrollPercentage >= 24 && scrollPercentage <= 35) {
      setIsHighlighted(true)
    } else {
      setIsHighlighted(false)
    }

    if (scrollPercentage >= 32 && scrollPercentage <= 35) {
      setIsSubhead2Faded(false)
    } else {
      setIsSubhead2Faded(true)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleHeadingFadeOut, true);
    return (() => {
        window.removeEventListener("scroll", handleHeadingFadeOut, true);
    })
  });

  //parallax
  useLayoutEffect(() => {
    if (window.innerWidth > 991) {
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
      });
    }
  }, []);


  return <div id="intro-copy-component hero-section" className="intro-copy-component">
    <FullHeightGradient />
    <FullHeightGradient2 />
    
    <div ref={ref} className="intro-copy-wrapper">
      <div className="hero-section">
        <div className="waves-bg" style={{ backgroundImage: `url(${wave}?${Math.random()})` }} />
        <div data-speed=".75" className="container parallax-bg">
          <h1 ref={splitRef} className={`heading large ${isHeadingLoaded ? 'fadeIn slow' : null} ${isHeadingFaded ? 'fadeHalfwayOut' : null}`}>
            {splitHeading.map((word, i) => {
              return <span key={`word-${i}`}>{word}</span>
            })}
          </h1>
          <div id="description-section" className="description-section">
            <div ref={subheadsRef} className="container">
              <div className="description intro-description-section">
                <p ref={subhead1Ref} className={`subhead1 hL ${isSubhead1Faded ? 'fadeHalfwayOut' : 'fadeIn'}`}>Tell us <span className={`${isHighlighted ? 'highlightText' : null}`}>where you want to </span> be tomorrow.</p>
                <p ref={subhead2Ref} className={`subhead2 ${isSubhead2Faded ? 'fadeHalfwayOut' : 'fadeIn'}`}>Our people will get you there with cutting-edge legal and commercial insight.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default IntroCopyComponent;
