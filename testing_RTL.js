// RTL = REACT TESTING LIBRARY  
    // UI-layer testing framework to make sure components are rendering and working properly
    // tests components frmo end-user's perspective rather than testing the implementation and logic of the components
    // https://testing-library.com/docs/react-testing-library/intro/



// SETUP:
    // installation
        npm install @testing-library/react --save-dev

    // import 2 values into test file
       import { render, screen } from '@testing-library/react'

    // create a test 

        // create a test description and callback function
        test('renders learn react link', () => { 
            
            // render a component (possible to render props too)
            render(<Component theme="dark"/>);
                   
           // use a query function for the test ( look for the text learn react on the page when we rendered <Component/>)
           // assign it to a variable
            const linkElement = screen.getByText(/learn react/i);  // '/learn react/i' is case insensitive so it will find the text no matter if its capitalized or not
            
           // assert the result by checking if the text was found or not in the <Component/>
            expect(linkElement).toBeInTheDocument();
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



// THE waitFor() METHOD
    // test components that disappear asynchronolously

    // import the waitFor function frmo the testing library in the testing file
        import { waitFor } from '@testing-library/react';

    // syntax:
        await waitFor(() => {
            //something happens   
        }
                      
    // the method can also optionally accept an options object as a second argument which can be used to control how long to wait for before aborting and much more.
        // options - https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
                   
                      
    // example: header is removed after 250 ms when the button is clicked
        
        import { waitFor, render, screen } from '@testing-library/react';
        import '@testing-library/jest-dom';
        import userEvent from '@testing-library/user-event';
        import { Header } from './heaader.js'

        test('should remove header display', async () => {
          
          render(<Header/>) // Render Header
          
          const button = screen.getByRole('button'); // Extract button node 
          
          userEvent.click(button); // click button

          await waitFor(() => { // Wait for the element to be removed asynchronously
              
            const header = screen.queryByText('Hey Everybody');
              
            expect(header).toBeNull()
          })
        });


    // example: thought will eventually be removed from the dom

        import {App} from '../App.js'
        import { waitFor, render, screen } from '@testing-library/react'; 
        import '@testing-library/jest-dom';
        import userEvent from '@testing-library/user-event';

        test('Should show Thought to be removed' , async () => {
          render(<App/>);
          const input = screen.getByRole('input');
          const submit = screen.getByRole('submit')
          userEvent.type(input, 'I have to call my mom.');
          userEvent.click(submit)

          await waitFor(() => // after the submit button was clicked, wait, then check if the text was removed
            const thought = screen.queryByText('I have to call my mom.');
            expect(thought).toBeNull();
          })
        });
