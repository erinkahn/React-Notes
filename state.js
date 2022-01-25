// state
  // the data we import that is subject to change
  // we can render things from state and show users state based data in the UI


// two types of components: stateful & stateless components
  // one kind of component has state and the other kind does not
  // the GOAL is to try to make your components SIMPLE and STATELESS so that diff components can be reused even if you dont plan to reuse a componenet


  // 1: stateful / Container / Smart
      // keep track of changing data

       class Main extends Component {
         constructor() {
           super()
           this.state = {
             books: []
           }
         }
         render() {
           return <BooksList books={this.state.books} />;
         }
      }


  // 2: stateless / Presentational / Dumb 
      // print out what is given to them via props, or always render the same thing

        const BooksList = ({books}) => {
           return (
             <ul>
               {books.map(book => {
                 return <li>book</li>
               })}
             </ul>
           )
        }
        
// When do I make a component stateful or stateless?
  // 1. Type out or visualize your website as if it were one component. Busy, right? Break it down from there into smaller components.
  // 2. You’ll need state somewhere when information dynamically changes, like a user’s current favorite songs or top scores.  Aim to have a parent component keep all the information, and pass it down to its stateless children components.
        
        class Parent extends Component {
          constructor() {
            super()
            this.state = {
              books: [],
              favoriteAuthors: []
            }
          }
          render() {
            return (
              <div>
                <Books books={this.state.books} />
                <FavoriteAuthors favoriteAuthors={this.state.favoriteAuthors} />
              </div>
            )
          }
        }
        
        
// Stateful components CAN be reused      
   // example: a form that takes text input that will change
   // if you're reusing stateful components, there is a chance you need to do less work and change some things around in your code
       
        
// questions to ask yourself:
   // 1. Which of these child components can have its parent hold state instead, so the child component can just receive state as props?
   // 2. Are there a lot of components keeping track of state, what could be simplified?
   // 3. How else can I minimize the number of components holding state?
   // 4. And the worst question of all: Is there any data that is useful for a child component to keep track of using state, with no parental assistance?
     
        
// when should a child component keep track of its own state?
   // 1. when the data is necessary but not a major theme of your project
   // 2. when it is user-created data that the user MAY submit LATER (example: FORMS)
        
        // example of a child component keeping track of its own data
          class TypeStuffIn extends Component {
            constructor() {
              super()
              this.state = {
                input: []
              }
              this.handleChange = this.handleChange.bind(this)
            }
            handleChange() {
              this.setState({
                [event.target.name]: event.target.value 
              })
            }
            render() {
              return (
                <div>
                  <input type=“text” name=“input” value={this.state.input} onChange={this.handleChange} />
               </div>
              )
            }
          }
        // Something the user is typing in isn’t exactly something you want to keep track of in your parent component’s state. 
        // There’re probably more interesting things you want to keep track of in a parent component, like data your user requested, versus every single line of the user’s address as they make a purchase. 
        // For aesthetic and neatness purposes, state like that is perfectly viable to keep in the child component. Your boss will see that and be like “oh yeah, that’s boring — good move.”
          
          
          
          
        
