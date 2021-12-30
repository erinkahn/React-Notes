// custom hooks
  // when you want to reuse the same logic in multiple components
  // allow us to write functions once and reuse them whenever they are needed and hence obeying the DRY principle.


// create the custom hook, then use it in a component like so:
    
  // 1. custom hook code:
    function useMyCustomHook(someDataKey) {

        const [someValue, setSomeValue] = useState(null);

        useEffect(() => {
            setSomeValue(useSomeOtherHook(someDataKey));
        }, [someDataKey]);

        return someNewValue;
    }

  // 2. consumer component code
    function MyAwesomeComponent({someDataKey}) {

        const someValue = useMyCustomHook(someDataKey);

        return (<p>The new value is {someValue}</p>);
    }



// examples:


    // --- get scroll position = useScrollPos()

      import { useLayoutEffect, useState } from "react";

      export const useScrollPos = () => {

        const [scrollPos, setScrollPos] = useState({
          x: 0,
          y: 0
        });

        useLayoutEffect(() => {

          const getScrollPos = () =>
            setScrollPos({
              x: window.pageXOffset,
              y: window.pageYOffset
            });

          window.addEventListener("scroll", getScrollPos);

          return () => window.removeEventListener("scroll", getScrollPos);
        }, []);

        return (
          <div>
            {scrollPos.x} {scrollPos.y}
          </div>
        );
      };


    // --- then in App.js or your component file call the hook

      import { useScrollPos } from "./useScrollPos";

      const App = () => {
        const scrollPos = useScrollPos();
        console.log(scrollPos.x, scrollPos.y);

        return <p>your scroll position is: {scrollPos}</p>;
      };

      export default App;




  // ---- get data = useAxios()

    import {useState, useEffect} from 'react';
    import axios from 'axios';

    export default function useAxios(url) {
        const [data, setData] = useState();
        const [error, setError] = useState();
        const loading = !data && !error;

        useEffect(() => {
            axios.get(url).then((response) => {
                setData(response.data);
            }).catch(error => {
                setError(error);
                console.log(error, 'oops, the request is not working at the moment')
            });
        }, [url]);

        return {
            data,
            loading,
            error
        }
    }


  // ---- then in your component file...

  import useAxios from "../hooks/useAxios";
  const API_KEY = 'fe577b382a8038af35c74879570e375e';

  export default function ComponentName() {
      const url = `https://api.openweathermap.org/data/2.5/onecall?&units=imperial&lat=${position.lat}&lon=${position.long}&exclude=daily&appid=${API_KEY}`;
      const {data, loading, error} = useAxios(url);
      if (loading || !data) return '...';
      if (error) return '';

      return (<>
          <div className="data-container">
              {data}
          </div>
      </>)
  }
