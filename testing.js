// Performance testing a React app

// BASICS:
  // LCP (largest contentful paint) should be 2.5 seconds or less
  // FID (first input delay) event should be 100 milliseconds or less
  // CLS (cumulative layout shift) should be 0.1 or less

// --- Web Vitals

  // check if web-vitals is installed in package.json
  // if not, install it 
  // npm install web-vitals

  // then, in index.js paste
    import {getLCP, getFCP, getFID, getCLS} from 'web-vitals';

    getCLS(console.log); // cumulative layout shift (loading)
    getFCP(console.log); // first contentful paint (loading)
    getFID(console.log); // first input delay (interactivity)
    getLCP(console.log); // largest contentful paint (visual stability)
    getTTFB(console.log); // time to first byte (redirectconnect/request time)

  // then inspect and see the issues going on


// Pageseed Insights - https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect
// Webpage test - https://webpagetest.org/



// --- Jest - https://jestjs.io/ 
// --- react testing library - https://github.com/testing-library/react-testing-library 
