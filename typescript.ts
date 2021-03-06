// typescript
  // a superset of JS
  // built by Microsoft in 2012
  // a programming language similar to JS but with new features and a type system
  // file type is .ts
  // uses a type system
  

// why typescript?
  // the type system shows bugs, clarifies structure, and refactors code
  // helps with debugging
  

// HOW IS CODE TRANSPILED ? 
  // code is transpiled into JS that checks if code has correct standards and shows errors if it doesnt
  // transpiles and outputs a JS file
  // compile and check for errors with command:
    tsc
  
  // to read the file main.ts and execute the code you would use this command
    tsc main.ts
    // reads main.ts and then creates a new main.js file used for code execution


// tsconfig.json file
  // to create this file with already populated rules type the command
  tsc --init
  // you can comment out what you don't want or uncomment what you want to apply
  
  // inside compiler options object
  "target" : "es2016" // compiles your tsc into es6 syntax javascript
  "outDir" : "js" // will create a folder called js where the compiled ts files will be as js files inside
  "watch" : true, // on save it will compile your tsc in watch mode without having to type tsc in the terminal after every change
    
  // after compiler options you can add
  "files" : ["app/app.ts"] // tells compiler what files to compile everytime it's run



// why typescript instead of JS?
  // best for larger applications especially for run time



// Types: optional feature
  // boolean
  // string
  // number
  // any (opt out of type checking, can be any value)
  // void (absense of type)
  // null
  // undefined
  // never (never occur)



// variables & value types    
  // you can declare variables with an INITIAL value that can never be reassigned a different value type
  // if we try to assign it to a different value type then we get an error
  // you tell ts what type something is or will be by using type annotation with a colon after the variable name
  // these get automatically removed when it compiles to js 
    
    let order: string = 'first'; // order will always equal a string and can NEVER be a boolean or number or null etc
    order = 1;      // Incorrect - will error 'Type 1 is not assignable to type string'
    order = '1';    // correct
    


// Union Types
  // adding different types together to allow for assigned different types on the same variable

  // example:
    let someValue: number | string; // union of number and string type
    someValue = 42;       // correct
    someValue = 'hello';  // correct
    someValue = true;     // error incorrect
  
  // example:
    let mysteryString: string | null | undefined;
    mysteryString = null;      // correct
    mysteryString = undefined; // correct



// null and undefined 
    // can be assigned to any type by default but leads to bugs in JS, so a solution to avoid that is adding the:
    --stringNullChecks // compiler option needs to be set to true*

  // example:
    let basicString: string;
    basicString = null;      // incorrect error
    basicString = undefined; // incorrect error

  // example:
    let nullableString: string | null; // value can only be string or null
    nullableString = null;             // correct
    nullableString = undefined;        // incorrect error



// ANY
  // when a variable is declared but given no value, ts says it has a value type of ANY
  // a ANY type variable can be reassigned to ANY value type without error
  
  let onOrOff;      // no initial value set so ts considered it to be ANY type
  onOrOff = 1;      // correct
  onOrOff = false;  // also correct
  
  // this can cause problems and break our code if we assign it to a wrong type so don't use it alot



// type Assertions
  let value: any = 5;
  
  let fixedString: string = (<number>value).toFixed(4); // value variable is a number
  console.log(fixedString) // 5.0000

  // or another way to write it:

  let fixedString: string = (value as number).toFixed(4); // value variable is a number
  console.log(fixedString) // 5.0000




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



// --noImplicitAny compiler option
  // turns off the any type values that are implicitly there by default
  // this will remind you to add a type to parameters so that you don't have 'any' types just laying around

  
    
