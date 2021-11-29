localStorage API

used to remember save data and retrieve remembered saved data without it being erased in the browser


localStorage.getItem('key')          
localStorage.setItem('key', value)

key = where you want to save the data
value = the value you want to save  

value you save MUST be a string
- so if you're value is an array or object then you need to use:
  JSON.stringify(value) to turn it into a JSON version to be saved in localStorage

- then when you need to get those items frmo localStorage you must use:
  JSON.parse(stringifiedValue)
