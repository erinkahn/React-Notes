// PropTypes
  // https://programmingwithmosh.com/react/how-to-use-props-in-react/
  // ensure that components are using the data type that the programmer (or you) intended
  // reusable throughout different components, keeping the same prop, but can render different values
  
// You can define components without PropTypes. 
  // But, without PropTypes or some form of type checking, we run into the risk of passing in a wrong data type
  // to a component, which could cause a crash or some unexpected outcome in your application.



// install
  npm install –-save prop-types


// PropType data types
    PropTypes.number 
    PropTypes.string
    PropTypes.bool
    PropTypes.array
    PropTypes.func
    PropTypes.object
    PropTypes.symbol
    // others: https://reactjs.org/docs/typechecking-with-proptypes.html


  // * STATIC object inside the class
    import PropTypes from 'prop-types';

    export default function State {
       static propTypes = {
          optionalStateName: PropTypes.string, // string, NOT required to pass corresponding prop
          requiredOnChange: PropTypes.func.isRequired,  // takes a function and IS required
          optionalCity: PropTypes.instanceOf(City)  // takes a class isntance of a class named 'city'
       }
    }
  
    
  // * DYNAMIC object outside the class
    import PropTypes from 'prop-types';

    export default function Person {
       const pizzaPreference = (this.props.likesPizza) ? "does" : "does not";
       return (
         <h1>{this.props.name} is {this.props.age} years old and {pizzaPreference} like pizza!<h1>
       )
    }
      
    Person.propTypes = {  
       name: PropTypes.string.isRequired,
       age: PropTypes.number.isRequired,
       likesPizza: PropTypes.bool.isRequired
    }
    
    // now you can use Person in multiple components 
    // you must keep the same props (name, age, likesPizza), but the values can be different
        // example: one component can say Jon is 28 years old and does like pizza 
          // while another component says Anna is 12 years old and does not like pizza



// isRequired 
  // tells React that the particular prop is required by the component
  // Anytime the component is called it needs to be passed the props that are marked as isRequired
  // This ensures that we don’t accidentally miss certain props while calling components.



// defaultProps
  // when PropType IS optional and NOT .isRequired, you can use defaultProps
  // these make sure a prop as a value incase nothing gets passed
  // prevent errors when no props are passed
  //*** Always define explicit defaultProps for all optional props.

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
    
    
    // Default values for props
    Heading.defaultProps = {
      message: 'Sample Default Text',
      content: [],
      size: 0,
      onPress: () => {},
      isReady: false
    } 
    
    




