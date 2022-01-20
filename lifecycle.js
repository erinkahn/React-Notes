// Lifecycle 
  // the order methods are called 
  // the series of events that happen from the creation of a component to its death
  // https://programmingwithmosh.com/javascript/react-lifecycle-methods/


// Component Lifecycle
  // the sequence of stages an instance of a component goes through in the DOM
  // has 3 categories:
      // 1. mounting
      // 2. updating
      // 3. unmounting


// TOP 4 Lifecycle methods 
  // 1. render()                - component is shown (required in all class components) * you CANNOT update state within render()
  // 2. componentDidMount()     - component is BORN & inserted in the DOM tree (things happening: APIs, setTimeout, Intervals, event listeners)
  // 3. componentDidUpdate()    - component is updated (props are changing/updating)
  // 4. componentWillUnmount()  - component is DESTROYED (things happening: remove event listeners, cancel network requests, cleanup functions) * you CANNOT update state within this method


* // lifecycle methods are ONLY used in class components
* // you can only update or modify a components state inside the componentDidUpdate() method or the componentDidMount() method (be cautious updating state in the mount method)
* // you will need to wrap setState() in a condition to check for state or prop changes from previous state, because without it, it can lead to an infinite loop.

    // example:
     componentDidUpdate(prevProps) {
       if (this.props.userName !== prevProps.userName) { //don't forget to compare the props
         this.fetchData(this.props.userName); // wrapped in conditional
       }
      }


// other lifecycle methods: (USE SPARINGLY / NOT OFTEN - can cause performance issues)
  // 5. shouldComponentUpdate()   - returns boolean, if you need to tell React not to re-render for a certain state or prop change
  // 6. static getDerivedStateFromProps(props, state) - NEW & safer than componentWillReceiveProps(), it renders on every fire, is called before render()
  // 7. getSnapshotBeforeUpdate()  - NEW & safer than componentWillUpdate(), called b4 DOM updates


// Mounting 
  // an item being inserted into the DOM ( for ex: using componentdidmount() for fetching API data )
  // makes sure the component has rendered to the DOM BEFORE bringing in the data ).

      // example:
      import React, {Component} from 'react'

      class App extends Component {
        state = {
          data: [],
        }

        // Code is invoked after the component is mounted/inserted into the DOM tree.
        componentDidMount() {
          const url =
            'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

          fetch(url)
            .then((result) => result.json())
            .then((result) => {
              this.setState({
                data: result,
              })
            })
        }

        render() {
          const {data} = this.state

          const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
          })

          return <ul>{result}</ul>
        }
      }

      export default App
