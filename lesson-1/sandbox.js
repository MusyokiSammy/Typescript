var character = 'Mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// To compile the typescript file so that we can convert it to a 
// javascript file we have to use this command * tsc sandbox.ts* 
// tsc is the typesript compiler which compiles the typescript
// file and creates a new javascript file with the typescript code compiled into javascript code
// To auto compile the typescript file we use the command * tsc sandbox.ts -w *
// the -w flag is for watch to watch everytime the ts file changes and compile it again
