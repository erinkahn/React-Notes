// Lifecycle 
  // the order methods are called 

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
