
// #Note : Filter method filter arrays or objects, when the
//            callback function inside it returns true.

// It returns array.
// Its callback function returns True/False.


// # On Arrays

const array = [10, 20, 30, 40, 5, 3, 200];
const filteredArray = array.filter( entry => {
    return entry > 10;});  

console.log(filteredArray);


// # On Arrays of Objects [JSON]
const users = [
    {user:"Mohit", premium:true},
    {user:"Anmol", premium:false},
    {user:"Abhishek", premium:true},
    {user:"Sharma", premium:false},
    {user:"Alok", premium:true},
];

const premiumUsers= users.filter(
    (user)=>{
        return user.premium;
    }
)

console.log(premiumUsers);