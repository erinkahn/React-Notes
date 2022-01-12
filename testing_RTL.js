// RTL = REACT TESTING LIBRARY  
    // UI-layer testing framework to make sure components are rendering and working properly
    // https://testing-library.com/docs/react-testing-library/intro/



// SETUP:
    // installation
        npm install @testing-library/react --save-dev

    // import 2 values into test file
       import { render, screen } from '@testing-library/react'

    // create a test
        test('should say hello') () => {
            
            const thought = {text: 'what up'}
            
            render(<Greeting thought={thought}/>);

            screen.debug();
        })

        
        
// QUERY METHODS & EXTRACTING DOM NODES FROM COMPONENTS 
   // list of query methods - https://testing-library.com/docs/queries/about/
   // check to see if the extracted DOM nodes from our components were rendered correctly
        
        
  // 3 TYPES of query methods:
       .getByX
       .queryByX
       .findByX
   

    // 1. .getByX method
        // throws an error and test fails if returns null and DOM node is NOT found

       .getByText() // extracts a DOM element with text that matches a specific string
       .getByRole() // extracts a DOM node by its role type    


        // getByText example:
            import { render, screen } from '@testing-library/react';

            const Button = () => <button type="submit" disabled>Submit</button>;

            test('A "Submit" button is rendered', () => {

              render(<Button/>); // Render the Button component

              const button = screen.getByText('Submit'); // Extract the <button>Submit</button> node
            });


        // getByRole example:
            import { render } from '@testing-library/react';

            const Button = () => <button type="submit" disabled>Submit</button>;

            test('extracts the button DOM node', () => {

              render(<Button/>);  // Render the Button component

              const button = screen.getByRole('button'); // Extract the <button>Submit</button> node
            });


    // TESTING DOM NODES WITH ASSERTIONS
        //install the jest dom library
            npm install --save-dev @testing-library/jest-dom

        // import it in the test file
            @import '@testing-library/jest-dom';

        // test the extracted DOM node with the method screen.getByRole() while using the jest matcher .toBeDisabled()

            const Button = () => <button type="submit" disabled>Submit</button>;

            test('should show the button as disabled', () => {

              render(<Button/>); // render Button component

              const button = screen.getByRole('button'); // Extract <button>Submit</button> Node

              expect(button).toBeDisabled(); // Asserttion button is disabled
            });


        // example:
            test('Should have button enabled' , () => {

              render(<Thought thought={{text:'Hello'}} removeThought={()=>{}}/>)

              const button = screen.getByRole('button') // Test status of button here

              expect(button).toBeEnabled() // assertion - test to see if the button is enabled
            });


        // example:
            test('Should have header text Passing Thoughts',() => {

              render(<App/>);

              const header = screen.getByText('Passing Thoughts') // Test App header text here  

              expect(header).toHaveTextContent('Passing Thoughts') // assertion - header contains passing thoughts as its text
            });


    // 2. .queryByX method
        // returns null if a DOM node is NOT found

            // example: test to see if 'goodbye' isn't already in our header yet
        
            test('Header should not show Goodbye yet', () => {

              render(<App />); // Render App

              const header = screen.queryByText('Goodbye!'); // Attempt to extract the header element

              expect(header).toBeNull(); // Assert null as we have not clicked the button
            });


    // 3. .findByX method
         // returns a promise that resolves after the queried elements eventually render in the DOM
         // query asynchronous elements which will eventually appear in the DOM
            // ex: if the user is waiting for the result of an API call to resolve before data is displayed.
        // async and await can be used

            // example: test to see if the header will display the text 'goodbye' after the button is clicked

                test('should show text content as Goodbye', async () => { // the callback function must be identified as async 
                 
                  render(<App />);  // Render App
                  
                  const button = screen.getByRole('button'); // Extract button node 
                  
                  userEvent.click(button); // click button
                  
                  const header = await screen.findByText('Goodbye!'); // Wait for the text 'Goodbye!' to appear
                  
                  expect(header).toBeInTheDocument(); // Assert header to exist in the DOM
                });



// MIMICKING USER INTERACTIONS
    // list of userEvent methods - https://testing-library.com/docs/ecosystem-user-event

    // install the testing library for events
        npm install --save-dev @testing-library/user-event@12.0.4

    // import the library in the test file
        import userEvent from '@testing-library/user-event';

    // syntax:
        userEvent.interactionType(nodeToInteractWith);
    
        // example:
           import { render, screen } from '@testing-library/react';
           import userEvent from '@testing-library/user-event';
           import '@testing-library/jest-dom';

            const GreetingForm = () => {
              return(
                <form>
                  <label htmlFor="greeting">
                    Greeting:
                  </label>
                  <input type="text" id="greeting" />
                  <input type="submit" value="Submit" />
                </form>
              );
            };

            test('should show text content as Hey Mack!', () => {
             
              render(<GreetingForm />);  // Render the component to test
             
              const textbox = screen.getByRole('textbox');  // Extract the textbox component
              
              userEvent.type(textbox, 'Hey Mack!'); // Simulate typing 'Hey Mack!'
              
              expect(textbox).toHaveValue('Hey Mack!'); // Assert textbox has text content 'Hey Mack!'
            });


        // example: use a method that mimics a user pressing a button
            userEvent.click(button)


        // example: mimic a user typing into an input element with the text 'Did I forget my keys?'
            userEvent.type(input, 'Did I forget my keys?')
