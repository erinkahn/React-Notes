// Lifecycle 
  // the order methods are called 
  // the series of events that happen from the creation of a component to its death
  // https://programmingwithmosh.com/javascript/react-lifecycle-methods/


// Component Lifecycle
  // the sequence of stages an instance of a component goes through in the DOM


// Lifecycle methods are ONLY used in class components
  // 1. componentDidMount()     - component is BORN & inserted in the DOM tree (things happening: APIs, setTimeout, Intervals, event listeners)
  // 2. render()                - component is shown (required in all class components) 
  // 3. componentDidUpdate()    - component is updated (props are changing/updating)
  // 4. componentWillUnmount()  - component is DEAD (things happening: remove event listeners, cancel network requests, cleanup functions)


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
