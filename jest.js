// JEST
  // a testing framework library that provides:
    // 1. an assertion library  - functions that validate functionality
    // 2. a test runner         - executes test and provides test summaries
  // used a lot for testing React apps


// installing JEST
    npm install jest --save-dev

  
// creating tests
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

  // run the jest commmand to see an output with a passing test
    jest
    
  // in the terminal a green PASS square should show up as well as these lines:
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        1.059s
    Ran all test suites.
    
    
// testing asynchronous code

    

// creating / using mocks within tests
