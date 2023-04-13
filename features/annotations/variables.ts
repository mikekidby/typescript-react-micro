// variable infrence. typescript will notice that the initilized value is a number so we do not need to declare it as a number you can do this with all initilized values

// why use type inference over type annotation.
// when to use type infernece: whenever we can****
// when to use type annotation:
// 1. when a function returns the any type and we need to clarify the value
// 2. when we declare a variable on one line then initilize it later
// 3. when we want to have a variable type that cannot be infered.
let apples = 5; // we will do this mainly
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let date: Date = new Date();


//Variables as arrays. remove [] to create normal var. We are using let because we want to reassign these variables later on. Alot of these cases we should be using const
let colors: string[] = ['derp', 'derp'];
let numbersArray: number[] = [1,2,3];
let kevinArray: boolean[] = [true, true, true];

// Classes
class Car {}
let car: Car = new Car();

//Object Literals 
let point: {x: number; y: string} = {
    x: 10,
    y: "20"
};

// Functions 
const logNumber: (i: number) => void = (i: number)  =>{
    console.log(i);
};

// why does JSON parse return the 'any' type?
// because json parse will return a different value based off the input
// any type cannot handle error checking because typescript has no idea what is going on, it could be anything

const json = '{"x": 10, "y": 20}';
const coord: { x:number ; y: number } = JSON.parse(json);
console.log(coord);

//prevent variable returing any when assigned else where
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
        console.log(foundWord);
    }
}

let numbers = [-10, -1, -12];
let numbersAboveZero: boolean | number = false;


for( let i = 0; i < numbers.length; i++){
    if( numbers[i] > 0 ){
        numbersAboveZero = true;
    }
}