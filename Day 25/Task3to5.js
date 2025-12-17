const array = [1,2,300,4,500,600,7,800,9,10]
array.forEach(i => {
    console.log(i);
    
});
const map = array.map(i =>{
    return i*2
})
console.log("Squared numbers: ",map);

const filter = array.filter(i =>{
    return i > 50
})
console.log("NUmber which are greater than 50 are: ", filter);
