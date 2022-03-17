//  # Chaining Array methods 
//  its simply chaining array methods together 😂

const Menu = [
    {name:"Shaahi Panner", price:80},
    {name:"Kadhai Panner", price:100},
    {name:"Lassi", price:30},
    {name:"Egg Curry", price:70},
];

const disscountedPrice = Menu
.filter( (dish) => dish.price>70)
.map( dish => `Disscounted price is now ${dish.price/2}`);

console.log(disscountedPrice);


