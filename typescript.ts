// typescript
  // a superset of JS
  // built by Microsoft in 2012
  // a programming language similar to JS but with new features and a type system
  // file type is .ts
  

// type system - shows bugs, clarifies structure, refactors code
  

// HOW IS CODE TRANSPILED ? 
  // code is transpiled into JS that checks if code has correct standards and shows errors if it doesnt
  // transpiles and outputs a JS file
  // compile and check for errors with command:
    tsc


// why typescript instead of JS?
  // best for larger applications especially for run time

    
// variables & value types    
  // you can declare variables with an INITIAL value that can never be reassigned a different value type
  // if we try to assign it to a different value type then we get an error
    
    let order = 'first'; // order will always equal a string and can NEVER be a boolean or number or null etc
    order = 1;      // Incorrect - will error 'Type 1 is not assignable to type string'
    order = '1';    // correct


// ANY
  // when a variable is declared but given no value, ts says it has a value type of ANY
  // a ANY type variable can be reassigned to ANY value type without error
  
  let onOrOff; // no initial value set so ts considered it to be ANY type
  onOrOff = 1;      // correct
  onOrOff = false;  // also correct
  
  // this can cause problems and break our code if we assign it to a wrong type so don't use it alot


// type annotation
  // you tell ts what type something is or will be by using type annotation with a colon after the variable name
  let name : strong;
  name = 'sara';
  name = 31; // error - type 'number' is not assignable to type 'string'
  // these get automatically removed when it compiles to js


//tsconfig.json 
  // tells the typescript compiler what files to run on and allows you to choose what default rules to enforce
  // lives in your project root folder

    {
      "compilerOptions": { // rules to enforce when compiling
        "target": "es2017", // version of JS
        "module": "commonjs", // uses commonjs syntax to import and export modules
        "strictNullChecks": true // variables only can have null or undefined if they are explicitly assigned those values
      },
      "include": ["**/*.ts"] // what files to apply the rules to (this case is checking every single file with .ts at the end)
    }
  // https://www.typescriptlang.org/docs/handbook/compiler-options.html


