// typescript
  // a superset of JS
  // built by Microsoft in 2012
  // a programming language similar to JS but with new features and a type system
  // file type is .ts
  

// type system - shows bugs, clarifies structure, refactors code
  

// HOW IS CODE TRANSPILED ? 
  // code is transpiled into JS that checks if code has correct standards and shows errors if it doesnt
  // transpiles and outputs a JS file
  // compile with command:
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
  


