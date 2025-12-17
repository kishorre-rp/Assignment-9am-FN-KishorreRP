const a = [1, 2, 3];
const b = [4, 5, 6];

const combinedConcat = a.concat(b);
console.log("Combined with concat:", combinedConcat);

const combinedSpread = [...a, ...b];
console.log("Combined with spread:", combinedSpread);
