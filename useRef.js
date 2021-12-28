// useRef
  // returns a 'ref' object that can hold any value
  // a reference to something
  // values are accessed from the .current property of the returned object


// syntax
  const ref = useRef(null)

  
// when to use
  // you want to access/get the value/attribute/text/etc of an element an element in the DOM 

  
// example
  
  const AccessDOM = () => {
    const textAreaEl = useRef(null); // ref created
      
    const handleBtnClick = () => {
      textAreaEl.current.value = "hello world"; // on click, get value of ref (ref is the textarea now)
      textAreaEl.current.focus();
    };

    return (
      <section>
          <button onClick={handleBtnClick}>Focus and Populate Text Field</button>

          <label htmlFor="story">The input box below will be focused and populated with some text (imperatively) upon clicking the button above.</label>
          <textarea ref={textAreaEl} id="story" rows="5" cols="33" />
      </section>
    );
};


// example

    function Timer() {
      const setIntervalRef = useRef();

      useEffect(() => {
        const intervalID = setInterval(() => {
          // something to be done every 100ms
        }, 100);

        setIntervalRef.current = intervalID;  // // this is where the interval ID is saved in the ref object 
          
        return () => {
          clearInterval(setIntervalRef.current);
        };
     });
    

