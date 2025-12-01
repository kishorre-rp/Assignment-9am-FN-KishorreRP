const user1 = Symbol("user_1");
const user2 = Symbol("user_2");

const users = {
  [user1]: { name: "Dinesh" },
  [user2]: { name: "Santhosh" }
};
console.log(users[user1]); 
console.log(users[user2]); 
