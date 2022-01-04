// Performance testing a React app 
  // https://web.dev/fast


// BASIC RULES OF THUMB:
  // 1. always have width and height on images + aspect ratio in css ( aspect-ratio: width / height; )
  // 2. optimize your images & use webp as main src and jpg as fallback
  // 3. lazy load images and video
  // 4. reserve enough space for dynamic content by creating a container with a height and width so it won't jump when the content comes in (example: news banner)
  // 5. to avoid web fonts from flashing unstyled text or invisible text use: font-display: optional, <Link rel=preload>


// Considerations:
  // 1. load speed
  // 2. execution speed / response time 
  // 4. are elements shifting
  // 5. smooth transitions / animations


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
    npm install web-vitals

  // then, in index.js paste
    import {getLCP, getFCP, getFID, getCLS} from 'web-vitals';

    getCLS(console.log); // cumulative layout shift (loading)
    getFCP(console.log); // first contentful paint (loading)
    getFID(console.log); // first input delay (interactivity)
    getLCP(console.log); // largest contentful paint (visual stability)
    getTTFB(console.log); // time to first byte (redirectconnect/request time)

  // then inspect and see the issues going on


// --- Serve images in next-gen formats 
  // use webp image formats instead of jpg or png, but also have a fallback for older browsers
  // https://github.com/DonRai/react-image-webp
  
  // install webp in your react app
    npm install react-image-webp --save-dev
  
  // in your component import:
    import {isWebpSupported} from 'react-image-webp/dist/utils';
  
  // add your conditional 
    isWebpSupported()
     ? <img src="./path/to/img.webp" />
     : <img src="./path/to/img.png" />
  


// --- TOOLS
    // Lighthouse in dev tools (check out: avoid large layout shifts to find elements causing issues)
    // Pageseed Insights - https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect
    // Webpage test - https://webpagetest.org/
    // google search console - https://search.google.com/search-console/welcome
    // Jest - https://jestjs.io/ 
    // react testing library - https://github.com/testing-library/react-testing-library 
    // performance tab in dev tools (look at experience, inside the Summary tab look for largest contentful paint)
