localStorage

an API used to remember save data and retrieve remembered saved data without it being erased in the browser


localStorage.getItem('key')          
localStorage.setItem('key', value)

key = where you want to save the data
value = the value you want to save  

value you save MUST be a string
- so if you're value is an array or object then you need to use:
  JSON.stringify(value) to turn it into a JSON version to be saved in localStorage

- then when you need to get those items frmo localStorage you must use:
  JSON.parse(stringifiedValue)



example:
everytime you're state's value changes, you need to save it to localStorage (JSON.stringify)

1. when app first loads, you need to set up a side effect (useEffect)
2. when you initialize the initial state not only as an empty string/array but INSTEAD with the items that are saved in localStorage (JSON.parse)


    const [notes, setNotes] = React.useState(
      JSON.parse(localStorage.getItem('notes')) || [] // get state by accessing local storage
    )
    
    // every time the notes array changes, save it to local storage
    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes)) // turn array into string 
    }, [notes])

3. the issue above is, on every render of the component, our notes state is reaching into localStorage every time and causing performance issues
4. to solve this you need to LAZY INITIALIZE the notes state so that you only reach into localStorage the first time the app loads/renders like so:

    const [notes, setNotes] = React.useState(
      function() {
        return JSON.parse(localStorage.getItem('notes')) || []
      }
    )
           
           or the es6 way:
           
    const [notes, setNotes] = React.useState(
      () => JSON.parse(localStorage.getItem('notes')) || []
    )

  

