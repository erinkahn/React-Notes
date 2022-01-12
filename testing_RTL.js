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

        
        
// QUERY METHODS - https://testing-library.com/docs/queries/about/
   // check to see if the extracted DOM nodes from our components were rendered correctly
   
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
            
          expect(button).toBeDisabled(); // Assert button is disabled
        });


    // example:
        test('Should have button enabled' , () => {
            
          render(<Thought thought={{text:'Hello'}} removeThought={()=>{}}/>)
          
          const button = screen.getByRole('button') // Test status of button here
          
          expect(button).toBeEnabled() // test to see if the button is enabled
        });


    // example:
        test('Should have header text Passing Thoughts',() => {
            
          render(<App/>);
          
          const header = screen.getByText('Passing Thoughts') // Test App header text here  
            
          expect(header).toHaveTextContent('Passing Thoughts') // header contains passing thoughts as its text
        });
