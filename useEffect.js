Side effect:
any code you want to run that React is NOT in charge of handling
code that will have an effect on an outside system

Examples of when to use side effects:
- Fetching Data from an API
- local storage
- Setting up a subscription
- Manually changing the DOM

* maintaining state and heeping the UI in sync with the data, render dom elements -- are NOT side effects

* There are 2 common kinds of side effects:
        * 1. Don’t require cleanup
            * Network requests, manual DOM mutations, logging
        * 2. Do require cleanup 
        
* When your component needs to do something after it renders, react will call your effect function later after performing data fetching or call some other API

* useEffect runs as soon as the component loads (first render)

* The Dom is updated by the time react runs the effects

* If you return a function from the effect, it cleans it up 

* You can use several effects which lets you separate unrelated logic into different effects 

* example:
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => { // cleanup
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}

* You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:

 •  Dependency array - 
    - useEffect “depends” on these state values to decide whether or not to re-render the effect
    - if the value/state has changed on the first render, then you need a callback function like above, otherwise if the value/state has NOT changed after the first render, then it won’t render again - but only one time

* Explanation of above: we pass [count] as the second argument. What does this mean? If the count is 5, and then 
our component re-renders with count still equal to 5, React will compare [5] from the previous render and [5] from the next render. Because all items in the array are the same (5 === 5), React would skip the effect. That’s our optimization.

* A Blank array [] as the second argument means it will render the useEffect function 1 time and that’s it

* If a variable/state called count changes, you would add [count] as the second argument

