// Performance testing a React app

// Web Vitals
  // check if web-vitals is installed in package.json
  // if not, install it 
  // npm install web-vitals

  // then, create a file called WebVitals.js and paste this code
  
    import { useEffect } from "react";
    import { getCLS, getFID, getLCP, getTTFB } from "web-vitals";

    const WebVitals = () => {
      useEffect(() => {
        getTTFB(console.log);
        getCLS(console.log);
        getFID(console.log);
        getLCP(console.log);
      }, []);

      return null;
    };

    export default WebVitals;

  // inside App.js import the WebVitals component like so:

    import WebVitals from './test/WebVitals'; // for testing
    
  // and render it inside your app component
    <WebVitals/>