// implicit returns & default params
  // for optional parameters you can use a ? or set a default parameter inside the ()s
    // a ? is added after a parameter name to indicate it is optional and is allowed to be undefined
    // ? must be listed after all required parameters
    // params with default values don't need a ? since assigning them a def value means they are already optional

    function greet(name?: string){

    function greet(name='Anonymous'){ // cleaner
      
      
    function funFunc(score: number, message?: string): string {
      // optional message parameter
      // will return a string
    } 
      

  // example
      function proclaim(status = 'not ready...', repeat = 1) {
        for (let i = 0; i < repeat; i += 1) {
          console.log(`I'm ${status}`);
        }
      }

      proclaim(); // I'm not ready...
      proclaim('ready?'); // I'm ready?
      proclaim('ready!', 3); // I'm ready! I'm ready! I'm ready!

      
      
  // example   
   function repeatSyllableSong(syllable: string, repeatNumber: number): void {
      let song: string = '';
      for (let i = 0; i <= repeatNumber ; i++) {
        song += syllable; 
      } 
      console.log(song); // returns nothing so you need void as the return function
    }

    repeatSyllableSong('la', 4);
      
      
      
      
      
      
// explicit returns
    // state a return type with a colon after the parameter
    const greet = (name?: string): string => { // explicit return is a string
      if (name) {
        return `hello ${name}`;
      }
      return undefined; // error - type is incorrect - must be a string
    }

    // void
      // a return type that doesn't return a type so you can call the function with or without the parameter
      // makes parameter optional and assigns it a default value if no value is passed to the function

    // example
      function sendGetting(greeting: string = 'Good morning'): void {
        console.log(greeting);
      }
      
    // example
      function sillyNameGenerator(index1: number, index2: number): void {
        let firstName = ['Runny', 'Buttercup', 'Dinky'];
        let lastName = ['Bubble', 'Buffalo', 'Gross'];

        console.log(`${firstName[index1]} ${lastName[index2]}`)
      }

      sillyNameGenerator(2, 0)   // dinky bubble
  

      
      
      
// documenting functions with comments
  /**
  * this is a documentation comment
  *
  * heres another comment
  */

      
  // example      
    /**
     * Returns the sum of two numbers.
     *
     * @param x - The first input number
     * @param y - The second input number
     * @returns The sum of `x` and `y`
     *
     */
    function getSum(x: number, y: number): number {
      return x + y;
    }
  }

      
  // example
    /**
    * Loops the input value number of times logging a 
    * string in the format: I'm [status]
    *
    * @param status - A string input 
    * Default value: 'not ready'
    * @param repeat - A number value. 
    * Default value: 1
    * @returns No return value
    *
    */
    function proclaim(status = 'not ready...', repeat = 1) {
      for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
      }
    }

      
      
// Array Type Annotations []
      
  let names: string[] = ['Danny', 'Samantha'];
      // or can write like:
  let names: Array<string> = ['Danny', 'Samantha'];
  
  let names: string[] = [1,2,3]; // Type Error
  names.push(566) // Type Error
      
    // examples
      let bestNumbers: number[] = [7,77,4];
      let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
      let bestBreakfasts: string[] = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
      let bestBooleans: boolean[] = [true, false];
      
    
      
// multi-dimensional Array Types
      
    let arr: string[][] = [['str1', 'str2'], ['more', 'strings']]
      // string[][] is short for (string[])[] which is an array where every element is a type string[]
      
      let names: string[] = []; // No type errors.
      names.push('Isabella');  // any type
      
      let numbers: number[] = []; // No type errors.
      numbers.push(30); // any type 

      
      // examples
      let bestMealPlan: string[][] = [['chicken soup', 'non-chicken soup'], ['baked potato', 'mashed potato']];
      let bestBooleansTwice: boolean[][] = [[true, false], [true, false]]; // 2 dimensional
      let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],[7,77,4]] ]; // 3 dimensional
      
      
      
// tuple - an array with specific type elements and fixed lengths
      
      let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
      
      let tup: [string, string] = ['hi', 'bye'];
      let arr: string[] = ['there','there'];
        tup = ['there', 'there']; // No Errors.
        tup = arr; // Type Error! An array cannot be assigned to a tuple.
      
      // examples + errors
      let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; // correct
      let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements
      let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 
      
      
      
// Array Type Inferences
   // type inferences returns arrays
   // we may not know exactly what type inference to expect when dealing with arrays so..
   // when we want tuples, we need to use explicit type annotations.
      
      let examAnswers = [true, false, false]; // 3 booleans so boolean90 or [boolean, boolean, boolean]
      examAnswers[3] = true; // correct
      
      
      let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
      tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
      
      
      let tup: [number, number, number] = [1,2,3];
      let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].
      
      
// rest parameter types
      
      smush('a','h','h','H','H','H','!','!'); // Returns: 'ahhHHH!!'.
  
      function smush(firstString, ...otherStrings: string[]){ 
          //otherStrings is an array of strings
      }
      
      // example
      function addPower(p: number, ...numsToAdd: number[]):number{
        let answer = 0; 
        for(let i = 0; i < numsToAdd.length; i++){
          answer += numsToAdd[i] ** p;
        }
        return answer;
      }
      addPower(4, 5, 6)
      
      
      
      
      
      
      
