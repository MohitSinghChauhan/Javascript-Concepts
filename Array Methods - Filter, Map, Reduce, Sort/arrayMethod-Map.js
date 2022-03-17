
// # Map method 
//  its callback function returns updated value of that corresponding 
//  element of that array.
// It returns array.

// # On Array

// const array =[ 10, 30,34, 80, 73, 11];

// const mappedArray= array.map( (element) => { return element/2});
// console.log(mappedArray);


// On Array of Objects

const Menu = [
    {name:"Shaahi Panner", price:80},
    {name:"Kadhai Panner", price:100},
    {name:"Lassi", price:30},
    {name:"Egg Curry", price:70},
];

const afterDisscount = Menu.map( (dish)=>{
    if(dish.price > 40){
        return {name: dish.name, price:dish.price*0.7};
    }
    else{
        return dish;
    };
})


// const afterDisscount = Menu.map( (dish)=>{
//     if(dish.price > 40){
//         dish.price= dish.price*0.7;
//         return dish;
//         // return {name: dish.name, price:dish.price*0.7};

//         // if we use this approach then it will change our source data so this is not preferred to keep original data intact.
//     }
//     else{
//         return dish;
//     };
// })

    



console.log(afterDisscount);
console.log(Menu);