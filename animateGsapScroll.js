// GSAP REACT SCROLL

import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


 const revealRefs = useRef([]);
  revealRefs.current = [];
  
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, { autoAlpha: 0}, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        delay: 0.5 * index,
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100', 
          end: "bottom center+=100", 
          toggleActions: 'play none none reverse'
        }
      });
    });
}, []);



// How to use in code:
// ref={addToRefs} - add that to the element you want to animate
