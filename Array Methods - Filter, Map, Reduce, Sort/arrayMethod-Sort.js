// # Sort method first convert numbers into string and then check first character according to UTF-16 characterset.
//  It dosen't return anything, it manipulates the original array.

// Comparefunction returns +ve ---> a is indexed above b
// Comparefunction returns -ve ---> b is indexed above a
// Comparefunction returns 0 ---> order remain same


const scores = [3, 50, 65, 11, 10, 2];

scores.sort();
console.log(scores);



const scoreCard = [
    { name:"Mohit", marks:100},
    { name:"Alok", marks:99},
    { name:"Anmol", marks:12},
    { name:"Mall", marks:10},
    { name:"Abhi", marks:15}
];

// function compareFunction(a,b){
//     if(a.marks > b.marks){
//         return -1;
//     }else if(b.marks > a.marks){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// scoreCard.sort(compareFunction);




// ### ShortHand Way ###

scoreCard.sort((a,b) => b.marks - a.marks);


console.log(scoreCard)