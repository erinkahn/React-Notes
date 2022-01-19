// React Helmet 
  // a document head manager npm library 
  // component that makes it easy to manage and dynamically set what’s in the document’s head section. This makes server-side     rendering and React Helmet a dynamic duo for creating apps that are SEO and social media-friendly.


//install
npm install --save react-helmet


//import inside index.js
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App/>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root');
)


// optional step 1 - create a new file inside components folder called seo.js
    import * as React from "react";
    import SEO from "../seo.json";
    import { Helmet } from 'react-helmet-async';

    const Seo = () => {
      // If url is set to 'glitch-default', we use the hostname for the current page
      // Otherwise we use the value set in seo.json
      const url = SEO.url === 'glitch-default' ? window.location.hostname : SEO.url

      // React Helmet manages the content of the page head such as meta tags
      // We use the async package https://github.com/staylor/react-helmet-async
      return <Helmet>
        <title>{SEO.title}</title>

        <meta
          name="description"
          content={SEO.description}
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta
          property="og:description"
          content={SEO.description}
        />
        <meta
          property="og:image"
          content={SEO.image}
        />

        <meta name="twitter:card" content="summary" />
      </Helmet>
    };

    export default Seo;


// optional step 2 - create new file seo.json
    {
      "glitch-help-instructions": "For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a   trailing slash, like 'https://www.example.com'",
      "title": "Hello React!",
      "description": "A simple React single page app, built with Glitch. Remix it to get your own!!!!",
      "url": "glitch-default",
      "image": "https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908"
    }

// optional step 3 - remove head code inside index.html since you created it above
      <!DOCTYPE html>
      <html lang="en">
        <head>

          <!-- This head is now empty and used in the seo.js file -->

          <title>Hello React!</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="https://glitch.com/favicon.ico" />
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/index.jsx"></script>
        </body>
      </html>
