// Performance testing a React app

// BASIC RULES OF THUMB:
  // 1. always have width and height on images + aspect ratio in css ( aspect-ratio: width / height; )
  // 2. reserve enough space for dynamic content by creating a container with a height and width so it won't jump when the content comes in

// Considerations:
  // 1. Perceived load speed: how quickly a page can load and render all of its visual elements to the screen.
  // 2. Load responsiveness: how quickly a page can load and execute any required JavaScript code in order for components to respond quickly to user interaction
  // 3. Runtime responsiveness: after page load, how quickly can the page respond to user interaction.
  // 4. Visual stability: do elements on the page shift in ways that users don't expect and potentially interfere with their interactions?
  // 5. Smoothness: do transitions and animations render at a consistent frame rate and flow fluidly from one state to the next


// Metrics to measure:
  // FCP (first contentful paint) - https://web.dev/fcp/
  // LCP (largest contentful paint) should be 2.5 seconds or less - https://web.dev/lcp/
  // FID (first input delay) event should be 100 milliseconds or less - https://web.dev/fid/
  // CLS (cumulative layout shift) should be 0.1 or less - https://web.dev/cls/
  // TTI (time to interactive) - https://web.dev/tti/
  // TBT (total blocking time) - https://web.dev/tbt/


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


// --- TOOLS
// Pageseed Insights - https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect
// Webpage test - https://webpagetest.org/
// Lighthouse in dev tools (check out: avoid large layout shifts to find elements causing issues)
// google search console - https://search.google.com/search-console/welcome
// Jest - https://jestjs.io/ 
// react testing library - https://github.com/testing-library/react-testing-library 
// performance tab in dev tools (look at experience)
