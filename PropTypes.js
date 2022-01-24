// PropTypes
  // ensure that components are using the data type that the programmer (or you) intended



// install
  npm install – -save prop-types



// PropType data types
  PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.array, PropTypes.func, PropTypes.object, and PropTypes.symbol
    // others: https://reactjs.org/docs/typechecking-with-proptypes.html


  // example (static object inside the class)
    import PropTypes from 'prop-types'

    export default class State extends Component {
       static propTypes = {
          optionalStateName: PropTypes.string, // string, NOT required to pass corresponding prop
          requiredOnChange: PropTypes.func.isRequired,  // takes a function and IS required
          optionalCity: PropTypes.instanceOf(City)  // takes a class isntance of a class named 'city'
       }
    }
  
    
  // example (dynamic object outside the class)
    import PropTypes from 'prop-types'

    export default class Person extends Component {
       render() {
          const pizzaPreference = (this.props.likesPizza) ? "does" : "does not"
          return (
             <h1>{this.props.name} is {this.props.age} years old and {pizzaPreference} like pizza!<h1>
          )
       }
    }
    Person.propTypes = {
       name: PropTypes.string.isRequired,
       age: PropTypes.number.isRequired,
       likesPizza: PropTypes.bool.isRequired
    }
  


// defaultProps
  // when PropType IS optional and NOT .isRequired, you can use defaultProps
  // these make sure a prop as a value incase nothing gets passed
  // prevent errors when no props are passed
  // use these for every optional PropType

    export default class Car extends Component {
       static defaultProps = {
          company: "Ford"   // even if NO company prop is passed to the Car class, it has "Ford" as a fallback
       }
       static propTypes {
          company: PropTypes.string
       }
       render() {
          <h1>My car is made by {this.props.company}</h1>
       }
    }







