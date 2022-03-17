// # Reduce Array Method 
// It returns a value that can be array, string, number.

const scores = [ 10, 20, 30, 100];

// # if we havent specify the value of accumulator then it takes the first element as the value of accumulator and second value to the currentValue.

// a=10 , c=20 => a=30
// a=30 , c=30 => a=60
// a=60 , c=100 => a=160;
// const reducedArray= scores.reduce((accumulator,currentValue) => {
//     sum=accumulator+currentValue;
//     return sum; // This Sum is stored in accumulator
// });
    


//------------------------------------------------------------------    
 



// # if we have specify the value of accumulator then it takes that value to the accumulator and first value to the currentValue.

// a=0 , c=10 => a=10
// a=10 , c=20 => a=30
// a=30 , c=30 => a=60
// a=60 , c=100 => a=160;

// const reducedArray= scores.reduce((accumulator,currentValue) => {
//     sum=accumulator+currentValue;
//     return sum; // This Sum is stored in accumulator
// },0);


// console.log(reducedArray);


// # On Array of Objects

const scoresObj = [ 
    {name: "Mohit", score:90},
    {name: "Rahul", score:40},
    {name: "Alok", score:30},
    {name: "Mohit", score:90},
    {name: "Abhi", score:60},
    {name: "Rahul", score:40},
    {name: "Alok", score:30},
    {name: "Mohit", score:90},
    {name: "Abhi", score:60},
    {name: "Rahul", score:40},
    {name: "Alok", score:30},
    {name: "Mohit", score:90},
    {name: "Abhi", score:60},
    {name: "Rahul", score:40},
    {name: "Alok", score:30},
    {name: "Mohit", score:90},
    {name: "Abhi", score:60}
];

const reducedScore = scoresObj.reduce( (accumulator, currentValue) => {
    if(currentValue.name =='Alok'){
        accumulator+=currentValue.score;
    };
    return accumulator;

},0);

console.log(reducedScore);