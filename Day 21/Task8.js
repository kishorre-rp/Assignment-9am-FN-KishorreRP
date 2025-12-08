const CORRECT_PASSWORD = "sesame";
let input;

do {
 
  if (input === undefined) {
    input = "kkijk"; 
  } else if (input === "kkijk") {
    input = "sesame"; 
  }

  if(input === CORRECT_PASSWORD){
    console.log("correct password");
  }
} while (input !== CORRECT_PASSWORD);



