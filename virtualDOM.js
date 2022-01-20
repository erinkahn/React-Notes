// part 1
// THE PROBLEM WITH THE REGULAR DOM:
  // (document object model) represents the UI of your app and each time a state changes, the DOM updates
  // if there are LOTS of changes to the DOM, it will affect performance and make it SLOWWWW
  // the re-rendering and re-painting of the UI causes issues and the more components you have, the more slow the DOM updates will be
  // sooo introducing the virtual dom..... 


// part 2
// THE VIRTUAL DOM
  // a virtual representation of the DOM
  // everytime state changes, the virtual COM updates INSTEADDDDD of the real DOM

  // the VD is muchhh faster and efficient...why?
    // if the state of any elements change in an app, a new virtual DOM tree is created 
    // then the new VD tree is compared to the previous virtual DOM tree = called “diffing”
    // then the virtual DOM calculates the best possible method to make these changes to the real DOM. 
    // This means there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.
      // (so basicallly its creating a new tree, but it's only going to re-render what has changed and not what hasn't changed)
    // updates to the real DOM are sent in BATCHES instead of sending updates for every single change in state



