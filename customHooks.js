// custom hooks
  // when you want to reuse the same logic in multiple components
  // allow us to write functions once and reuse them whenever they are needed and hence obeying the DRY principle.


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





