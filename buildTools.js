// Build Tools
  // 1. package managers  - npm, yarn, homebrew
  // 2. bundlers          - webpack, browserify, parcel, popup, vite, rollup
  // 3. task runners      - gulp, grunt


// what do build tools do?
  // 1. minify code for production which will improve performance
  // 2. run unit tests with one command
  // 3. preview app changes automatically 


// web development ecosystem:
  // - a set of tools that are used to build web applications and how they interact with each other to make a finished product
  // 1. development - HTML, CSS, JS, REACT, NODE
  // 2. testing - JEST, Mocha
  // 3. deployment - task runners and bundlers (build and automate)


// task runners
  // compile SCSS to CSS
  // compiled Typescript to JS


/// bundlers
  // package JS files, stylesheets, images, and fonts into bundled files. 
  // remove unused and duplicated code
  // improve download speed
  // use dependency graphs to map out connected resources


// dependency graphs
  // maps the connections between different files to tell the bundler what needs to be included in order to build the application
  // when one file depends on another etc


source > compile > bundle > run > deploy


// build tools use processes like:
  // 1. code splitting - splitting up code into multiple files or chunks to be loaded on a as needed basis
  // 2. minification - remove comments, whitespace, unneeded data to make the bundle smaller
  // 3. dead code eliminitaion - removes any code not actually used
  // 4. tree shaking - searches modules for files and functions not being used and removes them

