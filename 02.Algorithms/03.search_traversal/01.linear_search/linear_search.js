let beasts = ['Godzilla', 'Mosura', 'Centaur', 'Hydra']

//indexOf returns the index or -1
console.log(beasts.indexOf('Gozillad')) //-1
console.log(beasts.indexOf('Godzilla')) //0

//findIndex takes a func and return the index
console.log(beasts.findIndex((item) => item === 'Mosura')) //1

//find returns the matched item
console.log(beasts.find((item) => item === 'Mosura')) //Mosura

//includes returns true or false
console.log(beasts.includes('Godzilla'))

//some returns if ANY item satisfies the condition
console.log(beasts.some((i) => i === 'Godzilla'))
