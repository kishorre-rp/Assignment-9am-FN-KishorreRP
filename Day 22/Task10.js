
function login(username, password) {
  const correctUsername = "Kishorre";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    return "Login Successful";
  } else {
    return "Try Again";
  }
}

console.log(login("admin", "1234"));  
console.log(login("Kishorre", "1234"));   
