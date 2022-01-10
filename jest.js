// JEST
  // a testing framework library that provides:
    // 1. an assertion library  - functions that validate functionality
    // 2. a test runner         - executes test and provides test summaries
  // used a lot for testing React apps


// installing JEST
    npm install jest --save-dev

  
// configuring JEST
  // create a test file called 'something.test.js'
  // place the file in a folder called __tests__
  // to test this file, in the terminal write the command
    jest __tests__/something.test.js

  // the JEST API looks for files inside a __tests__/ directory or any file that ends in either .test.js or .specs.js

  // OR
  // if you want to run tests on ALL files that have the .test.js or .spec.js extension or are inside a __tests__/ folder
  // simply run the jest command on its own
    jest
     
  // in the something.test.js file enter a test to make sure it's all working
    test("Jest properly installed and configured!", ()=>{})

  // run the jest commmand on the something.test file to see the output with a passing test
    jest __tests__/something.test.js
    
  // in the terminal a green PASS square should show up as well as these lines:
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        1.059s
    Ran all test suites matching /__tests__\/something.test.js/i.
    

  // best practices
      // command line flags allow you to customize the terminal output from the test

      // the --coverage flag allows you to get a report of what lines of code were actually tested
      // it outputs in the terminal AND also is created in a directory called coverage/ at runtime
       jest __tests__/ --coverage

      // from the output report, you can see 4 categories the code is being analyzed in
        // 1. statement coverage  (% of statements executed)
        // 2. branch coverage     (% of edge cases executed)
        // 3. function coverage   (% of cuntions called during the test)
        // 4. line coverage       (% of executable lines in source file executed)

      // if we want to avoid typing out the command each time, we can write it in package.json so we can run it quicker through npm
        "scripts": {
          // other scripts...
          "test": "jest __tests__/ --coverage"
        }

      // then run
      npm test

      
 
    
// unit testing
      // designed to set the smallest unit of your code, like a single function
      // each function should be tested in isolation by creating separate containers for our testing logic using 
   
      // step 1. set up test  
          // syntax:
            test('string describing purpose of test, callbackfunction with test logic/assertions, optional timeout in milliseconds)

            // example (inside the __tests__/recipes.test.js file:

              import {findRecipe, getIngredients} from './recipes.js';

              test('get recipe for pesto', async() => { // asynchronous callback from API
                // testing logic for findRecipe() 
              }, 10000);

              test('get only the ingredients list for pesto', () => { // not asynchronous and uses default timeout
                // testing logic for getIngredients()
              });

          // each time you create a test() function, it creates a separate entry in the terminal when we run 
            npm test
        
        // step 2. writing assertions (validate features of your code)
          // how we expect our progr am to run
          // used everytime we write a test
          // it's commonly used with a matcher method: .toBe() which is what the expected value is
          // syntax:
              expect().toBe()

              expect(2+2).toBe(4) // 2+2 is the expression you want to test and 4 is the expected value of the expression
          
          // Arrange, Act Assert pattern
            // ARRANGE: first declare the input (pestoRecipe) to be passed to the functions being tested and the expected output (expectedIngredients)
            // ACT:     next pass the input variables (actualIngredients) in the function tested and store the result in a new variable
            // ASSERT:  last, compare the values of the expected output (expectedIngredients) with the actual output (actualIngredients) using expect() and .toEqual()
              // example: 
            
                //inside file: __tests__/recipes.test.js
                import { getIngredients } from "./recipes.js"; // import the function to test

                test("Get only the ingredients list for Pesto", () => {
                  //arrange
                  const pestoRecipe = { // input
                    'Basil': '2 cups',
                    'Pine Nuts': '2 tablespoons',
                    'Garlic': '2 cloves',
                    'Olive Oil': '0.5 cups',
                    'Grated Parmesan': '0.5 cups'
                  }
                  const expectedIngredients = ["Basil", "Pine Nuts", "Garlic", "Olive Oil", "Grated Parmesan"] // expected output
                  const actualIngredients = getIngredients(pestoRecipe); //act
                  expect(actualIngredients).toEqual(expectedIngredients) //assertions
                });




      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
