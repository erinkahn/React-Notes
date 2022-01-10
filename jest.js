// JEST 
  // https://jestjs.io/docs/getting-started
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
   
      // STEP 1. set up test  
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
        
        // STEP 2. writing assertions (validate features of your code)
          // how we expect our progr am to run
          // used everytime we write a test
          // it's commonly used with a matcher method: .toBe() which is what the expected value is
            toBe()    // - used to compare simple data types for equality
            toEqual() // - used to perform deep equality comparisons ===
            
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

          // other Matcher methods: https://jestjs.io/docs/expect
            .toBeDefined()   // verifies that a variable is not undefined 
            .not             // verifies the opposite result is true, used before another matcher
            .toContain()     // verifies that an item is in an array
            .toBeTruthy()    // verifies whether the value is truthy or not

            // example:
              expect(actualIngredients).toBeDefined();
              expect(actualIngredients[0] === "Basil").toBeTruthy();
              expect(actualIngredients).not.toContain("Ice Cream");

            // longer example:
                test("convert array of country data objects to array of countries", ()=> {
                    const inputObject = [ // arrange
                      {name: "Argentina", capital: "Buenos Aires"},
                      {name: "Belize", capital: "Belmopan"},
                      {name: "Bolivia", capital: "Sucre"}
                    ]
                    const expectedValue = ["Argentina","Belize","Bolivia"]
                    const actualValue = countryExtractor(inputObject)  //act

                    //assertions
                      expect(actualValue).toEqual(expectedValue);
                      expect(actualValue[0]).toBe("Argentina");
                      expect(actualValue).toContain("Belize");
                      expect(actualValue[2] === "Bolivia").toBeTruthy();
                      expect(actualValue[3]).not.toBeDefined()
                })
      

      
// Complex Unit Testing with Asynchronous code (the unsafe way)
    // Part 1: the done parameter
        // PROBLEM: Jest is not aware that it must wait for asynchronous callbacks to resolve before finishing a test therefore it wont see the failing expect() assertion
        // SOLUTION: You can add a done parameter in the test() callback function so JEST knows not to finish the test without the done function being called
            // example:

                test('get the full recipe for pesto', (done) => {   // done parameter added (jest will now wait until it is called before finishing the test)
                    const dish = "pesto";   // arrange
                    const expectedRecipe = {
                      'Basil': '2 cups',
                      'Pine Nuts': '2 tablespoons',
                      'Garlic': '2 cloves',
                      'Olive Oil': '0.5 cups',
                      'Grated Parmesan': '0.5 cups'
                    };
                  
                    findRecipe(dish, (actualRecipe)=> {   // act
                      try {
                        expect(actualRecipe).toEqual(expectedRecipe);   // assertion made
                        done();   // callback function is called - guarantees expect() to be seen and any errors will be caught
                      } catch (error) {
                        done(error);
                      }
                    });
                });
      
    // Part 2: returning a promise
      // you can use async and await for handling promises, 
      // async is placed before the function that contains asynchronous code
      // await is placed in front of the async function call
      // JEST will wait for any await statements to resolve before continuing
      
        // example:

          test("get the full recipe for pesto", async () => { // async callback
            // arrange
            const dish = "Pesto"
            const expectedRecipe = {
              'Basil': '2 cups',
              'Pine Nuts': '2 tablespoons',
              'Garlic': '2 cloves',
              'Olive Oil': '0.5 cups',
              'Grated Parmesan': '0.5 cups'
            }
             
            const actualRecipe = await findRecipe(dish); // act / await
            expect(actualRecipe).toEqual(expectedRecipe); // assertion
          });



// Mock Functions (the safer more efficient way to test with REST APIs)
  // PART 1:
    // functions that bypass an API call and return values that we control instead
    // in other words - creating a mock function and then replacing the real function with the mocked one

    // 4 steps to create a mocked function:
        // step 1: mock directory
            // create a mocked directory __mocks__/ in the same directory as the module we want to mock
            __mocks__/
              
        // step 2: mock file
            // inside the directory, create a file with the same name as the module that will be mocked
        
        // step 3: mock function
            // create a module with the functionality we want by using a mock function https://jestjs.io/docs/mock-function-api
              jest.fn()

        // step 4: export the module
              
            // example:
                  // utils/__mocks__/api-request.js
                  const apiRequest = jest.fn(() => {  // callback function
                      return Promise.resolve({  // returns custom promise object
                        status: '',
                        data: {}
                      })
                  })
                  export default apiRequest;

  // PART 2:
    // steps to replace the actual apiRequest function with the mocked one we created:
         // step 1: import
            // in the test file, import the real function to test it as it would work if no mock existed
              import apiRequest from './api-request.js';

         // step 2: override
            // use the jest.mock() function to override the value with the mocked one defined in the __mocks__/ folder
              jest.mock('./api-request.js');

      // controlling mocked functions with methods https://jestjs.io/docs/mock-function-api
        .mockResolvedValueOnce() // a method that tells what the next call to the apiRequest() function will resolve to    

        // example:

            // file: __tests__/recipes.js
            import { findRecipe } from './recipes.js'; 
            import apiRequest from './api-request.js'; // import the actual module
            
            jest.mock('./api-request.js'); // tell Jest to use the mocked version!

            test("get the full recipe for a dish", async () => {
                // arrange  
                const dish = "Pesto";
                const expectedValue = { "Magical Deliciousness": "3 cups" };
                const mockResponse = {  // set the resolved value for the next call to apiRequest  
                  status: "mock",
                  data: { "Magical Deliciousness": "3 cups" }
                }
                
                apiRequest.mockResolvedValueOnce(mockResponse);    
                const actualRecipe = await findRecipe(dish); // act  
                expect(actualRecipe).toEqual(expectedValue); // assertion
            });

