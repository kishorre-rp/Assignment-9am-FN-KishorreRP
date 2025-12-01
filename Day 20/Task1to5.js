//Task-1


// Primitive Type: 1. string
let myString = "Hello, Kishorre R P";

// Primitive Type: 2. number
let myNumber = 21;

// Primitive Type: 3. boolean
let myBoolean = true;

// Primitive Type: 4. null
let myNull = null;

// Primitive Type: 5. undefined
let myUndefined;

// Primitive Type: 6. symbol 
const mySymbol = Symbol("uniqueId");

// Primitive Type: 7. bigint (Requires ES2020+)
const myBigInt = 900719925474091n + 1n; 


//Task- 2  Check each variable's type with typeof

console.log("Type of myString:" , typeof myString);     
console.log("Type of myNumber: ", typeof myNumber);      
console.log("Type of myBoolean:" ,typeof myBoolean);    
console.log("Type of myUndefined:", typeof myUndefined);
console.log("Type of mySymbol: ",typeof mySymbol);      
console.log("Type of myBigInt:" ,typeof myBigInt);      
 

//Task- 3  Create an object with 3 properties and print them


let Lorry = {
    company: "Renault",
    model: "V8engine",
    year: 2015
};

console.log("lorry Object:");
console.log("Company:" ,Lorry.company);
console.log("Model: ",Lorry.model);
console.log("Year:" ,Lorry.year);


// Task-4 Convert "100" to a number

let strNumber = "100";

// Method 1: Using Number() constructor
let num1 = Number(strNumber); 
console.log(`Converted "${strNumber}" to Number: ${num1}, Type: ${typeof num1}`);


// Task-5  Convert false to a string

let boolValue = false;

// Method 1: Using String() constructor
let str1 = String(boolValue);
console.log(`Converted ${boolValue} to String : "${str1}", Type: ${typeof str1}`);

