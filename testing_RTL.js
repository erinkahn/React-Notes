// RTL = REACT TESTING LIBRARY  
    // UI-layer testing framework to make sure components are rendering and working properly
    // https://testing-library.com/docs/react-testing-library/intro/

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
